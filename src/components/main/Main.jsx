import React from "react";
import style from "./Main.module.css";

function Main() {
  return (
    <main>
      <div className={style.container}>
        <div className={style.mainTitle}>
          <p className={style.titleLeft}>
            Зарабатывайте
            <br />
            больше
            <p className={style.welbex}>с WELBEX</p>
            <p className={style.leftSubtitle}>
              Развиваем и контролируем
              <br />
              продажи за вас
            </p>
          </p>
        </div>
        <div className={style.secondBlock}>
          <p className={style.titleRight}>
            Вместе с <p className={style.free}>бесплатной</p>
            <br />
            <p className={style.cons}>консультацией</p> мы дарим:
          </p>
          <div className={style.childrenBlock}>
            <div className={style.listSubtitles}>
              <p className={style.rightSubtitle}>Виджеты</p>
              <p className={style.mobileSubtitle}>
                <span className={style.dash}>&mdash;</span> skype Аудит
              </p>
              <p className={style.subText}>
                30 готовых
                <br />
                решений
              </p>
            </div>
            <div className={style.listSubtitles}>
              <p className={style.rightSubtitle}>Dashboard</p>
              <p className={style.mobileSubtitle}>
                <span className={style.dash}>&mdash;</span> 30 виджетов
              </p>
              <p className={style.subText}>с показателями вашего бизнеса</p>
            </div>
            <div className={style.listSubtitles}>
              <p className={style.rightSubtitle}>Skype Аудит</p>
              <p className={style.mobileSubtitle}>
                <span className={style.dash}>&mdash;</span> Dashboard
              </p>
              <p className={style.subText}>
                отдела продаж
                <br />и CRM системы
              </p>
            </div>
            <div className={style.listSubtitles}>
              <p className={style.rightSubtitle}>35 дней</p>
              <p className={style.mobileSubtitle}>
                <span className={style.dash}>&mdash;</span> месяц amocrm
              </p>
              <p className={style.subText}>
                использования
                <br />
                CRM
              </p>
            </div>
          </div>
          <button>Получить консультацию</button>
        </div>
      </div>
    </main>
  );
}

export default Main;
