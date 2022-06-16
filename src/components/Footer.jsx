import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  LocationOnOutlined,
  LocalPhoneOutlined,
  EmailOutlined,
} from "@mui/icons-material";
import React from "react";

function Footer() {
  const socialStyle= 'm-3 rounded-full cursor-pointer p-2 text-white'
  return (
    <div className="flex items-center  justify-around p-2 mobile:flex-col mobile:items-start">
      <div className="flex-1 flex flex-col flex-wrap p-2">
        {/*Store information*/}
        <h1 className="text-[25px]">INFORMATION</h1>
        <p>ช้อปออนไลน์ง่ายๆสำหรับคุณ</p>
        <div className="flex item-center justify-center mt-3 self-start">
          <div className={socialStyle + ' bg-blue-700'}>
            <Facebook/>
          </div>
          <div className={socialStyle + ' bg-pink-600'}>
            <Instagram />
          </div>
          <div className={socialStyle + ' bg-sky-400'}>
            <Twitter />
          </div>
          <div className={socialStyle + ' bg-red-600'}>
            <Pinterest />
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col p-2">
        <div className="flex m-3">
          <LocationOnOutlined className="text-[#8a4af3]" />
          <p className="pl-3">Bangkok</p>
        </div>
        <div className="flex m-3">
          <LocalPhoneOutlined className="text-[#521da8]" />
          <p className="pl-3">+66 123456789</p>
        </div>
        <div className="flex m-3">
          <EmailOutlined className="text-[#8a4af3]" />
          <p className="pl-3">ponbig582@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
