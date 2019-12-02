import React from 'react';
import { IoIosArrowForward, IoIosRadioButtonOn } from 'react-icons/io';
import './Button.css';

class Button extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class='col-md-9 button_wrapper'>
            <p class="button_name">{this.props.name}</p>
            <span class="button_about">{this.props.about}</span>
          </div>
          <div class='col-md-3 d-flex align-items-center'>
            {this.props.active === "true" ? <IoIosArrowForward size={14} color="#B5B5B5" /> : <IoIosRadioButtonOn size={14} color="#FADD4B" />}
          </div>
        </div>
      </div>
    );
  }
}

export default Button;
