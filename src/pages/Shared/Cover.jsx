import { Parallax } from 'react-parallax';

const Cover = ({img,title, description}) => {
  return (
    <div
      className="hero h-[700px] bg-center bg-cover"
      style={{
        backgroundImage:
          `url(${img})`
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl md:text-7xl font-bold uppercase">{title}</h1>
          <p className="mb-5 text-2xl font-semibold">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
