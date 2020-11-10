import React from "react";
import style from ".././CSS/Faq.module.css";

export default function Faq() {
  return (
    <div className={style.html}>
      <div className={style.container}>
        <div className={style.accordion}>
          <div className={style.accordionitem} id="question1">
            <a className={style.accordionlink} href="#question1">
              Que tan larga tienes la pichula
            </a>
            <div className={style.answer}>
              <p>
                v viva el sexo wachoasdasdasdasdasdasdasdswdviva el sexo
                wachoasdasdasdasdasdasdasdswdviva el sexo
                wachoasdasdasdasdasdasdasdswdviva el sexo
                wachoasdasdasdasdasdasdasdswdviva el sexo
                wachoasdasdasdasdasdasdasdswdviva el sexo
                wachoasdasdasdasdasdasdasdswd
              </p>
            </div>
          </div>

          <div className={style.accordionitem} id="question2">
            <a className={style.accordionlink} href="#question2">
              Que tan larga tienes el guevo
            </a>
            <div className={style.answer}>
              <p>
                viva el sexo wachoasdasdasdasdasdasdasdswdviva el sexo
                wachoasdasdasdasdasdasdasdswdviva el sexo
                wachoasdasdasdasdasdasdasdswdviva el sexo
                wachoasdasdasdasdasdasdasdswdviva el sexo
                wachoasdasdasdasdasdasdasdswdviva el sexo
                wachoasdasdasdasdasdasdasdswd
              </p>
            </div>
          </div>

          <div className={style.accordionitem} id="question3">
            <a className={style.accordionlink} href="#question3">
              Que tan larga tienes la tula
            </a>
            <div className={style.answer}>
              <p>
                viva el sexo wachoasdasdasdasdasdasdasdswdviva el sexo
                wachoasdasdasdasdasdasdasdswdviva el sexo
                wachoasdasdasdasdasdasdasdswdviva el sexo
                wachoasdasdasdasdasdasdasdswdviva el sexo
                wachoasdasdasdasdasdasdasdswdviva el sexo
                wachoasdasdasdasdasdasdasdswd
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
