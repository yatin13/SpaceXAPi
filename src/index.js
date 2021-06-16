import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './App'
const Buttonhtml = lazy(() => import("./Buttonhtml"));
const apiDataHandler=(data)=>{
const enterData={
        ...data
    };
    const {buttonValue,launchValue,landValue}=enterData;
    localStorage.setItem("btn",buttonValue);
    localStorage.setItem("launch",launchValue);
    localStorage.setItem("land",landValue);
}
ReactDOM.render(<><Suspense fallback={<></>}><Buttonhtml saveApiData={apiDataHandler}/></Suspense><App btnVal={localStorage.getItem("btn")} launchVal={localStorage.getItem("launch")} landVal={localStorage.getItem("land")}/></>, document.getElementById("root"));
