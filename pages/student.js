import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import axios from 'axios';
import Page from '../components/page';
import StudentView from '../components/studentview';
import EnrolledCourses from '../components/enrolledcourses';

class Student extends Component {
	static async getInitialProps({query: {id}}) {
		const res = await axios.get(`http://nlbavwtls22:3001/api/accounts/${id}`);
		const account = res.data[0];
		const res2 = await axios.get(`http://nlbavwtls22:3001/api/enrolledcourses?id=${account.navid}`);
		console.log(res2.data);
		return {account, enrolled: res2.data};
	}

	render() {
		return (
			<MuiThemeProvider>
				<Page>
					<StudentView student={this.props.account}/>
      Enrolled Courses
      <EnrolledCourses enrolled={this.props.enrolled}/>
				</Page>
			</MuiThemeProvider>
		);
	}
}
export default Student;
