

const MenuItem = ({item}) => {
    const {name, recipe, image, category, price} = item;
    return (
        <div className="flex mx-auto">
            <img className="w-[118px] h-[104px] rounded-full rounded-ss-none" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}--------</h3>
                <p className="text-[#BB8506]">${recipe}</p>
            </div>
            <p>{price}</p>
        </div>
    );
};

export default MenuItem;