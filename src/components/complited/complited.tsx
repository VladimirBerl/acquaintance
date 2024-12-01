import cls from "./complited.module.scss";
import { ChevronRight } from "lucide-react";
import Button from "@/components/button/button";

interface ComplitedProps {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Complited: React.FC<ComplitedProps> = ({ setIndex }) => {
  return (
    <div className={cls.complited}>
      <div className={cls.info}>
        <img src="/assets/grateful.png" alt="grateful" />
        <h3>Спасибо!</h3>
        <p>
          Мы проанализировали Ваши ответы и нашли наиболее подходящих для вас
          девушек. Чтобы начать знакомство расскажите немного о себе!
        </p>
      </div>
      <Button onClick={() => setIndex(7)}>
        Продолжить <ChevronRight />
      </Button>
    </div>
  );
};

export default Complited;
