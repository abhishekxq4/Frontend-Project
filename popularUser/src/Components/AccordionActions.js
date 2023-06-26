import React from "react";
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';

const AccordionActions = ({ editMode, saveEnabled, handleSaveClick, handleCancelClick, handleDeleteClick, handleEditClick }) => {
  return (
    <div className="icons">
      {editMode ? (
        <>
          <button className="save-button" disabled={!saveEnabled} onClick={handleSaveClick}>Save</button>
          <button className="cancel-button" onClick={handleCancelClick}>Cancel</button>
        </>
      ) : (
        <>
          <span className="icon edit" onClick={handleEditClick}><FiEdit /></span>
          <span className="icon delete" onClick={handleDeleteClick}><RiDeleteBinLine /></span>
        </>
      )}
    </div>
  );
};

export default AccordionActions;
