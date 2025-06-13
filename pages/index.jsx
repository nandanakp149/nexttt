import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Loginform from "@/components/form/Loginform";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [count,setCount]=useState(0);
  console.log("count",count);
  const[name,setName]=useState("");
console.log("hello",name);
const[password,setPassword]=useState("");
console.log("password",password)
const[gmail,setGmail]=useState("");
console.log("gmail",gmail)

function handleName(event){
  setName(event.target.value);
}

function handlePass(event){
  setPassword(event.target.value);
}
function handleGmail(event){
  setGmail(event.target.value);
}
function handleSubmit(){
    if(password.length <8){
    alert("password is short");
    return;
    }
    else{
    alert("submitted");
   }
}
  return (
    
 <>
       <h1>welcome back {name}</h1>
       <h4>Enter your Name</h4>
       <input type = "text" onChange={handleName}/>
       <h4>Enter your Password {password}</h4>
       <input type = "password" onChange={handlePass}/>
       <h4>Enter your Gmail {gmail}</h4>
       <input type = "text" onChange={handleGmail}/>
       <br/>
       <button onClick={handleSubmit}>SUBMIT</button>
       <Loginform formname={name} formpass={password}/>
         
    </>
  );
}
