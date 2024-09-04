import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from '../actions/user_action'; // Make sure this is the correct path and that 'auth' is correctly exported

export default function (SpecifiComponent, option, adminRoute = null) {
    function AuthenticationCheck(props) {
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const { isAuth, isAdmin } = useSelector(state => state.user);

        useEffect(() => {
            (async () => {
                try {
                    const res = await dispatch(auth());

                    if (!res || !res.payload || !res.payload.isAuth) {
                        // User is not authenticated
                        if (option) {
                            navigate("/login");
                        }
                    } else {
                        // User is authenticated
                        if (adminRoute && !res.payload.isAdmin) {
                            // If it's an admin route and the user is not an admin
                            navigate("/");
                        } else {
                            // If the option is false (for example, a guest-only page), redirect to the homepage
                            if (!option) navigate("/");
                        }
                    }
                } catch (error) {
                    console.error("Error occurred while authenticating:", error);
                }
            })();
        }, [dispatch, navigate, option, adminRoute]);

        return <SpecifiComponent {...props} />;
    }

    return AuthenticationCheck;
}
