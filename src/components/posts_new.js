import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
	render() {
		const { fields: { title, categories, content }, handleSubmit } = this.props; // es6 const handleSubmit = this.props.handleSubmit and const title = this.props.fields.title

		return (
			<form onSubmit={handleSubmit(this.props.createPost)}>
				<h3>Create A New Post</h3>
				<div className="form-group">
					<label>Title</label>
					<input type="text" className="form-control" {...title} />
				</div>
				<div className="form-group">
					<label>Categories</label>
					<input type="text" className="form-control" {...categories} />
				</div>
				<div className="form-group">
					<label>Content</label>
					<textarea className="form-control" {...content} />
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		);
	}
}

// need to merge redux-form and connect - redux-form is similar to connect
// connect: 1st argument is mapStateToProps, 2nd is mapDispatchToProps
// redux-form 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps 

export default reduxForm({
	// pass in config to reduxForm of our form in the component
	form: 'PostsNewForm',
	fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew);

// user types something in record on application state 
	/* state === {
		 	form: {
				PostsNewForm: {
					title: '....',
					categories: '....',
					content: '....'
				}
		 	}
		}
	*/
