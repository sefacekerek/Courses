import { useEffect, useContext } from "react";
import "./App.css";
import CourseList from "./pages/CoursesList";
import CourseContext from "./context/CourseContext";
import Loading from "./pages/Loading";

function App() {
  const { getDataList, loading } = useContext(CourseContext);

  useEffect(() => {
    getDataList();
  }, []);

  return (
    <div className="App">
      {loading ? <Loading></Loading> : <CourseList></CourseList>}
    </div>
  );
}

export default App;
