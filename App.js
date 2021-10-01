import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React from 'react'
import Website from './Components/Website'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import BasicTabs from './Components/BasicTabs'
import FormControlLabel from '@material-ui/core/FormControlLabel';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));



function App() {


  return (
    <Router>
    <Switch>
      <Route exact path="/">
      <div className="App">
      <BasicTabs/>
    </div>   
    </Route>  
    <Route exact path="/website">
 <Website></Website>
   </Route>  
 
    
    <Route exact path="/custom/:id">
      <Website />
     </Route>   
  </Switch>
</Router>
   
  );
}

export default App;
