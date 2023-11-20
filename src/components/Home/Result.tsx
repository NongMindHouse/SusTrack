const Result = () => {
  return (
    <div className="lg:flex">
      {/* heatmap */}
      <div className="lg:w-1/2 overflow-hidden h-[300px] lg:h-[400px]">
        <img src="/images/bangkok-map.png" alt="" />
      </div>
      <div className="bg-gray-100 lg:w-1/2 flex items-center justify-center">
        {/* Container */}
        <div className="text-center flex-col items-center justify-center overflow-hidden my-[60px]">
          {/* The text */}
          <h1 className="text-[30px]">
            ก้าวไปข้างหน้าเพื่อความยั่งยืนของเกย์
            <br />
            และน้องมายด์ในปี
            <div className="text-lightgreen font-extrabold inline text-[30px] sm:text-[40px]"> “2030”</div>
          </h1>
          {/* Numbers */}
          <div className="flex justify-center gap-x-3 items-stretch mt-[16px]">
            <div className="w-fit bg-gray-200 rounded-lg flex-col items-center justify-center p-4">
              <p className="text-2xl sm:text-[40px] font-bold text-left">999,999,999</p>
              <p className="text-[20px] text-lightblue text-left">กิจกรรม</p>
            </div>
            <div className="w-fit bg-gray-200 rounded-lg flex-col items-center justify-center p-4">
              <p className="text-2xl sm:text-[40px] font-bold text-left">999</p>
              <p className="text-[20px] text-lightblue text-left">หน่วยงาน</p>
            </div>
            <div className="w-fit bg-gray-200 rounded-lg flex-col items-center justify-center p-4">
              <p className="text-2xl sm:text-[40px] font-bold text-left">999,999</p>
              <p className="text-[20px] text-lightblue text-left">เป้าหมาย</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
