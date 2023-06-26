import React from "react";

const AccordionHeader = ({ data, isActive, toggleAccordion, editMode, handleEditClick }) => {
  return (
    <div className="accordion-top" onClick={!editMode ? toggleAccordion : null}>
      <img src={data.picture} alt="img" />
      <h3>{data.first} {data.last}</h3>
      <span>{isActive ? "\u2212" : "+"}</span>
    </div>
  );
};

export default AccordionHeader;
