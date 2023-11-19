import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div className="bg-gray-50 flex items-center flex-col relative">
      <section className="w-full bg-hero bg-cover bg-center py-24 h-screen">
          <div className="container mx-auto text-center text-white grid grid-cols-[25%_45%_30%]">
            <div className="h-4/5 flex items-center col-span-1 justify-end overflow-clip">
              <img src="images/mascot/mascot-laptop-right.png" className="h-full"></img>
            </div>
            <div className="h-full flex items-center">
                <div className="text-left">
                  <h1 className="text-lightblue font-bold text-9xl drop-shadow-[4px_4px_0px_rgba(0,0,0,0.75)]">SusTrack</h1>
                  <p className="text-xl mb-12 text-navy font-bold">Public SDGs Activity Monitoring Platform</p>
                </div>
            </div>
            <div className="bg-gray-50/60 rounded-3xl h-3/5 mt-20">
              <p className="text-xl text-gray-900 font-bold mt-16 mb-10 mx-10">ระบบติดตามกิจกรรมสาธารณะที่สอดคล้องกับเป้าหมายการพัฒนาที่ยั่งยืน</p>
              <Link to="/map" className="bg-navy text-white text-xl py-3 px-10 rounded-full hover:bg-lightblue my-10">
                ดูแผนที่กิจกรรม SDGs
              </Link>
              <p className="text-xl text-gray-900 font-bold mt-5 mb-3">หรือ</p>
              <Link to="/map" className="bg-navy text-white text-m py-2 px-8 rounded-full hover:bg-lightblue my-10">
                รายงานผลการจัดกิจกรรม SDGs
              </Link>
            </div>
          </div>
      </section>
      <div className="text-sm bg-gradient-to-b from-transparent to-navy w-full absolute bottom-0 h-20"></div>
    </div>
  );
};

export default Hero;
