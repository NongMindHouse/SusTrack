import ProjectCard from "@/components/Projects/ProjectCard";
import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ProjectDetail: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();

  //   TODO: Fetch data here
  const handleGetProject = useCallback(async (): Promise<void> => {
    try {
      //   const res = await axiosInstance.get(`/api/project/${params.id}`)
      //   if (res.status === 200) {
      //     setProjectDetail({ ...res.data.data })
      //   }
    } catch (err) {
      //   setLoading(false);
    }
  }, []);

  useEffect(() => {
    handleGetProject();
  }, [handleGetProject]);

  return (
    <div className="flex justify-center w-screen bg-white bg-[url('/images/bangkok-map-blur.png')]">
      <div className="bg-gray-100 relative overflow-hidden rounded-b-2xl w-[60em] mb-6 shadow-xl">
        {/* Arrow Back */}
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="absolute left-5 top-5 bg-white w-8 h-8 rounded hover:border hover:border-navy"
        >
          <img src="/icon/arrow_down.png" className="absolute left-2 top-3 w-4 rotate-90 drop-shadow-2xl" alt="arrow" />
        </button>

        {/* Banner */}
        <div className="overflow-hidden">
          <img
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt="banner"
            className="h-[400px] object-cover w-full"
          />
        </div>

        {/* Title */}
        <div className="flex flex-col py-5 px-10 lg:p-10">
          <h1 className="text-3xl font-extrabold">Title is Here! {params.id}</h1>
          <div className="font-bold">องค์การบริหารส่วนตำบูด</div>
          <div className="flex">
            <p>วันที่เริ่มโครงการ: 99 Oct,2023</p>
            <p className="pl-20">ระยะเวลาโครงการ (วัน): 999 วัน</p>
          </div>
          {/* Description */}
          <p className="mt-5 mb-5">
            ฮันนีมูนรีไทร์ลอจิสติกส์สัมนาวิว พันธุวิศวกรรมหมั่นโถว เจล ตุ๋ยโก๊ะดีพาร์ตเมนต์แพตเทิร์น เคอร์ฟิวติว
            วีซ่าเฟรชโมเดลต้าอ่วย ซิ่งแคทวอล์คเยลลี่เซ็กซี่ สะบึมส์ คอนโดมิเนียมอินเตอร์ แชเชือนเทรนด์
            แซ็กคันยิบิ๊กเอ็นทรานซ์ โซนี่ตะหงิดโค้ช สะบึมสงบสุขตัวเองซื่อบื้อบร็อกโคลี หลวงปู่ไฮไลต์ อะ
            รูบิกซัพพลายเออร์สะบึมผลไม้คาร์โก้ ด็อกเตอร์บูติก กรุ๊ปบึ้มโต๋เต๋โบว์ลิ่งรีเสิร์ช วัจนะอึ๋มพูลอุปการคุณ
            แบ็กโฮเซาท์สเก็ตช์ตุ๊กตุ๊ก ควิกบรา แพทเทิร์นสุริยยาตรอันเดอร์วาไรตี้มลภาวะ มาราธอนทัวร์
            ทอล์คตุ๊ดสตรอเบอรีแรงใจไง ถูกต้อง ซาฟารีช็อคสตรอว์เบอร์รีโอเปร่า นินจาตัวเองเคอร์ฟิวนินจาโก๊ะ
            ซีรีส์แดรี่แทงโก้ เอาต์คอรัปชัน ป๋าสุริยยาตร์แชมเปี้ยนวิภัชภาคเอ็นจีโอ ยาวีวืดหมวยโฟนเปเปอร์
            เซนเซอร์ฮาร์ดนู้ดดัมพ์มหาอุปราชา โต๋เต๋เชอร์รี่สปอต รีเสิร์ช สโลว์มาร์จิน
            ปาร์ตี้รีไซเคิลสตาร์ฟลุคพันธุวิศวกรรม ฟรุตพาสเจอร์ไรส์แครอทพะเรอ ซีดานแคปเป่ายิ้งฉุบสตรอเบอร์รีเคลียร์
            ซิมโฟนี่สกายเพทนาการไฮแจ็คพุดดิ้ง พุทโธ ฮาร์ดมิลค์โฮลวีตอัลมอนด์ โบรชัวร์เฟรชชี่ขั้นตอน ออกแบบออกแบบฮีโร่
            โยเกิร์ตพะเรอ คำสาปสปิริตเซลส์แมนรีดไถ กรอบรูปตัวเองวอลล์สป็อตนรีแพทย์ ภควัมบดีเนิร์สเซอรี่ดีลเลอร์ โอเลี้ยง
            ไวอากร้าสปาบิลศากยบุตรถ่ายทำ ว่ะคอนแท็คพาสปอร์ตรองรับ อัลบั้มพ่อค้าแฟนซี ละตินแบ็กโฮเซลส์แมนต่อรอง สังโฆ
            ซูเปอร์ รีพอร์ทฟอยล์ ไฟต์ผลักดัน สจ๊วตโปรโมชั่นบร็อกโคลีแอ็คชั่นคอนเซ็ปต์ ศิรินทร์ ดยุคมินท์
            สกรัมหล่อฮังก้วยแฮปปี้อึ๋มมิวสิค คาวบอย ธรรมาปาสกาลแบล็คพะเรอเยอร์บีรา โอ้ยเซ็นเซอร์เวิร์ลด์ตู้เซฟ
            ระโงกรีโมตบู๊ริกเตอร์ต่อรอง สเตเดียมเยนจังโก้โกะ พาวเวอร์บู๊ดอกเตอร์ด็อกเตอร์ เจลฮ่องเต้ซี้แอปเปิ้ลรูบิก
            สตรอเบอรีแฟกซ์แซว แซมบ้า มาราธอนกิฟท์ แมมโบ้หลวงปู่ครัวซอง อัตลักษณ์โยโย่มาร์คเซี้ยว น็อค ซาตาน บึม รีสอร์ต
            แคมป์ โปรเจกเตอร์ซีดาน ว้อยว้อดก้าเครปโซนี่สเตชัน โซนี่ซ้อเทวาซีเรียส
          </p>

          <Link
            to="https://youtu.be/dQw4w9WgXcQ?si=MHrhltwzfU2XnkEW"
            target="_blank"
            className="block text-center w-fit bg-navy text-sm p-1 px-3 rounded-2xl text-white hover:bg-blue-700 transition duration-100 hover:scale-[1.03]"
          >
            เยี่ยมชมเว็บไซต์กิจกรรม
          </Link>

          <hr className="mx-6 my-2 md:my-5 bg-gray-300" />

          {/* Avatar */}
          <div className="flex justify-center items-center sm:gap-x-4 md:gap-x-10">
            <img src="/images/no_avatar.jpg" alt="Avatar" className="h-28 rounded-full" />
            <div>
              <h1 className="sm:text-xl font-bold pb-4">องค์การบริหารส่วนตำบล</h1>
              <Link
                to={""}
                className="block text-center w-fit bg-navy text-sm p-1 px-3 rounded-2xl text-white hover:bg-blue-700 transition duration-100 hover:scale-[1.03]"
              >
                เยี่ยมชมหน่วยงาน
              </Link>
            </div>
          </div>
          <div className="flex justify-between py-4">
            <p>โครงการอื่นๆ</p>
            <Link to="/projects" className="hover:underline">
              ดูทั้งหมด →
            </Link>
          </div>
          <div className="flex gap-x-6">
            <ProjectCard
              id="2"
              title="Tetas"
              image="https://fastly.picsum.photos/id/658/536/354.jpg?hmac=lJsBY1i-cotZRX7y_Gs4NWkIaCtyhT3HhAeLnRpra8k"
              desc="some description"
            />
            <ProjectCard
              id="3"
              title="Tetas"
              image="https://fastly.picsum.photos/id/658/536/354.jpg?hmac=lJsBY1i-cotZRX7y_Gs4NWkIaCtyhT3HhAeLnRpra8k"
              desc="some description"
            />
            <ProjectCard
              id="3"
              title="Tetas"
              image="https://fastly.picsum.photos/id/658/536/354.jpg?hmac=lJsBY1i-cotZRX7y_Gs4NWkIaCtyhT3HhAeLnRpra8k"
              desc="some description"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
