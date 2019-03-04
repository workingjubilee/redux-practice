import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
  }

  textInputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.createPost(post);
  };


  render() {
    return (
      <div>
        <h1>Add Post</h1>
          <form onSubmit={this.handleSubmit}>
            <label>Post Title:<input type="text" name="title" onChange={this.textInputHandler} value={this.state.title}/></label>
            <label>Post Body:<input type="text" name="body" onChange={this.textInputHandler} value={this.state.body} /></label>
            <button>Submit!</button>
          </form>
      </div>
    );
  }
}

export default connect(null, { createPost })(PostForm);
