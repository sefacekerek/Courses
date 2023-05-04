import axios from 'axios';


export const getData = ()=> {
 const reponse = axios.get("http://localhost:3004/courses")
return reponse;
}
