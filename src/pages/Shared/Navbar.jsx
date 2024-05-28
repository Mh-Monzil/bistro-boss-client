import { Link } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import { FaCartShopping } from "react-icons/fa6";
import UseCart from "../../hooks/UseCart";
import UseAdmin from "../../hooks/UseAdmin";

const Navbar = () => {
  const { user, logOut } = UseAuth();
  const [cart] = UseCart();
  const [isAdmin] = UseAdmin();

  const handleLogOut = () => {
    logOut();
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order">Order Food</Link>
      </li>
      {user && isAdmin && (
        <li>
          <Link to="/dashboard/adminHome">Home</Link>
        </li>
      )}
      {
        user && !isAdmin && <li>
        <Link to="/dashboard/userHome">Home</Link>
      </li>
      }

      {user ? (
        <button onClick={handleLogOut} className="btn btn-outline">
          Logout
        </button>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar fixed z-50 bg-black/60 backdrop-blur-sm text-white max-w-[1680px] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end gap-2">
        <Link to="/dashboard/cart" className="btn">
          <FaCartShopping />
          <div className="badge badge-secondary">+{cart.length}</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
