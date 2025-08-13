"use client"

import Image from "next/image";
import Navbar from "@/component/Navbar";
import Link from "next/link";
import { useState } from "react";
import {useRouter} from "next/navigation";


export default function Home() {

  const [text,setText] =useState("")
  const router=useRouter()
  const createTree =()=>{

    // let link;
    // if(link.startwith("https://LinkTree/")){
    //   link=text.split("/")[1]
    //   router.push(`/generate?handle=${text}`)
    // }
    // else{
    //   console.log("Please enter full url")
    // }
    console.log(text)
router.push(`/generate?handle=${text}`)


  }

  return (
    <main>
      <Navbar/>
      <section className="bg-[#254f1a] h-[140vh] grid grid-cols-2 text-white z-20">
        <div className="relative">
          <h1 className=" mt-[35vh] ml-14 font-serif text-[#D2E823] text-7xl font-extrabold">Everything you are. In one, simple link in bio.</h1>
          <p className="absolute bottom-69 ml-14  font-serif font-[16px] ">
            Join 70M+ people using Linktree for their link in bio. One link to
            help you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <span className="mt-[10vh] ml-14 absolute bottom-48 ">
            <input
            value={text}
            onChange={(e)=>setText(e.target.value)}
            className="bg-white rounded-2xl h-[9vh] text-slate-800 font-semibold text-[13px] min-w-[22vw] "
            type="text"
            placeholder="Enter your handle"
            />
          <button onClick={createTree} className="font-semibold hover:cursor-pointer h-[9vh] bg-[#E9C0E9] w-[12vw] ml-2 text-slate-900 rounded-full">Claim your LinkTree</button>

          </span>
        </div>

        <div className="">
           
           <img
           className="h-[80vh] mt-[32vh] ml-14 w-[44vw] cursor-pointer"
            src="secondGrid.png" 
            alt="homepage" 
            />

        </div>
      </section>

      <section className="bg-[#E9C0E9] h-[100vh]"></section>
    </main>
  );
}
