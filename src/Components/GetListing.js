

import axios from 'axios'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import FormControlLabel from '@material-ui/core/FormControlLabel';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));


const GetListing = () => {
    let [address, setAddress] = React.useState({})
    let [data, setData] = React.useState({})
    let [showdata, setshowdata] = React.useState(false)
    let getData = ()=>{
     
      axios.post('/getData', address)
      .then(function (response) {
        console.log(response);     
        setData(response)        
        setshowdata(true)   
        //dan api
  //       var url = "https://3c62-2607-fea8-931f-c100-5469-5dfb-4a2a-51bc.ngrok.io/create-listing-from-api";
  // var xhr = new XMLHttpRequest();
  // xhr.open("POST", url);
  
  // xhr.setRequestHeader("Content-Type", "application/json");
  
  // xhr.onreadystatechange = function () {
  //    if (xhr.readyState === 4) {
  //       console.log(xhr.status);
  //       console.log(xhr.responseText);
  //    }};
  
  // var data = {"login":"my_login","password":"my_password"};
  
  // xhr.send(data);
        // dan api 
  
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    const addressHandler = (e)=>{       
      setAddress({...address,
        [e.target.name]: e.target.value,      
      })}     
  return (
   <React.Fragment>
  <TextField id="standard-basic" onChange={addressHandler} value={address.value} name="realtorURL" label="Realtor URL" />     
  <br></br><br></br>
  <Button variant="contained" onClick={getData}>Get Data</Button>
 <br></br>
  {showdata?(<React.Fragment>
    
    <img src={JSON.parse(data.data.image1Convert)}></img>
    <img src={JSON.parse(data.data.image2Convert)}></img>
    <p>Unique URL: {data.data.uniqueAddressNoSpace}</p>
  <p>{data.data.listingAddressvalue}</p>

  <p>{data.data.listPricevalue}</p>
  <p>{data.data.propertyDescriptionConvalue}</p>
  <p>{data.data.listingAddressvalue}</p>
  <p>{data.data.detailsValue}</p>
  <p>{data.data.propertyTypeValue}</p>
  <p>{data.data.StoriesTypeValue}</p>
  <p>{data.data.CommunityNameValue}</p>
  <p>{data.data.TitleTypeValue}</p>
  <p>{data.data.LandSizeValue}</p>
  <p>{data.data.AnnualPropertyTaxesValue}</p>
  <p>{data.data.ParkingTypeValue}</p>
  <p>Bedrooms: {data.data.BedroomsValue}</p>
  <p>Bathrooms: {data.data.BathroomsValue}</p>
  <p>{data.data.BasementValue}</p>
  <p>{data.data.StyleValue}</p>
  <p>{data.data.CoolingStyle}</p>
  <p>{data.data.HeatingStyle}</p>
  <p>{data.data.ExteriorStyle}</p>
  <p>{data.data.ParkingSpacesStyle}</p>



  </React.Fragment>):null}
  </React.Fragment>
  )
}

export default GetListing
