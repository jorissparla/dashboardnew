import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: flex-start;
`;
const ContainerItem = styled.div`
  padding: 15px;
  font-family: Oswald;
  
  display: flex;
  margin: 2px;
  
`;
const ContainerPicture = styled.div`
  padding: 5px;
  display: flex;
    margin: 2px;
  
`;
const StatsContainer = styled.div`
  display: flex;
  width: 500px;
  justify-content: flex-start;
  `;
const StatsItem = styled.div`
  background-color: ${props => props.color ?
  props.color :
  'Olive'};
  font-family: Oswald;
  color: white;
  align-item: center;
  display: flex;
  flex-direction: column;
  padding : 2px;
  margin: 2px;
`;
const StatsItemNumber = styled.div`
  font-size: 48px;
  color: white;
justify-content: center;
  display: flex;
  padding : 2px
`;

const StatsItemText = styled.div`
  font-size: 12px;
  justify-content: center;
`;

export default({student}) => {
	return (
		<Paper zdepth={2}>
			<Container>
				<ContainerPicture>
					<Avatar src={student.picture} size={150}/>
				</ContainerPicture>
				<ContainerItem>
					<TextField
						defaultValue={student.fullname}
						underlineShow={false}
						style={{
							fontFamily: 'Oswald',
							fontSize: '32px'
						}}
						/>
					<TextField defaultValue={student.location} underlineShow={false}/>
					<StatsContainer>
						<StatsItem color="orange">
							<StatsItemNumber>
								{student.workload}
							</StatsItemNumber>
							<StatsItemText>
                Number of incidents
              </StatsItemText>
						</StatsItem>
						<StatsItem color="purple">
							<StatsItemNumber>
								{student.waitcust}
							</StatsItemNumber>
							<StatsItemText>
                Awaiting Customer
              </StatsItemText>
						</StatsItem>
						<StatsItem color="black">
							<StatsItemNumber>
								{student.solproposed}
							</StatsItemNumber>
							<StatsItemText>
                Solution Proposed
              </StatsItemText>
						</StatsItem>
						<StatsItem color="#F44336">
							<StatsItemNumber>
								{student.callbacks}
							</StatsItemNumber>
							<StatsItemText>
                Number of callbacks
              </StatsItemText>
						</StatsItem>
						<StatsItem color="darkgreen">
							<StatsItemNumber>
								{student.oldest_callback}
							</StatsItemNumber>
							<StatsItemText>
                Oldest callback in hrs
              </StatsItemText>
						</StatsItem>
					</StatsContainer>
				</ContainerItem>
			</Container>
		</Paper>
	);
};
