import React from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { display } from "@mui/system";
const Website = (props) => {

    
  let [displayData, setdisplayData] = React.useState();  
  let [showData, setShowData] = React.useState(false)
  let { id } = useParams();
  let data = { id };

let TitleTypeValue
 
// React.useEffect(() => {
//       axios.post("/customsite", data).then((res) => {
//         setdisplayData(res);  
//         TitleTypeValue = res.data[0].id 
//         console.log(res.data[0])
//         setShowData(true)  
       
//       });
   
//   }, []);

  return (
    <>
    <React.Fragment>
      <h3>ID: {id}</h3>
    {/* {showData?(<h1>WEBSITE GOES{displayData.data[0].listPricevalue}</h1>):null} */}
      </React.Fragment>
  

    </>
  );
};

export default Website;
