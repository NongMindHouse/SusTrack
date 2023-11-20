import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div className="bg-gray-50 relative">
      <section className="w-full bg-hero bg-cover bg-center py-40 overflow-hidden h-[130vh] xl:h-screen">
          <div className="container flex items-center justify-center gap-y-[50px] gap-x-[100px] flex-wrap h-[400px] mx-auto">
            <div className="flex items-center">
              {/* Mascot */}
              <img src="images/mascot/mascot-laptop-right.png" className="w-[120px] sm:w-[200px]"></img>
              {/* SusTrack */}
              <div>
                <h1 className="text-lightblue font-bold text-[60px] sm:text-[100px] md:text-[120px] drop-shadow-[3px_3px_0px_rgba(0,0,0,0.75)] sm:drop-shadow-[4px_4px_0px_rgba(0,0,0,0.75)]">SusTrack</h1>
                <p className="text-l sm:text-xl text-navy font-bold">Public SDGs Activity Monitoring Platform</p>
              </div>
            </div>
            {/* Box */}
            <div className="bg-gray-50/70 w-[400px] h-[320px] text-center rounded-2xl flex-col shadow-xl">
              <p className="text-xl text-gray-900 font-bold mt-16 mb-10 mx-10">ระบบติดตามกิจกรรมสาธารณะที่สอดคล้องกับเป้าหมายการพัฒนาที่ยั่งยืน</p>
              <Link to="/map" className="block bg-navy text-white rounded-full w-[300px] mx-auto py-2">
                ดูแผนที่กิจกรรม SDGs
              </Link>
              <p className="py-2">หรือ</p>
              <Link to="/result" className="block bg-navy text-white rounded-full w-[300px] mx-auto py-2">
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
