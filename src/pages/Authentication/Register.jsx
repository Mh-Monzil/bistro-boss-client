import { useForm } from "react-hook-form";
import {Helmet} from 'react-helmet-async'
import UseAuth from "../../hooks/UseAuth";
import { Link, useNavigate } from "react-router-dom";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import SocialLoagin from "../../components/SocialLogin/SocialLoagin";

const Register = () => {
  const axiosPublic = UseAxiosPublic();
    const {createUser, updateUserProfile} = UseAuth();
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    createUser(data.email, data.password)
    .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const userInfo = {
            name: data.name,
            email: data.email
          }
          axiosPublic.post('/users', userInfo)
          .then(res => {
            if(res.data.insertedId){
              console.log("user added to database");
              reset();
            }
          })
          
          navigate('/')
        })
        .catch(err => console.log(err))
    })
};

  return (
    <>
    <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                
                {...register("name", { required: true })}
              />
               {errors.name && <span className="text-red-600">This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo URL"
                className="input input-bordered"
                
                {...register("photoURL", { required: true })}
              />
               {errors.name && <span className="text-red-600">This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                
                {...register("email", { required: true })}
              />
              {errors.name && <span className="text-red-600">This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                
                {...register("password", { required: true })}
              />
              {errors.name && <span className="text-red-600">This field is required</span>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" value={"Sign Up"} className="btn btn-primary" />
            </div>
            
          </form>
          <div className="mx-8">
              <SocialLoagin  />
            </div>
          <p className="p-6"><small>Already have an account <Link to='/login' >Login</Link> </small></p>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Register;
