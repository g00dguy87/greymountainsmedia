import "./sidebar.scss";
import React from 'react';
import toggleButton from "./toggleButton/toggleButton";



 const Sidebar = () => {
   return (
     <div className="sidebar">
       <div className="bg">
        Links
       </div>
       <toggleButton/>
     </div>
   )
 }
 
 export default Sidebar
 