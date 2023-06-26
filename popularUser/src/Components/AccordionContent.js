import React from "react";

const AccordionContent = ({ data, editMode, editedData, handleFieldChange, calculateAge }) => {
  return (
    <div className="accordion-middle-wrapper">
      <div className="accordion-middle">
        <div className="user-info">
          <span>Age:</span>
          {!editMode ? (
            <span className="dob">{calculateAge(data.dob)}</span>
          ) : (
            <input
              type="text"
              value={editedData.dob}
              onChange={(e) => handleFieldChange("dob", e.target.value)}
              readOnly={!editMode}
            />
          )}
          {/* {console.log(editedData)} */}
        </div>
        <div className="user-info">
          <span>Gender:</span>
          {!editMode ? (
            <span className="gender">{editedData.gender}</span>
          ) : (
            <select value={editedData.gender} onChange={(e) => handleFieldChange("gender", e.target.value)}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Transgender">Transgender</option>
              <option value="Prefer Not to say">Prefer Not to say</option>
              <option value="Other">Other</option>
            </select>
          )}
        </div>

        <div className="user-info">
          <span>Country:</span>
          {!editMode ? (
            <span className="country">{editedData.country}</span>
          ) : (
            <input
              type="text"
              value={editedData.country}
              onChange={(e) => handleFieldChange("country", e.target.value)}
              readOnly={!editMode}
            />
          )}
        </div>
      </div>
      <div className="textarea-wrapper">
        <span>Description:</span>
        {!editMode ? (
          <textarea value={editedData.description} readOnly></textarea>
        ) : (
          <textarea
            className="textarea"
            value={editedData.description}
            onChange={(e) => handleFieldChange("description", e.target.value)}
          ></textarea>
        )}
      </div>
    </div>
  );
};

export default AccordionContent;
