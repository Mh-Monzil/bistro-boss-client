import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import useMenu from "../../hooks/UseMenu";
import SectionTitle from "../../components/SectionTitle";
import MenuCategory from "./MenuCategory";
import { Link } from "react-router-dom";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <Cover
        img={menuImg}
        title="Our Menu"
        description="Would you like to try a dish?"
      ></Cover>

      {/* today offer  */}
      <div className="my-16 max-w-7xl mx-auto">
        <SectionTitle
          subHeading={"Don't Miss"}
          heading={"Today's Offer"}
        ></SectionTitle>
        <MenuCategory items={offered} />
      </div>


      {/* desserts  */}
      <Cover
        img={dessertImg}
        title="Desserts"
        description="Would you like to try a dish?"
      ></Cover>
      <div className="my-16 max-w-7xl mx-auto">
        <MenuCategory title="Desserts" items={desserts} />
      </div>

      {/* pizza  */}
      <Cover
        img={pizzaImg}
        title="Pizza"
        description="Would you like to try a dish?"
      ></Cover>
      <div className="my-16 max-w-7xl mx-auto">
        <MenuCategory title="Pizza" items={pizza} />
      </div>

      {/* salad  */}
      <Cover
        img={saladImg}
        title="Salad"
        description="Would you like to try a dish?"
      ></Cover>
      <div className="my-16 max-w-7xl mx-auto">
        <MenuCategory title="Salad" items={salad} />
      </div>

    {/* soup  */}
    <Cover
        img={soupImg}
        title="Soup"
        description="Would you like to try a dish?"
      ></Cover>
      <div className="my-16 max-w-7xl mx-auto">
        <MenuCategory title="Soup" items={soup} />
      </div>

    </div>
  );
};

export default Menu;
