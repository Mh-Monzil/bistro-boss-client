import { useEffect, useRef, useState } from "react";
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import UseAuth from "../../hooks/UseAuth";
import {Helmet} from 'react-helmet-async'
import SocialLoagin from "../../components/SocialLogin/SocialLoagin";


const Login = () => {
  const {user, signIn ,loading} = UseAuth();
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    useEffect(() => {
        loadCaptchaEnginge(6); 
    }, [])

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      navigate(from, {replace: true})
    })
  };

  const handleValidateCaptcha = () => {
    const userCaptchaValue = captchaRef.current.value;
    console.log(userCaptchaValue);
    if(validateCaptcha(userCaptchaValue)){
        setDisabled(false);
    }
  }

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col md:flex-row-reverse ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                ref={captchaRef}
                type="text"
                name="captcha"
                placeholder="type the captcha above"
                className="input input-bordered"
                required
              />
              <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs mt-2">Validate</button>
            </div>
            <div className="form-control mt-6">
              <input disabled={disabled} type="submit" value={"Login"} className="btn btn-primary" />
            </div>
          </form>
          <div>
            <SocialLoagin />
          </div>
          <p><small>New Here? <Link to='/register' >Create an account</Link> </small></p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
