import React from "react";
import cls from "./form.module.scss";
import Button from "@/components/button/button";

const Form = () => {
  const [form, setForm] = React.useState(false);
  function checkSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setForm(true);
  }

  return (
    <div className={cls.form}>
      {form ? (
        <div>
          <h3>Форма отправлена!</h3>
          <p>Благодарим вас за участие.</p>
        </div>
      ) : (
        <>
          <h3>Оставьте больше информации о вас</h3>
          <p>Мы используем её для наиболее четкого подбора людей</p>
          <form onSubmit={checkSubmit}>
            <div className={cls.inputs}>
              <label>
                Ваше имя
                <input type="text" required />
              </label>
              <label>
                Ваша почта
                <input type="email" required />
              </label>
            </div>
            <Button type="submit">Отправить</Button>
          </form>
        </>
      )}
    </div>
  );
};

export default Form;
