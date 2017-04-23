import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import FlatButton from 'material-ui/FlatButton';
import Link from 'next/link';
import styled from 'styled-components';

const StyledFlatButton = styled(FlatButton)`
	color:white;
`;

const menuButtons = () => {
  return (
    <div className="mb">
      <Link href="/courses">
        <StyledFlatButton label="Courses" />
      </Link>
      <Link href="/">
        <div>
          <FileCloudDownload style={{ color: 'white' }} />
          <FlatButton label="Students" style={{ color: 'white' }} />
        </div>
      </Link>
      <style jsx>{`
			.mb {
				display: flex;
				font-family: Oswald;
				color: white;
				font-size: 18px;
			}
			`}</style>
    </div>
  );
};

export default () => {
  return (
    <div className="AppBar">
      <AppBar
        title="Infor Support Dashboard"
        iconElementLeft={
          <Link href="/">
            <div>
              <IconButton style={{ color: 'white' }}><ActionHome /></IconButton>
            </div>
          </Link>
        }
        iconElementRight={menuButtons()}
      />
      <style jsx>{`
		.AppBar {
			display: flex;
			color: white;
			font-family: Oswald;
		}
		`}</style>
    </div>
  );
};
