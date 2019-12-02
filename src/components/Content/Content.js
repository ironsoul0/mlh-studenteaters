import React from 'react';
import Button from '../ScrollBar/Button/Button';
import './Content.css';

function Content() {
  return (
    <div class="Content">
      <Button name="Free Flow" about="Eating" active={false} />
    </div>
  );
}

export default Content;
