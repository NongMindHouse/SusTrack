import { AuthContextValue } from "@/utils/context/AuthContext";
import React from "react";

type Props = Omit<AuthContextValue, "id" | "isAuthenticated">;

const UserNavbar: React.FC<Props> = ({ email, userName, profileUrl }) => {
  if (profileUrl === "") {
    profileUrl = "/images/no_avatar.jpg";
  }
  return (
    <div className="flex items-center pr-2 py-1 rounded-full transition duration-100 hover:scale-105 cursor-pointer">
      <img src={profileUrl} className="h-10 w-10 rounded-full" referrerPolicy="no-referrer" />
    </div>
  );
};

export default UserNavbar;
