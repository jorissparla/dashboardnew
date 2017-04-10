import React from 'react';

class Courseview extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <p>{this.state.someKey}</p>;
	}

	componentDidMount() {
		this.setState({someKey: 'otherValue'});
	}
}

export default Courseview;
