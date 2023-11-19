import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const LoginForm: React.FC<Props> = () => {
  const handleLogin = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex-grow ">
        <div className="flex items-center justify-center ">
          <div className="px-8 py-6 mt-4 text-left bg-white sm:w-[450px] rounded-xl border-2 border-black shadow-lg">
            <h3 className="text-2xl font-bold text-center mt-3">
              ยินดีต้อนรับเข้าสู่ <span className="font-bold text-lightblue">SusTrack</span>
            </h3>
            <form action="" onSubmit={handleLogin}>
              <div className="mt-4">
                <div>
                  <label className="block font-medium">
                    ชื่อผู้ใช้
                    <label>
                      <input
                        type="text"
                        placeholder="Email"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-navy"
                        required
                      />
                    </label>
                  </label>
                </div>
                <div className="mt-4">
                  <label className="block font-medium">
                    รหัสผ่าน
                    <label>
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-navy"
                        required
                      />
                    </label>
                  </label>
                </div>
                <div className="flex items-baseline justify-between my-1">
                  <button
                    className="px-6 py-2 mt-4 text-white font-semibold bg-navy rounded-full hover:bg-lightblue hover:text-white transition ease-linear duration-200"
                    type="submit"
                    onClick={handleLogin}
                  >
                    เข้าสู่ระบบ
                  </button>

                  <Link to="" className="text-sm hover:underline">
                   ลืมรหัสผ่าน?
                  </Link>
                </div>
                {/* Register */}
                <div className="text-center">
                  <Link to="/register" className="text-center text-navy font-bold underline">
                    ลงทะเบียน
                  </Link>
                </div>

                <div className="text-center">
                  <button
                    className="px-4 py-3 mt-4 mr-1 text-black font-medium bg-gray-200 rounded-3xl hover:bg-lightblue hover:text-white transition ease-linear duration-00"
                    type="submit"
                    onClick={(e) => handleLogin(e)}
                  >
                    <img
                      src="images/google_logo.png"
                      alt="google"
                      width={20}
                      height={20}
                      className="inline mr-2 mb-1"
                    />
                    เข้าสู่ระบบด้วย Google
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
