import React from 'react';
import ReactModal from 'react-modal';
import { IoIosBrush, IoIosPerson } from 'react-icons/io';
import { FaInfo } from 'react-icons/fa';
import Item from './Item/Item';
import './Nav.css';
import { connect } from 'react-redux';

import { feedbackChange, submitFeedback } from '../../actions';
import { bindActionCreators } from 'redux';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleSubmit = () => {
    if (this.props.feedbackText.length > 0)
      this.props.submitFeedback();
    this.setState({ showModal: false });
  }

  handleFormChange(e) {
    this.props.feedbackChange(e.target.value);
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
          closeTimeoutMS={200}
        >
          <p class="modal_title">What do you think?</p>
          <textarea value={this.props.feedbackText} class="form-control" rows="8" cols="20" onChange={this.handleFormChange}></textarea>
          <button class="btn btn-warning text-dark modal_button" onClick={this.handleSubmit}>Submit</button>
        </ReactModal>
        <Item element={<IoIosPerson size={24} color="#FADD4B" />} />
        <Item element={<FaInfo size={20} color="#FADD4B" />} style={{ marginLeft: '3px' }} />
      </div >
    );
  }
}

const mapStateToProps = state => {
  return {
    feedbackText: state.feedbackText
  }
}

const mapDispatchToProps = dispatch => {
  return {
    feedbackChange: bindActionCreators(feedbackChange, dispatch),
    submitFeedback: bindActionCreators(submitFeedback, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
