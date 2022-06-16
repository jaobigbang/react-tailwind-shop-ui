import { AccountCircleOutlined, Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";

const Navbar = () => {
    const style = "text-[14px] cursor-pointer ml-[25px] mobile:ml-[5px]";
  return <div className='navbar h-[60px] shadow-md relative z-10 '>
      <div className='wrapper pl-[50px] pr-[50px] pt-[10px] pb-[10px] flex justify-between items-center mobile:pl-0 mobile:pr-0 '>

    {/*lefy */}
        <div className="left flex flex-1 items-center">
         <div className="logo font-bold text-[25px] text-[#1f2924]">JAOJUN</div>
         <div className="Nav text-[15px] ml-[50px]" >
         <a href="#" class="text-gray-800  font-semibold hover:text-[#88a496] mr-4">HOME</a>
           <a href="#" class="text-gray-800  font-semibold hover:text-[#88a496] mr-4">SHOP</a>
           <a href="#" class="text-gray-800  font-semibold hover:text-[#88a496] mr-4">PRODUCT</a>
           <a href="#" class="text-gray-800  font-semibold hover:text-[#88a496] mr-4">BLOG</a>
        </div>

         </div>
    {/*Logo */}
        <div className="center flex-1 text-center ">
          
        </div>

    {/*right */}
        <div className="right flex flex-1 items-center justify-end ">
        <div className="language cursor-pointer text-[16px]">
                En
            </div>
            
            <div className="searchInput flex border-[2px] border-solid border-lighgrey rounded-md 
            items-center ml-[10px] p-[5px] focus-within:border-[#88a496] transition-all">
                <input className="input outline-none" type="text" placeholder="Search"/>
                <Search className="" style={{fontSize:'16px'}}/>
            </div>
        <div className={style}><AccountCircleOutlined/></div>
        <div class={style}>
        <Badge badgeContent={2} color='primary'>
            <ShoppingCartOutlined/>
        </Badge>
        </div>

        </div>
      
      </div>
  </div>;
};

export default Navbar;
