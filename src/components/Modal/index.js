import React from "react";
import PropTypes from "prop-types";
import BackgroundOverlay from "../BackgroundOverlay";
import Container from "../Container";
import Content from "../Content";
import ModalContainer from "../ModalContainer";
import ClickHandler from "../ClickHandler";

const Modal = ({ children, isOpen, onCloseModal }) =>
  isOpen ? (
    <Container>
      <BackgroundOverlay />
      <ModalContainer>
        <ClickHandler isOpen={isOpen} closeModal={onCloseModal}>
          <Content>{children}</Content>
        </ClickHandler>
      </ModalContainer>
    </Container>
  ) : null;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired
};

export default Modal;
