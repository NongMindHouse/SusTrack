import { Link } from "react-router-dom";

const Result = () => {
  return (
    <div className="bg-gray-100 lg:flex">
      {/* heatmap */}
      <div className="lg:w-1/2 overflow-hidden h-[300px] lg:h-[400px]">
        <img src="/images/bangkok-map.png" alt="" />
      </div>
      {/* Right thing */}
      <div className="lg:w-1/2 flex items-center justify-center relative h-[400px]">
        {/* Container */}
        <div className="text-center p-10 flex flex-col items-center justify-center overflow-hidden gap-y-5">
          {/* The text */}
          <h1 className="text-[35px]">
            มาร่วมแรงร่วมใจ ก้าวไปด้วยกัน
            <br />
            มุ่งเข้าสู่ความยั่งยืนภายในปี
            <div className="text-lightgreen font-extrabold inline text-[30px] sm:text-[40px]"> “2030”</div>
          </h1>
          {/* Numbers */}
          <div className="flex justify-center gap-x-6 items-stretch mt-[16px]">
            <div className="w-fit bg-gray-200 rounded-lg flex flex-col gap-y-2 px-5 pt-5 pb-3 hover:scale-105 transition duration-100 cursor-pointer">
              <p className="text-2xl text-gray-700 sm:text-[40px] font-bold text-left">4,917</p>
              <p className="text-[20px] text-lightblue text-left">กิจกรรม</p>
            </div>
            <div className="w-fit bg-gray-200 rounded-lg flex flex-col gap-y-2 px-5 pt-5 pb-3 hover:scale-105 transition duration-100 cursor-pointer">
              <p className="text-2xl text-gray-700 sm:text-[40px] font-bold text-left">137</p>
              <p className="text-[20px] text-lightblue text-left">หน่วยงาน</p>
            </div>
            <div className="w-fit bg-gray-200 rounded-lg flex flex-col gap-y-2 px-5 pt-5 pb-3 hover:scale-105 transition duration-100 cursor-pointer">
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
