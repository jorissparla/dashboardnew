import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { deepOrange500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import StudentList from './studentlist'

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
})

/**
 * Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.
 */
export default class EnrollDialog extends React.Component {
  state = {
    open: false,
  };

  static async getInitialProps() {
    const res = await axios.get('http://nlbavwtls22:3001/api/accounts');

    return {
      accounts: res.data.filter(account =>
        //account.team ==='TLS' &&
        account.region === 'EMEA'
      ).sort()
    }
  }

  handleOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
    window.location.replace(this.props.url || '/');
  };
  componentDidMount() {
    this.setState({
      open: true
    });
  }

  render() {
    const actions = [
      <FlatButton label="Discard" primary={ true } onTouchTap={ this.handleClose } />,
    ];

    const {message ='Unauth'} = this.props

    return (
      <MuiThemeProvider muiTheme={ muiTheme }>
        <div>
          <Dialog actions={ actions } modal={ false } open={ this.state.open } onRequestClose={ this.handleClose }>
            { message }
            <StudentList students={ this.props.accounts } />
          </Dialog>
        </div>
      </MuiThemeProvider>
      );
  }
}