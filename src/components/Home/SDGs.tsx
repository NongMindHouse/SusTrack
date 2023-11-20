const SDGs = () => {
  return (
    <div className="bg-navy py-12">
      <div className="lg:flex justify-center items-center gap-x-10 p-6 ">
        {/* SDGs */}
        <div className="text-white w-full lg:w-[700px]">
          <h1 className="text-5xl font-bold py-4">
            <img src="/images/sdgs-circle-no-text.png" className="inline w-[50px] mb-2 mr-4 animate-[spin_30s_linear_infinite]"></img>
            SDGs คืออะไร?
          </h1>
          <p className="leading-8 text-[18px]">
            เป้าหมายการพัฒนาที่ยั่งยืน (Sustainable Development Goals: SDGs) เป็นชุดเป้าหมายการพัฒนาระดับโลกหลังปี 2015
            ที่ได้รับการรับรองจาก 193 ประเทศสมาชิกขององค์การสหประชาชาติ เมื่อวันที่ 25 กันยายน ค.ศ. 2015
            ครอบคลุมช่วงระยะเวลาที่ต้องบรรลุภายใน 15 ปี
            ได้เป็นทิศทางการพัฒนาที่ทุกประเทศที่ต้องดำเนินการร่วมกันมาตั้งแต่ปีค.ศ. 2016 ไปจนถึงปี ค.ศ. 2030
            โดยเอกสารที่ประเทศสมาชิกทั้งหมดลงนามรับรองเป็นพันธะสัญญานั้นเรียกว่า “
            <a href="https://sdgs.un.org/2030agenda" target="_blank" className="underline">
              Transforming Our World: the 2030 Agenda for Sustainable Development
            </a>
            ” หรือ “วาระการพัฒนาที่ยั่งยืน 2030” ฉะนั้นในบางโอกาส SDGs อาจถูกกล่าวถึงผ่านชื่ออื่นได้ทั้ง Agenda 2030
            หรือ Global Goals เป้าหมายการพัฒนาที่ยั่งยืน (Sustainable Development Goals: SDGs) มีทั้งหมด 17 เป้าหมาย
            (Goals) ภายใต้หนึ่งเป้าหมายจะประกอบไปด้วยเป้าหมายย่อย ๆ ที่เรียกว่า เป้าหมายย่อย (Targets)
            ซึ่งมีจำนวนทั้งหมด 169 เป้าหมายย่อย และพัฒนา ตัวชี้วัด (Indicators) จำนวน 232 ตัวชี้วัด (ทั้งหมด 244
            ตัวชี้วัดแต่มีตัวที่ซ้ำ 12 ตัว) เพื่อติดตามความก้าวหน้าของเป้าหมายย่อยดังกล่าว
          </p>
        </div>
        {/* Image */}
        <div className="flex justify-center pt-5">
          <img src="/images/sdgs-circle.png" className="w-[300px] text-center animate-[spin_30s_linear_infinite]" alt="" />
        </div>
      </div>
      <div className="text-right">
        <p className="pt-10 text-white">
          <a href="https://sdgs.un.org/goals" target="_blank" className="underline pr-10">
            ศึกษาเพิ่มเติม →
          </a>
        </p>
      </div>
    </div>
  );
};

export default SDGs;
