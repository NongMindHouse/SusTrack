const Result = () => {
  return (
    <div className="lg:flex">
      {/* heatmap */}
      <div className="lg:w-1/2 overflow-hidden h-[300px] lg:h-[400px]">
        <img src="/images/bangkok-map.png" alt="" />
      </div>
      <div className="bg-gray-100 lg:w-1/2 flex items-center justify-center">
        {/* Container */}
        <div className="text-center flex flex-col items-center justify-center overflow-hidden gap-y-5">
          {/* The text */}
          <h1 className="text-[35px]">
            มาร่วมแรงร่วมใจ ก้าวไปด้วยกัน
            <br />
            มุ่งเข้าสู่ความยั่งยืนภายในปี
            <div className="text-lightgreen font-extrabold inline text-[30px] sm:text-[40px]"> “2030”</div>
          </h1>
          {/* Numbers */}
          <div className="flex justify-center gap-x-6 items-stretch mt-[16px]">
            <div className="w-fit bg-gray-200 rounded-lg flex flex-col gap-y-2 px-5 pt-5 pb-3">
              <p className="text-2xl text-gray-700 sm:text-[40px] font-bold text-left">4,917</p>
              <p className="text-[20px] text-lightblue text-left">กิจกรรม</p>
            </div>
            <div className="w-fit bg-gray-200 rounded-lg flex flex-col gap-y-2 px-5 pt-5 pb-3">
              <p className="text-2xl text-gray-700 sm:text-[40px] font-bold text-left">137</p>
              <p className="text-[20px] text-lightblue text-left">หน่วยงาน</p>
            </div>
            <div className="w-fit bg-gray-200 rounded-lg flex flex-col gap-y-2 px-5 pt-5 pb-3">
              <p className="text-2xl text-gray-700 sm:text-[40px] font-bold text-left">19,668</p>
              <p className="text-[20px] text-lightblue text-left">เป้าหมาย</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
