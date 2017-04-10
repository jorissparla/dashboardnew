import React, {Component} from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
// Import {pr} from 'prop-types';
import Page from '../components/page';
import TrainingList from '../components/traininglist';

class Courses extends Component {

	static async getInitialProps() {
		const res = await axios.get(`http://nlbavwtls22:3001/api/courses`);

		return {courses: res.data};
	}

	handleSearchKeyPress() {

	}

	render() {
		return (
			<MuiThemeProvider>

				<Page>
					<div>
						<TextField hintText="Search" underlineShow={false} onKeyPress={this.handleSearchKeyPress()}/>
					</div>
					<TrainingList training={this.props.courses}/>
				</Page>
			</MuiThemeProvider>
		);
	}

}
Courses.defaultProps = {
	courses: []
};

Courses.propTypes = {
	courses: React.PropTypes.array
};

export default Courses;

