import React from 'react';
import './Item.css';

class Item extends React.Component {
  render() {
    return (
      <div class="container item_wrapper" {...this.props}>
        {this.props.element}
      </div>
    );
  }
}

export default Item;
