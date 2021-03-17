import React from "react";
import "./assets/style.css";
import userIcon from "./assets/user.svg";
import experienceIcon from "./assets/experience.svg";
import ageIcon from "./assets/age.svg";
import schoolIcon from "./assets/school.svg";

const Card = ({ contacts }) =>
  contacts.map(
    ({ foto, preparatoria, nombre, puesto, _id, edad, experiencia }, index) => (
      <div className="card" key={index}>
        <figure className="card__figure">
          <img className="card__photo" src={foto ? foto : userIcon} alt={`foto de ${nombre}`} />
        </figure>
        { preparatoria === true
          ? <img className="card__school" src={schoolIcon} alt="icono de preparatoria" />
          : null
        }
        <div className="card__header">
          <h2 className="card__name">{nombre}</h2>
          <h3 className="card__job">{puesto}</h3>
          <h4 className="card__id">ID: {_id}</h4>
        </div>
        <div className="card__footer">
          <div className="card__details">
            <div className="card__numbers">
              <img className="card__icon" src={ageIcon} alt="icon de edad" />
              <p className="card__text">{edad} años</p>
            </div>
            <div className="card__numbers">
              <img className="card__icon" src={experienceIcon} alt="icon de experience" />
              <p className="card__text">
                {experiencia === 0 ? "Sin Experiencia" : `${experiencia} años`}
              </p>
            </div>
          </div>
          <button className="card__btn">Ver Detalles</button>
        </div>
      </div>
    )
  );

export default Card;
