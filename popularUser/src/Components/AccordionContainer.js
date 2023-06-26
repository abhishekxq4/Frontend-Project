import React, { useState } from "react";
import CelebData from '../FE-Assessment/celebrities.json';
import Accordion from "./Accordion";

const AccordionContainer = () => {
  const [accordions, setAccordions] = useState(CelebData);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null); // Collapse the clicked accordion if it's already active
    } else {
      setActiveAccordion(index); // Expand the clicked accordion
    }
  };

  const handleDeleteClick = (index) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete?`);
    if (confirmDelete) {
      const updatedAccordions = [...accordions];
      updatedAccordions.splice(index, 1);
      setAccordions(updatedAccordions);
    }
  };

  return (
    <div className="accordion-wrapper">
      {accordions.map((data, index) => (
        <Accordion
          key={index}
          data={data}
          index={index}
          isActive={index === activeAccordion}
          toggleAccordion={() => toggleAccordion(index)}
          onDelete={() => handleDeleteClick(index)}
        />
      ))}
    </div>
  );
};

export default AccordionContainer;
