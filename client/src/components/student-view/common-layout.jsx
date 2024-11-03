import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import StudentViewCommonHeader from "./header";
import Footer from "./footer";

function StudentViewCommonLayout() {
  const location = useLocation();
  // console.log(location);

  return (
    <div>
      {!location.pathname.includes("/course-progress") ? (
        <StudentViewCommonHeader />
      ) : null}

      <Outlet />

      {!location.pathname.includes("/course-progress") ? <Footer /> : null}
    </div>
  );
}

export default StudentViewCommonLayout;
