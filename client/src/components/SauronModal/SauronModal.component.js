import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import DeleteBtn from '../DeleteBtn';

import API from '../../utils/API';

// import API from '../../utils/API'
// import axios from 'axios';
// const api = new API();

const SauronModal = (props) => {
	const {
		className
	} = props;

	const [orderNumber, setOrderNumber] = useState('');
	const [modal, setModal] = useState(false);
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [description, setDescription] = useState('');
	const [pointOfContact, setPointOfContact] = useState('');
	const [clientName, setClientName] = useState('');
	const toggle = () => setModal(!modal);

	const createViewOrder = () => {
		console.log('orderrr', orderNumber, 'DESCCC', description)
		const order = {
			//description: '',
			clientName,
			pointOfContact,
			email,
			phone,
			orderRequest: 'fake value'
		}
		API.saveOrder(order).then(newOrder => console.log('sdasasaS', newOrder.data)).catch(err => console.log('caaaaaa', err));

		
	}

	return (
		<div id="modalDiv">
		<Button color="primary" onClick={toggle} id="modalButton">Create New Order</Button>
			<Modal isOpen={modal} toggle={toggle} className={className}>
				<ModalHeader toggle={toggle} id="modalHeader">Create A New Sales Order</ModalHeader>
				
				<ModalBody>
					<Form id="modalForm">
						<FormGroup>
							<Label for="exampleEmail">Sales Order Number:</Label>
							<Input value={orderNumber} onChange={v => setOrderNumber(v.target.value)} name="orderNumber" id="orderNumber" placeholder="Please enter Sales Order Number" />
						</FormGroup>

						<FormGroup>
							<Label for="exampleDesc">Description:</Label>
							<Input value={description} onChange={v => setDescription(v.target.value)} type="text" name="description" id="exampleDescription" placeholder="Please enter a brief description of the order" />
							<Label for="exampleClient">Client Name:</Label>
							<Input value={clientName} onChange={v => setClientName(v.target.value)} type="text" name="clientName" id="exampleClient" placeholder="Please enter the Client" />
						</FormGroup>

						<FormGroup>
							<Label for="examplePOC">Point of Contact</Label>
							<Input value={pointOfContact} onChange={v => setPointOfContact(v.target.value)} type="text" name="pointOfContact" id="examplePOC" placeholder="Please enter the point of contact" />
						</FormGroup>

						<FormGroup>
							<Label for="exampleEmail">Email</Label>
							<Input value={email} onChange={v => setEmail(v.target.value)}type="email" name="email" id="exampleEmail" placeholder="Please enter an email address" />
						</FormGroup>

						<FormGroup>
							<Label for="examplePhone">Phone</Label>
							<Input value={phone} onChange={v => setPhone(v.target.value)}type="integer" name="phone" id="examplePhone" placeholder="Please enter a phone number" />
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
					<Button type="submit" onClick={createViewOrder}>Submit Order</Button>{' '}
					<Button onClick={toggle}>Cancel</Button>
				</ModalFooter>
			</Modal>

			<DeleteBtn />
		</div>
	)
}

export default SauronModal;