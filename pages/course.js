import React from 'react';

class Course extends React.Component {
  static async getInitialProps({query: {id}}) {

	};
  
	constructor() {
		super();
	}

	render() {
		return <p>{this.state.someKey}</p>;
	}

	componentDidMount() {
		this.setState({someKey: 'otherValue'});
	}
}

export default Course;
