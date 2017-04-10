// Import styled from 'styled'
import React from 'react';
import Paper from 'material-ui/Paper';
import Header from './header';
import BottomNav from './bottomnav';

export default ({children}) => {
	return (
		<div className="main">
			<Header/>
			<Paper zDepth={1}>
				<div className="page">
					{ children }
				</div>
				<BottomNav/>
			</Paper>
		</div>
	);
};
