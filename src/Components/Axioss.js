import React,{useEffect,useState} from 'react'
import axios from "axios";

const Axioss = () => {
const [userData, setData] = useState([]);

useEffect(() => {
axios
//.get("https://jsonplaceholder.typicode.com/users")
.get("https://jsonplaceholder.typicode.com/photos?_limit=10")
.then ((response) => {
    setData(response.data);
});
},[]);

  return(
    <div className="text-centre mt-9 " > 
    {userData.map((data) => {
        return (
            <div>
                //{`${data.id} ${data.name}` }
                {`${data.id} UserName: ${data.title}`}
                <img src={data.url} className="h-6"/>
            </div>
        )
    })}
    </div>
  );
};
export default Axioss;