import React from "react";

const Data = (props) => {
  props.HandleName(`My name is ${props.FullName} `);
  return (
    <>
      <div style={{display:"flex" , fontSize: "larger" ,
      color: "white" , alignItems: "center" , justifyContent: "center" , margin:"7%",}}>
      <img src={props.src} alt=""/>{props.children}
        <div className="cont" style={{display:"flex", flexDirection:"column", justifyContent: "center", 
        backgroundColor:"black", alignItems: "start", margin:"0px 20px 0px 20px", padding:"20px",
        borderRadius:"15px"}}>
        <h2 style={{color: "white" }}>{props.FullName || "Profile Name"}</h2>
        <h3>Profession : {props.Profession || "Profile profession"}</h3>
        <p>Bio : {props.Bio || "Profile bio"}</p>
        </div>
      </div>
    </>
  );
};

export default Data;
