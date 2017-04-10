import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500} from 'material-ui/styles/colors';
import EnrollDialog from './enrolldialog';

export default class TrainingList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dialog: false
		};
		this.handleDialogClick = this.handleDialogClick.bind(this);
	}

	componentDidMount() {
		this.setState({
			dialog: false
		});
	}

	handleDialogClick() {
		console.log(`dialog ${this.state.dialog}`);
		this.setState({
			dialog: !this.state.dialog
		});
	}
	render() {
		const {training} = this.props;
		if (this.state.dialog) {
			return <EnrollDialog/>;
		}
		return (
			<MuiThemeProvider muiTheme={getMuiTheme()}>
				<List>
					<Divider/>
					{ training.map(item => {
						const {crs_uic, crs_description, crs_title} = item;
						return (
							<div key={crs_uic}>
								<ListItem leftAvatar={<Avatar icon={<ActionAssignment onClick={this.handleDialogClick}/>} backgroundColor={blue500}/>} primaryText={crs_title} secondaryText={`this is the course titled ${crs_description}`}/>
								<Divider/>
							</div>
						);
					}) }
				</List>
			</MuiThemeProvider>

		);
	}
}
TrainingList.propTypes = {
	training: React.PropTypes.array
};
TrainingList.defaultProps = {
	training: []
};
