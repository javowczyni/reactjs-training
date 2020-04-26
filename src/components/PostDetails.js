import React, {Component} from 'react';

const POST_DETAILS_ERROR = "error fetching post details";

class PostDetails extends Component {
    state = {
        postDetails: {},
        isLoading: false,
    }

    componentDidMount() {
        this.setState({isLoading: true});
        setTimeout(function () {
            fetch('http://jsonplaceholder.typicode.com/posts/1')
                .then(response => response.json())
                .then(data => this.setState({postDetails: data}))
                .catch(data => this.setState({postDetails: {title: POST_DETAILS_ERROR}}))
            this.setState({isLoading: false})
        }.bind(this), 3000);
    }

    render() {
        const {postDetails, isLoading} = this.state;
        return (
            <div>
                {isLoading && <img src="https://bit.ly/2SbdGdz"/>}
                <h3> Post: {postDetails.title} </h3>
                {postDetails.body}
                <hr/>
            </div>
        )
    }
}

export default PostDetails;
