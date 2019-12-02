import React from 'react';
import { IoIosFunnel } from 'react-icons/io';
import './BlockTop.css';

class BlockTop extends React.Component {
  render() {
    return (
      <div class="container blocktop_wrapper">
        <div class="row">
          <div class='col-md-9 d-flex align-items-center blocktop_content_wrapper'>
            <p class="blocktop_name">kek<span style={{color: "black"}}>os</span>.</p>
          </div>
          <div class='col-md-3 d-flex align-items-center justify-content-center'>
            <IoIosFunnel size={22} color="black" />
          </div>
        </div>
      </div>
    );
  }
}

export default BlockTop;
