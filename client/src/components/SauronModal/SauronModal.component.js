import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import DeleteBtn from '../DeleteBtn';


const SauronModal = (props) => {
	const {
		className
	} = props;

	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	return (
		<div id="modalDiv">
		<Button color="primary" onClick={toggle} id="modalButton">Create New Order</Button>
			<Modal isOpen={modal} toggle={toggle} className={className}>
				<ModalHeader toggle={toggle} id="modalHeader">Create A New Sales Order</ModalHeader>
				
				<ModalBody>
					<Form id="modalForm">
						<FormGroup>
							<Label for="exampleEmail">Sales Order Number:</Label>
							<Input type="email" name="email" id="exampleEmail" placeholder="Please enter Sales Order Number" />
						</FormGroup>

						<FormGroup>
							<Label for="examplePassword">Description:</Label>
							<Input type="password" name="password" id="examplePassword" placeholder="Please enter a brief description of the order" />
							<Label for="exampleClient">Client Name:</Label>
							<Input type="text" name="clientName" id="exampleClient" placeholder="Please enter the Client" />
						</FormGroup>

						<FormGroup>
							<Label for="examplePOC">Point of Contact</Label>
							<Input type="text" name="pointOfContact" id="examplePOC" placeholder="Please enter the point of contact" />
						</FormGroup>

						<FormGroup>
							<Label for="exampleEmail">Email</Label>
							<Input type="email" name="email" id="exampleEmail" placeholder="Please enter an email address" />
						</FormGroup>

						<FormGroup>
							<Label for="examplePhone">Phone</Label>
							<Input type="integer" name="phone" id="examplePhone" placeholder="Please enter a phone number" />
						</FormGroup>

						<FormGroup>
							<Label for="exampleDesc"> Order Description:</Label>
							<Input type="text" name="description" id="exampleDesc" placeholder="Please enter a brief description of the order" />
						</FormGroup>

						<FormGroup>
							<Label for="exampleSelect">Choose a Department:</Label>
							<Input type="select" name="select" id="exampleSelect">
								<option>Inventory</option>
								<option>Assembly</option>
								<option>Quality Check</option>
								<option>Completed Orders</option>
							</Input>
						</FormGroup>
					</Form>
				</ModalBody>

				<ModalFooter>
					<Button onClick={toggle}>Submit Order</Button>{' '}
					<Button onClick={toggle}>Cancel</Button>
				</ModalFooter>
			</Modal>

			<DeleteBtn />
		</div>
	)
}

export default SauronModal;