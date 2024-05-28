import { MdDelete } from "react-icons/md";
import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/UseMenu";
import { RxUpdate } from "react-icons/rx";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";

const ManageItems = () => {
  const [menu, loading, refetch] = useMenu();
  const axiosSecure = UseAxiosSecure();

  const handleDelete = async (id) => {
    const res = await axiosSecure.delete(`/menu/${id}`);
    console.log(res.data);
    if(res.data.deletedCount > 0) {
      refetch();
    }
  }

  const handleUpdate = (id) => {

  }

  return (
    <div>
      <SectionTitle
        heading={"Manage All Items"}
        subHeading="Hurry Up"
      ></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {menu?.map((item, idx) => (
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
                    onClick={() => handleUpdate(item._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    <RxUpdate className="text-3xl text-red-500" />
                  </button>
                </th>
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

export default ManageItems;
