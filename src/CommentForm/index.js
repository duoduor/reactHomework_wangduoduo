import React, { PureComponent } from 'react';

class CommentForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user[0],
      commentInput: '',
      commitBtnClickTimes: 0,
    }
  }
  /**
   * 渲染 select 的每一项
   * @param {array} options 渲染数组
   */
  renderOptions(options) {
    return options.map(item => (
      <option key={item} value={item}>{item}</option>
    ));
  }

  /**
   * 点击评论按钮回调函数
   */
  handleClickCommit() {
    if (this.state.commentInput.length > 0) {
      this.props.handleCommitComment(this.state.user, this.state.commentInput);
      this.setState({
        user: this.props.user[0],
        commentInput: '',
        commitBtnClickTimes: 0,
      });
    } else {
      this.setState({
        commitBtnClickTimes: this.state.commitBtnClickTimes + 1,
      });
    }
  }

  handleUserChange(e) {
    this.setState({
      user: e.target.value
    });
  }

  handleCommentChange(e) {
    this.setState({
      commentInput: e.target.value
    });
  }
  
  handleEnter(e) {
    if (e.keyCode === 13) {
      this.handleClickCommit();
    }
  }

  render() {
    return (
      <div style={{marginLeft: "12px"}}>
        <select onChange={this.handleUserChange.bind(this)} defaultValue={this.state.user} style={{marginRight: "12px"}}>
          {this.renderOptions(this.props.user)}
        </select>
        <input
          onChange={this.handleCommentChange.bind(this)}
          onKeyUp={this.handleEnter.bind(this)}
          value={this.state.commentInput}
          style={{width: "200px", padding: "7px 5px"}}
          placeholder="Say someThing..."
          type="text"
        />
        <button
          onClick={this.handleClickCommit.bind(this)}
          style={{marginLeft: "15px", background: "#dfeefb"}}
        >提交评论</button>
        {this.state.commitBtnClickTimes > 0 && this.state.commentInput.length === 0 ? (
          <p style={{color: "red", margin: 0, fontSize: "14px"}}>请输入评论内容！</p>
        ) : null}
      </div>
    );
  }
}

export default CommentForm;
