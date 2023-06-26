import React, { useState } from "react";
import AccordionHeader from "./AccordionHeader";
import AccordionContent from "./AccordionContent";
import AccordionActions from "./AccordionActions";

const Accordion = ({ data, isActive, toggleAccordion, onDelete }) => {
  const [editedData, setEditedData] = useState(data);
  const [editMode, setEditMode] = useState(false);
  const [saveEnabled, setSaveEnabled] = useState(false);

  const handleFieldChange = (field, value) => {
    // let updatedValue = value;

    if (field === "dob") {
      let age = calculateAge(value);
      setEditedData(prevData => ({
        ...prevData,
        [field]: value,
        age: age
      }));
    } else {
      setEditedData(prevData => ({
        ...prevData,
        [field]: value,
      }));
    }

    setSaveEnabled(true);
  };

  const handleEditClick = () => {
    if (calculateAge(data.dob) > 18) {
      setEditMode(true);
    }
  };

  const handleSaveClick = () => {
    if (validateFields()) {
      setEditMode(false);
      setSaveEnabled(false);
    }
  };

  const validateFields = () => {
    // Perform validation for each field
    if (editedData.dob.trim() === "") {
      alert("Please enter a valid date of birth");
      return false;
    }

    if (editedData.gender.trim() === "") {
      alert("Please select a gender");
      return false;
    }

    if (editedData.country.trim() === "") {
      alert("Please enter a country");
      return false;
    }

    if (editedData.description.trim() === "") {
      alert("Please enter a description");
      return false;
    }

    return true; // All fields are valid
  };

  const handleCancelClick = () => {
    setEditedData(data);
    setEditMode(false);
    setSaveEnabled(false);
  };

  const handleDeleteClick = () => {
    onDelete()
  };

  const calculateAge = dob => {
    const dobDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - dobDate.getFullYear();

    if (
      today.getMonth() < dobDate.getMonth() ||
      (today.getMonth() === dobDate.getMonth() && today.getDate() < dobDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  return (
    <div className={`accordion ${isActive ? "active" : ""}`}>
      <AccordionHeader
        data={data}
        isActive={isActive}
        toggleAccordion={toggleAccordion}
        editMode={editMode}
        handleEditClick={handleEditClick}
      />

      {isActive && (
        <AccordionContent
          data={data}
          editMode={editMode}
          editedData={editedData}
          handleFieldChange={handleFieldChange}
          calculateAge={calculateAge}
        />
      )}

      {isActive && (
        <AccordionActions
          editMode={editMode}
          saveEnabled={saveEnabled}
          handleSaveClick={handleSaveClick}
          handleCancelClick={handleCancelClick}
          handleDeleteClick={handleDeleteClick}
          handleEditClick={handleEditClick}
        />
      )}
    </div>
  );
};

export default Accordion;
