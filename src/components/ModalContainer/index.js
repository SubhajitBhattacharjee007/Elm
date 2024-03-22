import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const ModalContainer = ({ children }) => (
  <div className="modal-container">{children}</div>
);

ModalContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default ModalContainer;
