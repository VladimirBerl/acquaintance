import React from "react";
import cls from "./politic.module.scss";

const Politic = () => {
  return (
    <div className={cls.politic}>
      <p>© 2024 Без Комплексов</p>
      <div className={cls.links}>
        <a href="/politic">Политика обработки персональных данных</a>
        <span>|</span>
        <a href="/politic-conf">Пользовательское соглашение</a>
        <span>|</span>
        <a href="/contact">Контакты</a>
        <span>|</span>
        <a href="mailto:info@bez-kompleksov.com">
          info@bez-kompleksov.com
        </a>
      </div>
    </div>
  );
};

export default Politic;
