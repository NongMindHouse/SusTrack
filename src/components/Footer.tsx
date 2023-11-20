import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-navy w-full py-5 text-white flex flex-col lg:flex-row items-center justify-center gap-6">
      <div className="flex items-center">
        <img className="w-[80px] sm:w-[150px]" src="images/sdgs-circle.png"></img>
        <img className="w-[200px] md:w-[300px]" src="images/cityhack-logo.png"></img>
        <img className="w-[50px] sm:w-[100px]" src="images/mascot/mascot-thumbup-right.png"></img>
      </div>

      <div className="flex sm:gap-x-10 justify-center">
        {/* Join us */}
        <div className="flex-col items-center justify-center">
          <h1 className="sm:text-[30px] text-yellow-400 font-extrabold">JOIN US</h1>
          <div>
            <Link to="/login" className="hover:underline">
              เข้าสู่ระบบ
            </Link>
          </div>
          <div>
            <Link to="/register" className="hover:underline">
              สมัครสมาชิก
            </Link>
          </div>
          <div>
            <Link to="/login" className="hover:underline">
              ลงทะเบียนองค์กร
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div className="flex-col items-center justify-center">
          <h1 className="sm:text-[30px] text-yellow-400 font-extrabold">CONTACT</h1>
          <div>
            <a href="https://github.com/NongMindHouse/SusTrack" className="hover:underline">
              <img src="/images/github-mark-white.png" className="inline w-5 mr-2 mb-1"></img>
              N'MindHouse
            </a>
          </div>
          <div>
            <a href="mailto:nongmind2105@gmail.com" className="hover:underline">
              ✉️ nongmind2105@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
