import React from 'react';
import BlockTop from './BlockTop/BlockTop';
import Button from './Button/Button';
import './ScrollBar.css';

function ScrollBar() {
  return (
    <div class="ScrollBar">
      <BlockTop />
      <Button name="Free Flow" about="Eating" active={true} />
      <Button name="Health Project" about="Eating" active={false} />
      <Button name="6 inch" about="Eating" active={false} />
      <Button name="Free Flow" about="Eating" active={false} />
      <Button name="Free Flow" about="Eating" active={false} />
      <Button name="Free Flow" about="Eating" active={false} />
      <Button name="Free Flow" about="Eating" active={false} />
    </div>
  );
}

export default ScrollBar;
