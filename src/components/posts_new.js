import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
	// access to property this.context.router 
	static contextTypes = {
		router: PropTypes.object
	};

	onSubmit(props) {
		this.props.createPost(props)
			.then(() => {
				// blog post has been created. Navigate user to index
				// navigate by calling this.context.router.push with new path
				this.context.router.push('/');
			});
	}

	render() {
		const { fields: { title, categories, content }, handleSubmit } = this.props; // es6 const handleSubmit = this.props.handleSubmit and const title = this.props.fields.title

		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h3>Create A New Post</h3>

				<div className={`form-group ${title.touched && title.invalid ? "has-danger" : ""}`}>
					<label>Title</label>
					<input type="text" className="form-control" {...title} />
					<div className="form-control-label">
						{title.touched ? title.error : ''}
					</div>
				</div>
				<div className={`form-group ${categories.touched && categories.invalid ? "has-danger" : ""}`}>
					<label>Categories</label>
					<input type="text" className="form-control" {...categories} />
					<div className="form-control-label">
						{categories.touched ? categories.error : ''}
					</div>
				</div>
				<div className={`form-group ${content.touched && content.invalid ? "has-danger" : ""}`}>
					<label>Content</label>
					<textarea className="form-control" {...content} />
					<div className="form-control-label">
						{content.touched ? content.error : ''}
					</div>
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		);
	}
}

//validation with redux-form - if object has key that matches field name
function validate(values) {
	const errors = {};

	if(!values.title) {
		errors.title = 'Enter a username';
	}
	if(!values.categories) {
		errors.categories = 'Enter categories';
	}
	if(!values.content) {
		errors.content = 'Enter some content';
	}
	return errors;
}

// need to merge redux-form and connect - redux-form is similar to connect
// connect: 1st argument is mapStateToProps, 2nd is mapDispatchToProps
// redux-form 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps 

export default reduxForm({
	// pass in config to reduxForm of our form in the component
	form: 'PostsNewForm',
	fields: ['title', 'categories', 'content'],
	validate
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
