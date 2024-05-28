import { FaGoogle } from "react-icons/fa";
import UseAuth from "../../hooks/UseAuth";
import { useNavigate } from "react-router-dom";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";

const SocialLoagin = () => {
    const {googleSignIn} = UseAuth();
    const navigate = useNavigate();
    const axiosPublic = UseAxiosPublic();

    const handleGoogleLogin = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
            const userInfo = {
                email: result.user.email,
                name: result.user.displayName,
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data);
            })
            navigate('/')
        })
    }


    return (
        <div>
            <div>
                <button onClick={handleGoogleLogin} className="btn">
                    <FaGoogle />
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLoagin;