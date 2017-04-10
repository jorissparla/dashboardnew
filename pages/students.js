import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Page from '../components/page';

export default () => {
	return (
		<MuiThemeProvider>
			<Page>
      Students
    </Page>
		</MuiThemeProvider>
	);
};
