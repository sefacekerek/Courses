import React, { useContext } from "react";
import CourseContext from "../context/CourseContext";


export default function Course({ element }) {
    const {deleteData} = useContext(CourseContext)
  return (
    <div className="child-component-container">
        <div className="container-title-price">
            <h2 className="title">{element.title}</h2>
            <h4 className="price">{element.price}$</h4>
        </div>
        <p>{element.content}</p>
     <button className="delete" onClick={()=>deleteData(element.id)}>Delete</button>
      
    </div>
  );
}
