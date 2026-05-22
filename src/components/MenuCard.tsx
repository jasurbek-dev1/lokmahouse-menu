import { useState } from "react";
import type { MenuItem } from "../data/menu";

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="menu-card group">
      <div className="menu-card-image-wrapper">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          className={`menu-card-image transition-opacity duration-500 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
        />
        {!imgLoaded && <div className="menu-card-skeleton" />}
      </div>
      <div className="menu-card-content">
        <h3 className="menu-card-name">{item.name}</h3>
       <p className="font-bold text-[#d4a017] text-[20px]">
  {Math.floor(item.price / 1000)}
  <sup className="text-[10px] ml-[1px]">000</sup>
  <span className="text-[15px] ml-1">сўм</span>
</p>
      </div>
    </div>
  );
}
