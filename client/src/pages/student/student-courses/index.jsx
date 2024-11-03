import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { AuthContext } from "@/context/auth-context";
import { StudentContext } from "@/context/student-context";
import { fetchStudentBoughtCoursesService } from "@/services";
import { Eye } from "lucide-react";
import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function StudentCoursesPage() {
  const { auth } = useContext(AuthContext);
  const { studentBoughtCoursesList, setStudentBoughtCoursesList } =
    useContext(StudentContext);

  const navigate = useNavigate();

  async function fetchStudentBoughtCourses() {
    setStudentBoughtCoursesList([]);
    const response = await fetchStudentBoughtCoursesService(auth?.user?._id);
    if (response?.success) {
      setStudentBoughtCoursesList(response?.data);
    }
  }

  useEffect(() => {
    fetchStudentBoughtCourses();
  }, []);

  return (
    <div
      className={`${
        studentBoughtCoursesList && studentBoughtCoursesList.length > 0
          ? "p-4"
          : "p-4 h-screen"
      }`}
    >
      <h1 className="text-3xl font-bold mb-8">My Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {studentBoughtCoursesList && studentBoughtCoursesList.length > 0 ? (
          studentBoughtCoursesList.map((course) => (
            <Card key={course?._id}>
              <CardContent className="p-4 flex-grow">
                <img
                  src={course?.courseImage}
                  alt={course?.title}
                  className="w-full object-cover rounded-md mb-4
             h-52 md:h-48 lg:h-40"
                />
                <h3 className="font-bold mb-1">{course?.title}</h3>
                <p className="text-sm text-gray-700 mb-2">
                  {course?.instructorName}
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() =>
                    navigate(`/course-progress/${course?.courseId}`)
                  }
                  className="flex-1"
                >
                  <Eye className="mr-2 h-4 w-4" />
                  Start Watching
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="flex flex-col  py-12">
            <h1 className="text-2xl font-semibold text-gray-800 mb-3">
              No Courses Found
            </h1>
            <p className="text-gray-600 mb-4">
              You haven't enrolled in any courses yet. Discover and start
              learning!
            </p>
            <Link
              to="/courses"
              className="text-purple-800 font-medium underline hover:text-purple-600 transition duration-200"
            >
              Browse Courses
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentCoursesPage;
