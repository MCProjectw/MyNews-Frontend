import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import auth from '../actions/user_action';

export default function (SpecifiComponent, option, adminRoute = null) {
    function AuthenticationCheck(props) {
        const dispatch = useDispatch();
        const navigate = useNavigate();

        useEffect(() => {
            dispatch(auth().then((res)=> {
                console.log(res);
                if(!res.payload.isAuth) {
                    if(option) {
                        navigate("/login");
                    };
                } else {
                    if(adminRoute && !res.payload.isAdmin) {
                        navigate("/");
                    } else {
                        if(!option) navigate("/");
                    }
                }
            }))
        }, []);
        return <SpecifiComponent />;
    }
    return AuthenticationCheck;
}