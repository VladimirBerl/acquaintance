import cls from "./complited.module.scss";
import { ChevronRight } from "lucide-react";
import Button from "@/components/button/button";


const Complited = () => {
  return (
    <div className={cls.complited}>
      <div className={cls.info}>
        <img src="/public/assets/grateful.png" alt="grateful" />
        <h3>Спасибо!</h3>
        <p>
          Мы проанализировали Ваши ответы и нашли наиболее подходящих для вас
          девушек. Чтобы начать знакомство расскажите немного о себе!
        </p>
      </div>
      <Button onClick={() => window.open("https://site.com/form", "_blank")}>
        Продолжить <ChevronRight />
      </Button>
    </div>
  );
};

export default Complited;
