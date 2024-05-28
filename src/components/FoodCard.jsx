import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import axios from "axios";
import UseAxiosSecure from "../hooks/UseAxiosSecure";
import UseCart from "../hooks/UseCart";


const FoodCard = ({item}) => {
    const {name, image, price, recipe, _id} = item;
    const {user} = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = UseAxiosSecure();
    const [,refetch] = UseCart();
    
    const handleAddToCart = food => {
      if(user && user.email){
        console.log(food, user?.email);
        const cartItem = {
          menuId: _id,
          email: user.email,
          name,
          image,
          price
        }
        axiosSecure.post("/carts", cartItem)
        .then(res => {
          console.log(res.data);
          refetch();
        })
      }else{
        alert("please login");
        navigate('/login', {state: {from: location}})
      }
    }


  return (
    <div className="card max-w-96 mx-auto bg-base-100 shadow-xl">
      <div>
      <figure>
        <img
          src={image}
        />
      </figure>
      <p className="absolute right-4 top-4 bg-slate-700 text-white py-0.5 px-4 rounded-sm">${price}</p>
      </div>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
        <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 mt-4 mx-auto">Add TO Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
