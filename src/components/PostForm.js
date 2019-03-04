import React, { Component } from 'react';


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

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
        .then(result => result.json())
        .then(data => console.log(data))



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

export default PostForm;
