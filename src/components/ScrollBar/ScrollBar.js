import React from 'react';
import Button from './Button/Button';
import './ScrollBar.css';

function ScrollBar() {
  return (
    <div class="ScrollBar">
      <Button name="Free Flow" about="Eating" active={false} />
    </div>
  );
}

export default ScrollBar;
