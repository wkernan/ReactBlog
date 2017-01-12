import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'; not needed anymore
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
	componentWillMount() {
		this.props.fetchPosts()
	}

	render() {
		return (
			<div>
				<div className="text-right">
					<Link to="/posts/new" className="btn btn-primary">
						Add a Post
					</Link>
				</div>
				List of blog posts
			</div>
		);
	}
}

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({ fetchPosts }, dispatch );
// }
// we are able to use a shortcut below and instead just pass in the object { fetchPosts: fetchPosts } or with es6 { fetchPosts } due to key pair value being the same

// gives access to this.props.fetchPosts
export default connect(null, { fetchPosts })(PostsIndex); // null because we don't have state to map over just yet 