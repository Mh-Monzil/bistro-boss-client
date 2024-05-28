
import FoodCard from "./FoodCard";

const OrderTab = ({item}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {item.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTab;
