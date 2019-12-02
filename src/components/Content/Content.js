import React from 'react';
import './Content.css';

import { connect } from 'react-redux';

function Content(props) {
  let renderContent = null;

  if (props.chosen === -1) {
    renderContent = (
      <div className="Content__intro">
        <h1 className="Content__greetings">
          Hi,
        </h1>
        <p className="Content__text">
          Let's make it fair enough!
        </p>
        <p className="Content__subtext">
          Read others reviews to decide!
        </p>
        <p className="Content__subtext">
          Leave your own reviews to help NU community grow!
        </p>
      </div>
    );
  } else {
    renderContent = (
      <p>some bullshit</p>
    );
  }

  return (
    <div class="Content">
     {renderContent}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    chosen: state.chosen
  }
}

export default connect(mapStateToProps)(Content);
