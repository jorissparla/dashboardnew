import React from 'react';
import withRedux from 'next-redux-wrapper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Page from '../components/page';
import Card from '../components/card';

export default class Student extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Page>
          <Card />
        </Page>
      </MuiThemeProvider>
    );
  }
}
