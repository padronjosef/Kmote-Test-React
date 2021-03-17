import React from "react";

const Card = ({ contacts }) => {
  return (
    <div>
      {contacts.map((contact) => (
        <div class="card">
          <h5 class="card__name">{contact.nombre}</h5>
          <h6 class="card__job">{contact.puesto}</h6>
          <p class="card__age">{contact.edad}</p>
          <p class="card__experience">{contact.experiencia}</p>
          <p class="card__school">{contact.preparatoria}</p>
          <p class="card__id">{contact._id}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
