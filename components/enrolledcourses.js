import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

const Enrolled = ({enrolled}) => {
	console.log('enrolled', enrolled);
	if (!enrolled) {
		return <div>No Courses Enrolled</div>;
	}
	return (
		<List>
			{enrolled.map(item => {
				return (
					<div key={item.uic}>
						<ListItem
							primaryText={item.title}
							secondaryText={item.description}
							/>
						<Divider/>
					</div>
				);
			})}
		</List>

	);
};

Enrolled.defaultProps = {
	enrolled: []
};

Enrolled.propTypes = {
	enrolled: React.PropTypes.array
};
export default Enrolled;
