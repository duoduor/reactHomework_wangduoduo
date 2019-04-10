import React, { Component } from 'react';
import CommentForm from './CommentForm'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: ['张三', '李四', '王五'],
      commentList: [
        {
          id: 1,
          user: '张三',
          content: '哈哈哈',
          disable: false
        },
        {
          id: 2,
          user: '李四',
          content: '来啦，老弟～',
          disable: false
        },
      ],
    };
  }

  /**
   * 渲染评论列表数据
   * @function renderComment
   */
  renderComment() {
    return this.state.commentList.map((item) => (
      <div key={item.id}>
        <span>{item.user}: </span>
        <span style={{color: "#666"}}>{item.content}</span>
      </div>
    ));
  }

  handleCommitComment(user, content) {
    const len = this.state.commentList.length + 1;
    this.setState({
      commentList: [...this.state.commentList, {
        id: len,
        user,
        content,
        disable: false
      }],
    });
  }

  render() {
    const CommentFormProps = {
      user: this.state.user,
      handleCommitComment: this.handleCommitComment.bind(this)
    };

    return (
      <div className="App">
        <div style={{height: "360px", overflow: "hidden"}}>
          <h3>评论列表</h3>
          {this.renderComment()}
        </div>
        <div>
          <CommentForm {...CommentFormProps}/>
        </div>
      </div>
    );
  }
}

export default App;
