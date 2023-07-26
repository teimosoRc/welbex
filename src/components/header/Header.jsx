import React from "react";
import style from "./Header.module.css";

import telegram from "../../assets/telegram.svg";
import viber from "../../assets/viber.svg";
import whatsapp from "../../assets/whatsapp.svg";
import logo from "../../assets/part1.svg";
import welbex from "../../assets/part2.svg";

function Header() {
  return (
    <header>
      <div className={style.container}>
        <div>
          <div className={style.logo}>
            <img src={logo} />
            <img src={welbex} />
          </div>
          <p className={style.logotext}>
            крупный интегратор CRM
            <br />в Росcии и ещё 8 странах
          </p>
        </div>

        <div className={style.menu}>
          <p>Услуги</p>
          <p>Виджеты</p>
          <p>Интеграции</p>
          <p>Кейсы</p>
          <p className={style.sert}>Сертификаты</p>
        </div>
        <p className={style.phone}>+7 555 555-55-55</p>
        <div className={style.social}>
          <img src={telegram} />
          <img src={viber} />
          <img src={whatsapp} />
        </div>
      </div>
    </header>
  );
}

export default Header;
