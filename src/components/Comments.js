import React, {Component} from 'react';

class Comments extends Component {
    state = { value: '', comments: []}

    handleChange = event => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ value: '', comments: [...this.state.comments, { id: this.state.comments.length, value: this.state.value}]});
    }

    renderComments = () => this.state.comments.map((comment) => <div key={comment.id}>{comment.value}</div>);

    render() {
        return (<div>
            <h2>Add a comment: </h2>
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input onChange={this.handleChange} value={this.state.value} type="text"/> Your comment
                    <br/>
                    <button type="submit">Submit</button>
                </label>
            </form>
            {this.renderComments()}
        </div>);
    }
}

export default Comments;
