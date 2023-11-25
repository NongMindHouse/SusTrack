import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Result = () => {

  const [secondVisible, setSecondVisible] = useState(false);

  useEffect(() => {
    const secondScroll = () => {
      // Adjust the scroll threshold as needed
      const viewportHeights = window.innerHeight || document.documentElement.clientHeight;

      // Calculate the position where the element should become visible
      const triggerPositions = viewportHeights * 1.3;

      // Calculate the current scroll position
      const scrollPositions = window.scrollY;

      setSecondVisible(scrollPositions > triggerPositions);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", secondScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", secondScroll);
    };
  }, []);

  return (
    <div className="bg-gray-100 lg:flex">
      {/* heatmap */}
      <div className="lg:w-1/2 overflow-hidden h-[300px] lg:h-[400px]">
        <img className={`w-full h-full object-cover transition-all duration-500 ease-in-out ${secondVisible ? "scale-100" : "scale-125"}`} src="/images/bangkok-map.png" alt="" />
      </div>
      {/* Right thing */}
      <div className="lg:w-1/2 flex items-center justify-center relative h-[400px]">
        {/* Container */}
        <div className={`text-center p-10 flex flex-col items-center justify-center overflow-hidden gap-y-5 `}>
          {/* The text */}
          <h1 className={`text-[35px] transition-all duration-500 ease-in-out ${secondVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"}`}>
            มาร่วมแรงร่วมใจ ก้าวไปด้วยกัน
            <br />
            มุ่งเข้าสู่ความยั่งยืนภายในปี
            <div className="text-lightgreen font-extrabold inline text-[30px] sm:text-[40px]"> “2030”</div>
          </h1>
          {/* Numbers */}
          <div className="flex justify-center gap-x-6 items-stretch mt-[16px]">
            <div className={`w-fit bg-gray-200 rounded-lg flex flex-col gap-y-2 px-5 pt-5 pb-3 hover:scale-105 transition duration-200 cursor-pointer delay-[.2s] ${secondVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"}`}>
              <p className="text-2xl text-gray-700 sm:text-[40px] font-bold text-left">4,917</p>
              <p className="text-[20px] text-lightblue text-left">กิจกรรม</p>
            </div>
            <div className={`w-fit bg-gray-200 rounded-lg flex flex-col gap-y-2 px-5 pt-5 pb-3 hover:scale-105 transition duration-200 cursor-pointer delay-[.5s] ${secondVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"}`}>
              <p className="text-2xl text-gray-700 sm:text-[40px] font-bold text-left">137</p>
              <p className="text-[20px] text-lightblue text-left">หน่วยงาน</p>
            </div>
            <div className={`w-fit bg-gray-200 rounded-lg flex flex-col gap-y-2 px-5 pt-5 pb-3 hover:scale-105 transition duration-200 cursor-pointer delay-[.7s] ${secondVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"}`}>
              <p className="text-2xl text-gray-700 sm:text-[40px] font-bold text-left">19,668</p>
              <p className="text-[20px] text-lightblue text-left">เป้าหมาย</p>
            </div>
          </div>
          <div className="absolute bottom-3 right-4">
            <Link to={"/result"} className="hover:underline">ดูเพิ่มเติม →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
