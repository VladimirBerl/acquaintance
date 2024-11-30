import React from "react";
import cls from "./warn.module.scss";
import Button from "@/components/button/button";
import { ChevronRight, TriangleAlert } from "lucide-react";

interface WarnProps {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}
const Warn: React.FC<WarnProps> = ({ setIndex }) => {
  return (
    <div className={cls.warn}>
      <div className={cls.info}>
        <TriangleAlert color="#f86b6b" size={60} className={cls.warn} />
        <h2>Важно</h2>
        <p>
          Девушки на нашем сайте хотят узнать вас поближе, для этого они
          подготовили несколько интригующих вопросов!
        </p>
      </div>
      <Button onClick={() => setIndex(2)}>
        Первый вопрос <ChevronRight />
      </Button>
    </div>
  );
};

export default Warn;
