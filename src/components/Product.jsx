import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { useState, React } from "react";

function Product({ item }) {
  const [hoverEffect, setHoverEffect] = useState("opacity-0");
  const handleHoverEnter = () => {
    setHoverEffect("opacity-1 bg-[rgba(0,0,0,0.2)]");
  };
  const handleHoverExit = () => {
    setHoverEffect("opacity-0");
  };
  const iconstyle =
    "h-[40px] w-[40px] rounded-full bg-white  flex items-center justify-center m-3 cursor-pointer hover:bg-[#88a496] hover:scale-[1.1] ease-in duration-100 cursor-pointer hover:text-white";
    
  return (
    <div
      className="flex  items-center justify-center w-[300px] h-[300px] overflow-hidden
    rounded-md shadow-lg m-2 relative"
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverExit}
    >
      <img src={item.src} alt="product_img"/>
      <div
        className={
          `flex items-center justify-center w-[100%] h-[100%] absolute ease-in duration-100 ` +
          hoverEffect
        }
      >
        {/*icons*/}
        <div className={iconstyle}>
          <ShoppingCartOutlined />
        </div>
        <div className={iconstyle}>
          <FavoriteBorderOutlined />
        </div>
        <div className={iconstyle}>
          <SearchOutlined />
        </div>
      </div>
    </div>
  );
}

export default Product;
