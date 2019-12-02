import React from 'react';
import BlockTop from './BlockTop/BlockTop';
import Button from './Button/Button';
import { choosePost } from '../../actions';
import './ScrollBar.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function ScrollBar(props) {
  const { posts, chosen } = props;

  return (
    <div class="ScrollBar">
      <BlockTop />
      {
        posts.map(post => (
          <Button 
            choosePost={() => props.choosePost(post.id)} 
            name={post.name}
            about={post.category} 
            active={chosen === post.id}
          />
        ))
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    chosen: state.chosen
  }
}

const mapDispatchToProps = dispatch => {
  return {
    choosePost: bindActionCreators(choosePost, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScrollBar);
