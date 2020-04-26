import React, {Component} from 'react';
import Comments from "./Comments";

const POST_DETAILS_ERROR = "error fetching post details";

class PostDetailsList extends Component {
    state = {
        postsDetails: [],
        isLoading: false,
    }

    renderPosts = () => this.state.postsDetails.map((post) => <div key={post.id}>
        <h3> Post {post.id}: {post.title} </h3>
        {post.body}
        <Comments/>
        <hr/>
    </div>);


    componentDidMount() {
        this.setState({isLoading: true});
        setTimeout(function () {
            fetch('http://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(data => this.setState({postsDetails: data}))
                .catch(data => this.setState({postDetails: {title: POST_DETAILS_ERROR}}))
            this.setState({isLoading: false})
        }.bind(this), 1000);
    }

    render() {
        const {isLoading} = this.state;
        return (
            <div>
                <div>
                {isLoading ? <img src="https://bit.ly/2SbdGdz"/> : this.renderPosts()}
                </div>
            </div>
        );
    }
}

export default PostDetailsList;
