import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Content = ({ children }) => <div className="content">{children}</div>;

Content.propTypes = {
  children: PropTypes.node.isRequired
};

export default Content;
