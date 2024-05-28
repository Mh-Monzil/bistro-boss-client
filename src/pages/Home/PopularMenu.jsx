
import SectionTitle from "../../components/SectionTitle";
import MenuItem from "../Shared/MenuItem";
import useMenu from "../../hooks/UseMenu";


const PopularMenu = () => {
    const [menu, loading] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    return (
        <div className="max-w-7xl mx-auto py-12">
            <SectionTitle
            heading="From Our Menu"
            subHeading="Popular It"
            ></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                {
                    popular.map(item => <MenuItem key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex">
            <button className="btn btn-outline border-0 border-b-4 mt-4 mx-auto">View Full Menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;