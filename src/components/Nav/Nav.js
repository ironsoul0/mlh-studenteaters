import React from 'react';
import ReactModal from 'react-modal';
import { IoIosBrush, IoIosPerson } from 'react-icons/io';
import { FaInfo } from 'react-icons/fa';
import Item from './Item/Item';
import './Nav.css';
class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div class="Nav">
        <Item onClick={this.handleOpenModal} element={<IoIosBrush size={24} color="#FADD4B" />} />
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          <p class="modal_title">What do you think?</p>
          <textarea class="form-control" rows="6" cols="20"></textarea>
          <button class="btn btn-warning text-dark modal_button" onClick={this.handleCloseModal}>Submit</button>
        </ReactModal>
        <Item element={<IoIosPerson size={24} color="#FADD4B" />} />
        <Item element={<FaInfo size={20} color="#FADD4B" />} />
      </div >
    );
  }
}

export default Nav;
