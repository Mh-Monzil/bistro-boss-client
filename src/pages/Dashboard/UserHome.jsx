import UseAuth from "../../hooks/UseAuth";

const UserHome = () => {
  const { user } = UseAuth();
  return (
    <div>
      <h2 className="text-3xl">
        <span>Hi, welcome back </span>
        {user?.displayName && user?.displayName}{" "}
      </h2>
    </div>
  );
};

export default UserHome;
