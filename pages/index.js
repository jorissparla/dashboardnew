import React, {Component} from 'react';
import withRedux from 'next-redux-wrapper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import initStore from '../store';
import Page from '../components/page';
import StudentList from '../components/studentlist';

class Index extends Component {
	static async getInitialProps() {

	}

	render() {
		return (
			<MuiThemeProvider>
				<Page>
					<StudentList/>
				</Page>
			</MuiThemeProvider>
		);
	}
}
export default withRedux(initStore)(Index);
