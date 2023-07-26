import React from "react";

import style from "./Footer.module.css";
import telegram from "../../assets/telegram.svg";
import viber from "../../assets/viber.svg";
import whatsapp from "../../assets/whatsapp.svg";

function Footer() {
  return (
    <>
      <footer className={style.foot}>
        <div className={style.container}>
          <div className={style.oneBlock}>
            <p className={style.title}>О КОМПАНИИ</p>
            <p>Партнерская программа</p>
            <p>Вакансии</p>
          </div>
          <div className={style.twoBlock}>
            <p className={style.title}>МЕНЮ</p>
            <p>Расчет стоимости</p>
            <p>Услуги</p>
            <p>Виджеты</p>
            <p>Интеграции</p>
            <p>Наши клиенты</p>
          </div>
          <div className={style.threeBlock}>
            <p className={style.title}></p>
            <br />
            <p>Кейсы</p>
            <p>Благодарственные письма</p>
            <p>Сертификаты</p>
            <p>Блог на Youtube</p>
            <p>Вопрос / Ответ</p>
          </div>
          <div className={style.fourBlock}>
            <p className={style.title}>КОНТАКТЫ</p>
            <p>+7 555 555-55-55</p>
            <div className={style.social}>
              <img src={telegram} />
              <img src={viber} />
              <img src={whatsapp} />
            </div>
            <p className={style.adress}>Москва, Путевой проезд 3с1, к 902</p>
          </div>
        </div>
      </footer>
      <footer>
        <p className={style.copyright}>
          &copy;WELBEX 2022. Все права защищены.
          <br />
          <a style={{ textDecorationLine: "underline" }}>
            Политика конфиденциальности
          </a>
        </p>
      </footer>
    </>
  );
}

export default Footer;
