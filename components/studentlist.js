import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import Link from 'next/link';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {fetchAccounts} from '../lib/actions/index';

const SearchField = styled(TextField)`
  margin-left: 20px;
`;

class StudentList extends React.Component {
	constructor(props) {
		super(props);
		this.handleSearchKeyPressed = this.handleSearchKeyPressed.bind(this);
		this.state = {searchTerm: ''};
	}

	componentDidMount() {
		this.props.fetchAccounts();
	}

	handleSearchKeyPressed(e) {
   // If (e.key === 'Enter') {
   //   console.log(e.target.value, this.state.searchTerm)
		this.setState({searchTerm: e.target.value});
   // }
	}

	render() {
    //
		console.log('Render', this.props);
		if (!this.props.students) {
			return <div>Loading....</div>;
		}
		const {searchTerm} = this.state;
		const studentList = this.props.students.filter(student => student.fullname.toUpperCase().includes(searchTerm.toUpperCase()) || student.team.toUpperCase().includes(searchTerm.toUpperCase()));
		return (
			<div>
				<div>
					<SearchField hintText="Search" underlineShow={false} onKeyPress={this.handleSearchKeyPressed}/>
				</div>
				<List>
					<Divider/>
					{studentList.map(student => {
						const {uic, picture, fullname, location, team} = student;
						return (
							<div key={uic}>
								<Link href={`/student?id=${uic}`} >
									<ListItem
										leftAvatar={
											<Avatar src={picture}/>
                  }
										primaryText={fullname}
										secondaryText={`located in ${location}, in team ${team}`}
										/>
								</Link>
								<Divider/>
							</div>
						);
					}
          )}
				</List>
			</div>
		);
	}

}

StudentList.defaultProps = {
	students: []
};

StudentList.propTypes = {
	students: React.PropTypes.array,
	fetchAccounts: React.PropTypes.func
};

const mapStateToProps = state => {
	console.dir(state);
	return {students: state.accounts.filter(account =>
       account.region === 'EMEA'
      ).sort()};
};

export default connect(mapStateToProps, {fetchAccounts})(StudentList);

