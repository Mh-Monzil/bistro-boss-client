

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center w-60 md:w-96 mx-auto">
            <p className="text-[#D99904] text-xl py-5">{subHeading}</p>
            <h3 className="uppercase text-2xl md:text-4xl py-6 border-y-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;