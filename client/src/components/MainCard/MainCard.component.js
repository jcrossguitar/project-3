import React from 'react';
import { Card, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import DenseTable from '../../components/CardTable/NewCardTable.component';
import '../../../src/App.css';



// export const MainCard = (props) => {
class MainCard extends React.Component {
	render() {
		return (
			<div responsive id="mainCardDiv">
					<CardDeck>
						<Card id="inventoryDiv">
							<CardBody>
								<CardTitle><h2>Inventory</h2></CardTitle>
								<CardSubtitle>List of Orders</CardSubtitle>
								<br></br>
								{/* <CardText>Item #1</CardText>
								<CardText>Item #2</CardText>
								<CardText>Item #3</CardText>
								<CardText>Item #4</CardText> */}
								<DenseTable />
							</CardBody>
						</Card>

						<Card id="assemblyDiv">
							<CardBody>
								<CardTitle><h2>Assembly</h2></CardTitle>
								<CardSubtitle>List of Orders</CardSubtitle>
								<br></br>
								<CardText>Item #1</CardText>
								<CardText>Item #2</CardText>
								<CardText>Item #3</CardText>
								<CardText>Item #4</CardText>
							</CardBody>
						</Card>
					</CardDeck>
					
					<CardDeck>
						<Card id="qcDiv">
							<CardBody>
								<CardTitle><h2>Quality Check</h2></CardTitle>
								<CardSubtitle>List of Orders</CardSubtitle>
								<br></br>
								<CardText>Item #1</CardText>
								<CardText>Item #2</CardText>
								<CardText>Item #3</CardText>
								<CardText>Item #4</CardText>
							</CardBody>
						</Card>

						<Card id="completedDiv">
							<CardBody>
								<CardTitle><h2>Completed Orders</h2></CardTitle>
								<CardSubtitle>List of Orders</CardSubtitle>
								<br></br>
								<CardText>Item #1</CardText>
								<CardText>Item #2</CardText>
								<CardText>Item #3</CardText>
								<CardText>Item #4</CardText>
							</CardBody>
						</Card>
					</CardDeck>
					<br></br>
			</div>
		);
	};
};
	export default MainCard;