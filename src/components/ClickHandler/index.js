import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class ClickHandler extends PureComponent {
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = ({ target }) => {
    if (
      this.props.isOpen &&
      this.wrapperRef &&
      !this.wrapperRef.contains(target)
    ) {
      this.props.closeModal();
    }
  };

  render = () => (
    <div ref={node => (this.wrapperRef = node)}>{this.props.children}</div>
  );
}

ClickHandler.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default ClickHandler;
