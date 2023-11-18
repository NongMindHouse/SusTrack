import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div className="bg-gray-50 flex items-center">
      <section className="w-full bg-hero bg-cover bg-center py-32">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-5xl text-lightblue font-bold">SusTrack</h1>
          <p className="text-xl mb-12 text-navy font-bold">Public SDGs Activity Monitoring Platform</p>
          <Link to="/map" className="bg-navy text-white text-xl py-3 px-10 rounded-full hover:bg-lightblue">
            ดูแผนที่
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Hero;
