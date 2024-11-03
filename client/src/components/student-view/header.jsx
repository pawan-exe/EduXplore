import { GraduationCap, LogOut, TvMinimalPlay } from "lucide-react";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { AuthContext } from "@/context/auth-context";

function StudentViewCommonHeader() {
  const navigate = useNavigate();
  const { resetCredentials } = useContext(AuthContext);

  function handleLogout() {
    resetCredentials();
    sessionStorage.clear();
  }

  return (
    <header className="flex items-center justify-between p-4 border-b relative">
      <div className="flex items-center space-x-4">
        <Link to="/home" className="flex items-center hover:text-black">
          <GraduationCap className="h-8 w-8 mr-2 md:mr-4 " />
          <span className="font-extrabold md:text-xl text-[14px]">
            EduXplore
          </span>
        </Link>
        <div className="flex items-center space-x-1">
          <Button
            variant="ghost"
            onClick={() =>
              location.pathname.includes("/courses")
                ? null
                : navigate("/courses")
            }
            className="text-[14px] hidden md:block md:text-[16px] font-medium"
          >
            Explore Courses
          </Button>
          <Button
            variant="ghost"
            onClick={() =>
              location.pathname.includes("/courses")
                ? null
                : navigate("/courses")
            }
            className="text-[14px] block md:hidden md:text-[16px] font-medium"
          >
            Courses
          </Button>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex gap-4 items-center">
          <div
            onClick={() => navigate("/student-courses")}
            className="flex items-center cursor-pointer gap-3"
          >
            <span className="font-extrabold hidden md:block md:text-xl text-[14px]">
              My Courses
            </span>
            <TvMinimalPlay className=" h-6 w-6 md:w-8 md:h-8" />
          </div>

          <Button className="hidden md:block" onClick={handleLogout}>
            Sign Out
          </Button>
          <LogOut
            onClick={handleLogout}
            className="h-6 w-6 block md:hidden cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
}

export default StudentViewCommonHeader;
