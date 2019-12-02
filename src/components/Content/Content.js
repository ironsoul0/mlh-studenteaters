import React from 'react';
import './Content.css';

import { connect } from 'react-redux';

function Content(props) {
  let renderContent = null;
  const chosen = props.chosen;

  if (chosen === -1) {
    renderContent = (
      <div className="Content__intro">
        <h1 className="Content__greetings">
          Hi, Ray!
        </h1>
        <p className="Content__text">
          Wanna explore some places, my friend? <span>😏</span>
        </p>
        <p className="Content__subtext">
          Read others reviews to decide and go somewhere!
        </p>
        <p className="Content__subtext">
          Leave your own reviews to help NU community grow and develop!
        </p>
      </div>
    );
  } else {
    const post = props.posts[chosen];

    renderContent = (
      <div className="Content__comments">
        <h1 className="Content__place-name">
          {post.name}
        </h1>
        {
          post.comments.map(comment => (
            <div className="Content__comment">
              <p className="Content__author">
                {comment.author}
              </p>
              <p className="Content__content">
                {comment.content}
              </p>
            </div>
          ))
        }
      </div>
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
