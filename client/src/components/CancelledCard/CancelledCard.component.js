import React from 'react';
import { Card, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';

export const CancelledCard = (props) => {
	return(
		<div>
		<Card id="cancelledDiv">
			<CardBody>
				<CardTitle><h2>Cancelled Orders</h2></CardTitle>
				<CardSubtitle>List of Orders</CardSubtitle>
				<br></br>
				<CardText>Item #1</CardText>
				<CardText>Item #2</CardText>
				<CardText>Item #3</CardText>
				<CardText>Item #4</CardText>
			</CardBody>
			</Card>
  </div>
	);
};

export default CancelledCard;