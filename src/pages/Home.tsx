import Hero from "@/components/Home/Hero";
import RecentProject from "@/components/Home/RecentProject";
import Result from "@/components/Home/Result";
import SDGs from "@/components/Home/SDGs";
import React from "react";

const CoolQuote: React.FC = () => {
  return (
    <div className="bg-black h-[300px] bg-[url('images/greenheart.jpg')]
    flex flex-col items-center justify-center p-16 gap-y-6 bg-cover bg-center bg-blend-multiply bg-opacity-60">
      {/* <img src="" alt="" /> */}
      <div className="text-white text-xl items-center text-[32px] font-mono font-extrabold">
        "No one can do everything, but everyone can do something."
      </div>
      <div className="text-white text-xl items-center text-[20px] font-IBM-Plex-Sans font-bold">
        - Max Lucado
      </div>
    </div>
  );
}

const Home: React.FC = () => {
  return (
    <>
      <div className="flex flex-col">
        <Hero />
        <SDGs />
        <Result />
        <CoolQuote/>
        <RecentProject />
      </div>
    </>
  );
};

export default Home;
