import { useState } from "react";
import orderCover from "../../assets/shop/banner2.jpg";
import Cover from "../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/UseMenu";
import OrderTab from "../../components/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categories = ['Salad', 'Pizza', 'Soup', 'Desserts', 'Drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex || 0);
  const [menu] = useMenu();
  console.log(initialIndex);
  
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
        <Helmet>
            <title>Bistro Boss | Order</title>
        </Helmet>
      <Cover img={orderCover} title={"Order Food"}></Cover>
      {/* <div className="flex items-center -mx-4 space-x-2 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap bg-gray-100 text-gray-800">
        <a className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 border-gray-300 text-gray-600">
          Architecto
        </a>
        <a className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 border-gray-300 text-gray-600">
          Corrupti
        </a>
        <a className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 border-sky-600 text-gray-900">
          Excepturi
        </a>
        <a className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 border-gray-300 text-gray-600">
          Consectetur
        </a>
      </div> */}
      <Tabs defaultIndex={tabIndex > 0 ? tabIndex : 0 } onSelect={(index) => setTabIndex(index)} className="max-w-7xl mx-auto my-16">
        <div className="mx-auto w-fit pb-6">
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        </div>
        <TabPanel>
            <OrderTab item={salad} />
        </TabPanel>
        <TabPanel>
            <OrderTab item={pizza} />
        </TabPanel>
        <TabPanel>
            <OrderTab item={soup} />
        </TabPanel>
        <TabPanel>
            <OrderTab item={desserts} />
        </TabPanel>
        <TabPanel>
            <OrderTab item={drinks} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
