const SDGs = () => {
  return (
    <div className="bg-navy py-12">
      <div className="sm:flex justify-center items-center gap-x-10 p-6">
        {/* SDGs */}
        <div className="text-white w-[700px]">
          <h1 className="text-5xl font-bold py-4">SDGs คืออะไร?</h1>
          <p>
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
          <p className="pt-10 text-right">
          <a href="https://sdgs.un.org/goals" target="_blank" className="underline">ศึกษาเพิ่มเติม →</a>
          </p>
        </div>
        {/* Image */}
        <div className="flex justify-center pt-6">
          <img src="/images/sdgs-circle.png" className="w-60 h-60 md:w-80 md:h-80 text-center" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SDGs;
