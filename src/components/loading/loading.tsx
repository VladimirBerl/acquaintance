import React from "react";
import cls from "./loading.module.scss";
interface LoadingProps {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Loading: React.FC<LoadingProps> = ({ setIndex }) => {
  React.useEffect(() => {
    setTimeout(() => {
      setIndex(6);
    }, 3000);
  }, []);

  return (
    <div className={cls.loading}>
      <p>Анализируем ответы</p>
      <div className={cls.loader}></div>
    </div>
  );
};

export default Loading;
