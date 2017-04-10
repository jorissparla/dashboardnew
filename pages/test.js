import React from 'react';
import withRedux from 'next-redux-wrapper';
import initStore from '../store';

class Index extends React.Component {

	render() {
		return (<h1>Hello </h1>);
	}

}
export default withRedux(initStore)(Index);
