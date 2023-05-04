import { useEffect, useContext } from "react";
import "./App.css";
import CourseList from "./pages/CoursesList";
import CourseContext from "./context/CourseContext";
import Loading from "./pages/Loading";

function App() {
  const { getDataList, loading, data } = useContext(CourseContext);

  useEffect(() => {
    getDataList();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading></Loading>
      ) : data.length === 0 ? (
        <div style={{textAlign:"center"}}>
          <h2>you deleted all your courses!!!</h2>
          <button className="delete" onClick={getDataList}>Refresh</button>
        </div>
      ) : (
        <CourseList></CourseList>
      )}
    </div>
  );
}

export default App;
