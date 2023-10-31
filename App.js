import React from "react";
import ReactDOM  from "react-dom/client";
// import Header from "./component/Header";
import Header from "./src/component/Header";
import {IMG_CDN_URL} from "./src/component/Header";
import Footer from "./src/component/Footer";
import Body from "./src/component/Body";



const AppLayout=()=>{
  return(
 
  <>
 
     <Header/> 
     <Body/>
     <Footer/>
{/* {Header()} */}
</>
  );
};


  const container =React.createElement("div",{id:"container",},  <AppLayout/>);
  const root=ReactDOM.createRoot(document.getElementById('root'));
  root.render(container);