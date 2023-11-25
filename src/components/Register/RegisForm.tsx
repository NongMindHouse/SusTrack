import { auth, googleProvider } from "@/lib/firebase";
import { Axios } from "@/utils/Axios";
import { signInWithPopup } from "firebase/auth";
import React from "react";

type Props = {};

const RegisForm: React.FC<Props> = () => {
  const handleRegis = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
  };

  const handleGoogleLogin = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    const idToken = await result.user.getIdToken();
    console.log(idToken);
    Axios.post(
      "/api/users/login",
      {},
      {
        headers: { "id-token": idToken },
      }
    )
      .then((response) => {
        if (response.status === 200 || 201) window.location.pathname = "/";
        else console.log("Err");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex-grow ">
        <div className="flex items-center justify-center ">
          <div className="px-8 py-6 mt-4 text-left bg-white sm:w-[450px] rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-center mt-3">
              ลงทะเบียน <span className="font-bold text-lightblue">SusTrack</span>
            </h3>
            <form action="" onSubmit={handleRegis}>
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

                <div className="mt-4">
                  <label className="block font-medium">
                    ยืนยันรหัสผ่าน
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

                <div className="flex items-baseline justify-center my-1">
                  <button
                    className="px-6 py-2 mt-4 text-white font-semibold bg-navy rounded-full hover:bg-lightblue hover:text-white hover:scale-110 transition ease-linear duration-200"
                    type="submit"
                    onClick={handleRegis}
                  >
                    ลงทะเบียน
                  </button>
                </div>

                <div className="text-center">
                  <button
                    className="px-4 py-3 mt-4 mr-1 text-black font-medium bg-gray-200 rounded-full hover:bg-lightblue hover:text-white hover:scale-110 transition ease-linear duration-200"
                    type="submit"
                    onClick={handleGoogleLogin}
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

export default RegisForm;
