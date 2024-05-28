import MenuItem from "../Shared/MenuItem";
import {Link} from 'react-router-dom'

const MenuCategory = ({items,title}) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                {
                    items.map(item => <MenuItem key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex" >
            <Link to={`/order/${title}`} className="btn btn-outline border-0 border-b-4 mt-4 mx-auto">Order Your Favorite Food
            </Link>
            </div>
        </div>
    );
};

export default MenuCategory;