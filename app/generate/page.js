"use client"
import React, { useState } from "react";
import { Suspense } from "react";
import Navbar from "@/component/Navbar";
import Image from "next/image";

import { ToastContainer, toast } from "react-toastify";
import { useParams, useSearchParams } from "next/navigation";

const Generate = () => {

  const searchParams= useSearchParams()


  // const [link,setlink]= useState("");
  // const [linktext,setlinktext]= useState("")
  const [Links,setLinks]= useState([{link:"",linktext:""}])
  const [handle,sethandle]= useState(searchParams.get('handle'))
  const [pic,setpic]= useState("")

  const handleChange =(index,link,linktext)=>{
       setLinks((initiallinks )=>{
    return initiallinks.map((item,i)=>{
      if(i==index){
        return {link,linktext}
      }
      else
        return item
     })
       })
  }

  const notify = () => {
    //     toast("Custom message", {
    //   position: "top-right",     // top-left, top-center, bottom-left, etc.
    //   autoClose: 3000,           // ms me duration
    //   hideProgressBar: false,    // progress bar dikhani hai ya nahi
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   theme: "colored",          // light, dark, colored
    // });
    toast("Wow so easy!");
  };

  const submitLinks = async (Links,  handle) => {

    const myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "handle": handle,
      "Links": Links,
      "pic":pic
    });

    console.log(raw)

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const r = await fetch("http://localhost:3000/api/generate", requestOptions)
    const result = await r.json();
    
    if(result.success){

      toast.success(result.message)
      setLinks([])
      setpic()
      sethandle()
    }
    else{
      toast.error(result.message)
    }
    
  };

  const addLinks =()=>{
setLinks(Links.concat([{link:"",linktext:""}]))
  }


  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className=" min-h-screen z-40 grid grid-cols-2 bg-[#d6a231]">
        <div className="firstgrid flex flex-col justify-center items-center  ">
          <div className="allContent flex flex-col w-[33vw] ">
            <h1 className="font-bold text-3xl font-sans">
              Create Your LinkTree
            </h1>
            <div className="  flex flex-col gap-2 mt-5">
              <h2 className="font-semibold">Step 1: Claim your Handle</h2>
              <input
              value={handle || ""}
              onChange={e=>{sethandle(e.target.value)}}
                className="bg-white  rounded-[9px] w-[29vw] h-9 text-clip pl-3 ml-13"
                type="text"
                placeholder="Choose a Handle"
              />
            </div>

            <div className="  flex flex-col gap-2 mt-5">
              <h2 className="font-semibold">Step 2: Add links</h2>





              {Links && Links.map((item,index)=>{
                return <div key={index} className="flex flex-row gap-3">
                <input
               value={item.link || ""}
              onChange={e=>{handleChange(index,e.target.value,item.linktext)}}
                  className="bg-white  rounded-[9px] w-full h-9 text-clip pl-3 ml-13"
                  type="text"
                  placeholder="Enter link text"
                />
                <input
              value={item.linktext || ""}
              onChange={e=>{handleChange(index,item.link,e.target.value)}}
                  className="bg-white  rounded-[9px] w-full h-9 text-clip pl-3 "
                  type="text"
                  placeholder="Enter link"
                />
              </div> })}

                <button onClick={e=>{addLinks()}} className="text-white bg-black font-medium w-[15vw]  rounded-[9px] ml-[10vw] h-8 font-sans hover:cursor-pointer">
                  + add link
                </button>





            </div>

            <div className="  flex flex-col gap-2 mt-5">
              <h2 className="font-semibold">
                Step 3: Add picture and finalize
              </h2>
              <div className="flex flex-row gap-3">
                <input
                value={pic || ""}
              onChange={e=>{setpic(e.target.value)}}
                  className="bg-white  rounded-[9px] w-[54vw] h-9 text-clip pl-3 ml-13"
                  type="text"
                  placeholder="Enter link to your picture"
                />
                <button
                
                disabled={pic === "" || handle === "" || (Links[0]?.linktext || "") === ""}

                  onClick={e=>{submitLinks(Links, handle)}}

                  className=" disabled:bg-slate-800 text-white bg-black font-medium w-[12vw] rounded-[9px] h-8 font-sans hover:cursor-pointer"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="secondgrid h-screen w-full ">
          <Image 
            className="h-screen w-full  object-contain"
            src="generateimg.png"
            alt="generate image"
          />
        </div>
      </div>
    </>
  );
};

export default Generate;



//1:29