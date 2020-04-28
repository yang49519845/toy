import React, { Component } from 'react';

class CommentList extends Component{
  constructor(props) {
    super(props)
    this.state = {
      comments: DataSource.getComments()
    }
  }

  componentDidMount() {
    DataSource.addChangeListener(this.handleChange)
  }
  componentWillUnmount() {
    DataSource.removeChangeListener(this.handleChange)
  }
  handleChange() {
    this.setState({
      comments: DataSource.getComments()
    })
  }
  render(h) {
    return <div>
      {
        this.state.comments.map(comment => {
          return <Comment comment={comment} key={comment.id} />
        })
      }
    </div>
  }
}

export default CommentList