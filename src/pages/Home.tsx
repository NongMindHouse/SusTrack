import Hero from "@/components/Home/Hero";
import RecentProject from "@/components/Home/RecentProject";
import Result from "@/components/Home/Result";
import SDGs from "@/components/Home/SDGs";
import React, { useEffect, useState } from "react";

const CoolQuote: React.FC = () => {

  const [coitVisible, setCoitVisible] = useState(false);

  useEffect(() => {
    const thirdScroll = () => {
      // Adjust the scroll threshold as needed
      const viewportH = window.innerHeight || document.documentElement.clientHeight;

      // Calculate the position where the element should become visible
      const triggerPos = viewportH * 1.8;

      console.log("viewportHeights : "+viewportH);
      console.log("triggerPositions : "+triggerPos);

      // Calculate the current scroll position
      const scrollPos = window.scrollY;
      console.log("scrollPositions : "+scrollPos);

      setCoitVisible(scrollPos > triggerPos);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", thirdScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", thirdScroll);
    };
  }, []);

  return (
    <div className="bg-black h-[300px] bg-[url('images/greenheart.jpg')]
    flex flex-col items-center justify-center p-16 gap-y-6 bg-cover bg-center bg-blend-multiply bg-opacity-60">
      {/* <img src="" alt="" /> */}
      <div className={`text-white text-2xl items-center font-mono font-extrabold transition-all duration-500 ease-in-out ${coitVisible ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
        "No one can do everything, but everyone can do something."
      </div>
      <div className={`text-white text-xl items-center text-[20px] font-IBM-Plex-Sans font-bold transition-all duration-500 ease-in-out ${coitVisible ? "scale-100 opacity-100" : "scale-125 opacity-0"} `}>
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
