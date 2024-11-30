import React from "react";
import cls from "./prew.module.scss";
import { CircleAlert } from "lucide-react";
import Button from "@/components/button/button";
import { CircleCheckBig } from "lucide-react";

interface PrewProps {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Prew: React.FC<PrewProps> = ({ setIndex }) => {
  return (
    <div className={cls.prew}>
      <div className={cls.info}>
        <CircleAlert color="#f86b6b" size={60} className={cls.warn} />
        <h1>Внимание* Требуются мужчины!</h1>
        <p>
          На нашем сайте знакомств слишком много девушек и очень мало мужчин
        </p>
      </div>
      <Button onClick={() => setIndex(1)}>
        Мне это подходит <CircleCheckBig />
      </Button>
    </div>
  );
};

export default Prew;
