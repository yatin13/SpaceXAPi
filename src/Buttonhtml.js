import React,{useState} from 'react';
import './filter.css'
const Buttonhtml=(props)=>{
const [userInput,setUserInput]=useState({btnValue:'',launchVal:'',landVal:''})
const buttonHandler=(event)=>{
  setUserInput((prevState)=>{
  return {...prevState,btnValue:event.target.innerHTML};
})
}
const launchHandler=(event)=>{
  setUserInput((prevState)=>{
    return {...prevState,launchVal:event.target.innerHTML};
  })
}
const successHandler=(event)=>{
  setUserInput((prevState)=>{
   return {...prevState,landVal:event.target.innerHTML};
  })
}
const apiData={
  buttonValue:userInput.btnValue,
  launchValue:userInput.launchVal,
  landValue:userInput.landVal
}
props.saveApiData(apiData);
  return(
    <div>
        <h1>SpaceX Launch Programs</h1>
        <div className="filter">
        <p className="head">Filters</p>
        <h3 className="launch_head">Launch Year</h3>
        <div className="button_container">
        <button onClick={buttonHandler}>2006</button>
        <button onClick={buttonHandler}>2007</button>
        <button onClick={buttonHandler}>2008</button>
        <button onClick={buttonHandler}>2009</button>
        <button onClick={buttonHandler}>2010</button>
        <button onClick={buttonHandler}>2011</button>
        <button onClick={buttonHandler}>2012</button>
        <button onClick={buttonHandler}>2013</button>
        <button onClick={buttonHandler}>2014</button>
        <button onClick={buttonHandler}>2015</button>
        <button onClick={buttonHandler}>2016</button>
        <button onClick={buttonHandler}>2017</button>
        <button onClick={buttonHandler}>2018</button>
        <button onClick={buttonHandler}>2019</button>
        <button onClick={buttonHandler}>2020</button>
      </div>
      <h3 className="launch_head2">Successful Launch</h3>
      <div className="succLaunch">
      <button onClick={launchHandler}>True</button>
      <button onClick={launchHandler}>False</button>
      </div>
        <h3 className="launch_head2">Successful Landing</h3>
        <div className="successRender">
       <button onClick={successHandler}>True</button>
       <button onClick={successHandler}>False</button>
      </div>
      </div>
    </div>
  );
} 
export default Buttonhtml;