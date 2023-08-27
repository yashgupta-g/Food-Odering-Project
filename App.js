import React from "react";
import ReactDom from "react-dom/client"
import Header from "./src/Header";
import Body from "./src/Body";
import Footer from "./src/Footer";


const heading = (
<>
<Header/>
<Body/>
<Body/>
<Body/>
<Body/>
<Body/>
<Body/>
<Body/>
<Body/>

<Body/>
<Body/>
<Body/>



<Footer/>
</>


) ;

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(heading);
