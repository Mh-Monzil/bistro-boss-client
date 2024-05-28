import { Link } from "react-router-dom";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import UseCart from "../../hooks/UseCart";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const [cart, refetch] = UseCart();
  const axiosSecure = UseAxiosSecure();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDelete = (id) => {
    console.log(id);
    axiosSecure.delete(`/carts/${id}`).then((res) => {
      console.log(res.data);
      refetch();
    });
  };

  return (
    <div>
      <div className="flex justify-evenly">
        <h2 className="text-3xl">Items: {cart.length}</h2>
        <h2 className="text-3xl">Total Price: {totalPrice}</h2>
        {cart.length ? <Link to="/dashboard/payment" >
          <button  className="btn btn-primary">Pay</button>
        </Link> : 
        <button disabled className="btn btn-primary" >Pay</button>
        }
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((item, idx) => (
              <tr key={item._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    <MdDelete className="text-3xl text-red-500" />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
