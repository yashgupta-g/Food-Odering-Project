import React from "react";
import ReactDom from "react-dom/client"
import Header from "./src/Header";


const heading = (
<>

<Header/>
</>


) ;

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(heading);
