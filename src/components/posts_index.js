import React, { Component } from 'react';
import { connect } from 'react-redux'; // make a react component become a container for storing state
// import { bindActionCreators } from 'redux'; not needed anymore
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router'; // allow react router to create links acting as a tags

class PostsIndex extends Component {
	componentWillMount() {
		this.props.fetchPosts()
	}

	renderPosts() {
		return this.props.posts.map((post) => {
			return (
				<li className="list-group-item justify-content-between" key={post.id}>
					<Link to={`posts/${post.id}`}>
						<strong>{post.title}</strong>
					</Link>
						<span className="pull-xs-right">{post.categories}</span>
				</li>
			);
		});
	}

	render() {
		return (
			<div>
				<div className="text-right">
					<Link to="/posts/new" className="btn btn-primary">
						Add a Post
					</Link>
				</div>
				<h3>Posts</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { posts: state.posts.all };
}

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({ fetchPosts }, dispatch );
// }
// we are able to use a shortcut below and instead just pass in the object { fetchPosts: fetchPosts } or with es6 { fetchPosts } due to key pair value being the same

// gives access to this.props.fetchPosts
export default connect(mapStateToProps, { fetchPosts })(PostsIndex); // null because we don't have state to map over just yet 