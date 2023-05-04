import { createContext, useState } from "react";
import { getData } from "../api-request/ApiRequest";

const CourseContext = createContext();

function ContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDataList = async () => {
    setLoading(true)
    try {
      const dataList = await getData();
      console.log(dataList.data);
      setData(dataList.data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const deleteData = (id) =>{
    const afterdeleted = data.filter((element)=>element.id !== id)
    setData(afterdeleted)
  }

  const sharedMethodsAndState = {
    getDataList,
    data,
    loading,
    deleteData
  };
  return (
    <CourseContext.Provider value={sharedMethodsAndState}>
      {children}
    </CourseContext.Provider>
  );
}

export { ContextProvider };
export default CourseContext;
