import { Link } from "react-router-dom";

const Footer = () => {
  return (
  <div className="bg-navy w-full h-[300px] text-white flex items-center justify-center gap-x-10">
    <img className="w-[150px]" src="images/sdgs-circle.png"></img>
    <img className="w-[400px]" src="images/cityhack-logo.png"></img>
    <img className="w-[120px]" src="images/mascot/mascot-thumbup-right.png"></img>
    <div className="flex-col items-center justify-center">
      <h1 className="text-[30px] text-yellow-400 font-extrabold">JOIN US</h1>
      <div><Link to="/login" className="hover:underline">เข้าสู่ระบบ</Link></div>
      <div><Link to="/register" className="hover:underline">สมัครสมาชิก</Link></div>
      <div><Link to="/login" className="hover:underline">ลงทะเบียนองค์กร</Link></div>
    </div>
    <div className="flex-col items-center justify-center">
      <h1 className="text-[30px] text-yellow-400 font-extrabold">CONTACT</h1>
      <div>
        <a href="https://github.com/NongMindHouse/SusTrack" className="hover:underline">
          <img src="/images/github-mark-white.png" className="inline w-5 mr-2 mb-1"></img>
          N'MindHouse
        </a>
      </div>
      <div><a href="mailto:nongmind2105@gmail.com" className="hover:underline">✉️ nongmind2105@gmail.com</a></div>
    </div>
  </div>
  );
};

export default Footer;
