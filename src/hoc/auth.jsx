import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";

const withAuthChild = (SpecifiComponents, options, adminRoute) => {
    const AuthenticationCheck = () => {

        const dispatch = useDispatch();
        const navigate = useNavigate();

        useEffect(() => {
            (async () => {
                try {
                    const res = await dispatch(auth());

                    if (!res.payload.isAuth) {
                        if (options) {
                            navigate("/login");
                        }
                    } else {
                        if (adminRoute && !res.payload.isAdmin) {
                            navigate("/");
                        } else {
                            if (options === false) navigate("/");
                        };
                    };
                } catch (error) {
                    console.error("Error ouccerd while authenticating", error);
                }
            })();
        }, [dispatch, navigate, , options, adminRoute]);
        return <SpecifiComponents />
    };
    return <AuthenticationCheck />
};

export default withAuthChild;
