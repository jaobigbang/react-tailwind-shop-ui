import { Send } from "@mui/icons-material";
import React from "react";

function Newsletter() {
  return <div className="flex justify-center items-center h-[350px] w-[100%] flex-col bg-[#88a496] ">
    <h1 className="text-[50px] font-bold">
        NEWSLETTER
    </h1>
    <h2 className="text-[20px] mt-2">
    สมัครรับจดหมายข่าวของเราเพื่อรับข่าวสารและการอัปเดตล่าสุด
    </h2>
    <div className="flex mt-[3rem] item-center justify-between min-w-[30rem] min-h-[2rem] bg-white border-[#929292cc] rounded-[5px] overflow-hidden">
        <input
        className="border-none pl-[20px] flex-[7] outline-none"
        type="text"
        placeholder="email"/>
        <button className="bg-red-500 flex-1 text-white">
            <Send className="text-white"/>
        </button>
    </div>
  </div>;
}

export default Newsletter;
