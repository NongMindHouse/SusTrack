import { AuthContextValue } from "@/utils/context/AuthContext";
import React from "react";

type Props = Omit<AuthContextValue, "id" | "isAuthenticated">;

const UserNavbar: React.FC<Props> = ({ email, userName, profileUrl }) => {
  if (profileUrl === "") {
    profileUrl = "/images/no_avatar.jpg";
  }
  return (
    <div className="flex items-center hover:bg-lightblue hover:text-white px-3 py-1 bg-gray-200 rounded-full transition ease-linear duration-200 hover:scale-105">
      <img src={profileUrl} className="h-10 w-10 rounded-full" referrerPolicy="no-referrer" />
    </div>
  );
};

export default UserNavbar;
