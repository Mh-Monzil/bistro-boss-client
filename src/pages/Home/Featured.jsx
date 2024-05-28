import SectionTitle from "../../components/SectionTitle";
import featuredImg from '../../assets/home/featured.jpg';

const Featured = () => {
    return (
        <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${featuredImg})`}} className="bg-center bg-cover py-24 text-white bg-fixed">
            <SectionTitle
            heading="check it out"
            subHeading="Featured Item"
            ></SectionTitle>

            <div className="md:flex justify-center items-center gap-12 py-16 px-[50px] lg:px-[200px]">
                <div className="flex-1">
                    <img className=" w-[650px]" src={featuredImg} alt="" />
                </div>
                <div className="flex-1">
                    <p>Aug 20, 2025</p>
                    <p>Where can I get some?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam vero minima corrupti autem et voluptatibus exercitationem, odit rem perspiciatis saepe.</p>
                    <button className="py-2 px-5 border-2 border-transparent border-b-white hover:border-white my-3 transition-all duration-300">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;