import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle";
import axios from "axios";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";

const image_url = `https://api.imgbb.com/1/upload?key=${
  import.meta.env.VITE_IMAGE_HOSTING_KEY
}`;

const AddItems = () => {
  const axiosSecure = UseAxiosSecure();
  const axiosPublic = UseAxiosPublic();
  const { register, handleSubmit } = useForm();

  

  const onSubmit = async (data) => {
    console.log(data);

    const imageFile = data.image[0];
    const formData = new FormData();
    formData.append("image", imageFile);

    console.log(data.image[0]);

    

    const res = await axiosPublic.post(image_url, formData);
    console.log(res.data);

    if(res.data.success){
        // now send the menu item data with the image url
        const menuItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.recipe,
            image: res.data.data.display_url
        }
        console.log(menuItem);
        const menuRes = await axiosSecure.post('/menu', menuItem)
        console.log(menuRes.data);
    }
  };


//id: 1725ff5723a3e3d
  //secret: f23b3d9a808a1161b40ce404cd66a1546d226630

  return (
    <div>
      <SectionTitle
        heading={"add an item"}
        subHeading="What's new?"
      ></SectionTitle>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="form-control w-full col-span-2">
            <div className="label">
              <span className="label-text">Recipe Name</span>
            </div>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full "
            />
          </div>

          <div className="form-control w-full">
            <div className="label">
              <span className="label-text">Recipe Name</span>
            </div>
            <select
              defaultValue="default"
              {...register("category", { required: true })}
              className="select select-bordered w-full "
            >
              <option disabled value="default">
                Select a category
              </option>
              <option value="salad">Salad</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="dessert">Dessert</option>
              <option value="drink">Drink</option>
            </select>
          </div>
          <div className="form-control w-full">
            <div className="label">
              <span className="label-text">Price</span>
            </div>
            <input
              {...register("price", { required: true })}
              type="text"
              placeholder="Price"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full col-span-2">
            <div className="label">
              <span className="label-text">Recipe Details</span>
            </div>
            <textarea
              {...register("recipe", { required: true })}
              type="text"
              placeholder="Recipe Details"
              className="input input-bordered w-full h-32"
            />
          </div>
          <div className="col-span-2">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full "
            />
          </div>

          <div className="col-span-2">
            <input type="submit" className="btn" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
