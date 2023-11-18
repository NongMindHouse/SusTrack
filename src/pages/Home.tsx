import Hero from "@/components/Home/Hero";
import RecentProject from "@/components/Home/RecentProject";
import Result from "@/components/Home/Result";
import SDGs from "@/components/Home/SDGs";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <div className="flex flex-col">
        <Hero />
        <SDGs />
        <Result />
        <div className="bg-black h-16">
          {/* <img src="" alt="" /> */}
          <p className="text-white text-xl flex justify-center items-center">“การเป็นเกที่ดี เริ่มจากการเกคนใกล้ตัว”</p>
        </div>
        <RecentProject />
      </div>
    </>
  );
};

export default Home;
