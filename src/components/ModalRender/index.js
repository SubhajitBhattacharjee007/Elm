import React,{Component} from "react";
import Modal from "../Modal";
import Task from "../Task";
import "./index.css"


class Dashboard extends Component{
    state = { isOpen: false };
  
    handleOpenModal = () => {
      this.setState({ isOpen: true });
    };
  
    handleCloseModal = () => {
      this.setState({ isOpen: false });
    };
  
    render = ()=>(
      <div>
        <button className="createTasks"
          onClick={this.handleOpenModal}
        >
          Create Tasks
        </button>
        <Modal isOpen={this.state.isOpen} onCloseModal={this.handleCloseModal}>
        <Task/>
        <button
          className="modalCancel"
          onClick={this.handleCloseModal}
        >
          Close
        </button>
      </Modal>
      </div>
    )
  }

  export default Dashboard