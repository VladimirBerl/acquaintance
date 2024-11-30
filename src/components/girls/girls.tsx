import React from "react";
import cls from "./girls.module.scss";
import { girls } from "@/model/girls";

interface GirlsProps {
  index: number;
}

const Girls: React.FC<GirlsProps> = ({ index }) => {
  const girl = girls[index];
  return (
    <div className={cls.girl}>
      <div className={cls["girl-img"]}>
        <img src={girl.img} alt={girl.name} />
      </div>
      <div className={cls.group}>
        <div className={cls.onlain}></div>
        <span>{`${girl.name}, ${girl.age} лет`}</span>
      </div>
    </div>
  );
};

export default Girls;
