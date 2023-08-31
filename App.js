import React from "react";
import ReactDom from "react-dom/client"
import Header from "./src/Header";
import {Body} from "./src/Body";


const heading = (
<>
<Header/>
<Body/>
</>


) ;

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(heading);
