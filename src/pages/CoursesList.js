import React, { useContext } from "react";
import CourseContext from "../context/CourseContext";
import Course from "./Course";

export default function CoursesList() {
  const { data } = useContext(CourseContext);

  return (
    <div className="course-container">
      <div>
        <h2>My Courses</h2>
      </div>
      <div className="courses-container">
        {data.map((element, index) => (
          <Course element={element} key={index}></Course>
        ))}
      </div>
    </div>
  );
}
