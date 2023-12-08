import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';

function App() {
  const [data,setData] = useState([]);
  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const res = await fetch("https://reqres.in/api/users?page=1");
        const data = await res.json();
        console.log(data.data);
        setData(data.data)
      }catch(err){
        console.log(err);
      }
    };
    fetchData();
  },[])
  return (
    <div className="App">
      {
        data.map((item)=>{
          return (
            <div>
              <p>{item.first_name + " " + item.last_name}</p>
            </div>
          )
        })
    }
       
    </div>
  );
}

export default App;
