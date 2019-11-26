import React,{ useState } from 'react';
// import { TestPageProps } from './TestPage.propTypes'
import { Card, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Nav from '../../components/Nav/Nav.component';
// import Modal from '../../components/Modal/Modal.component';
import '../../../src/App.css';
import DeleteBtn from '../../components/DeleteBtn';



const TestPage = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  
  return (
    <div>
      <Nav />
    <div responsive id="mainCardDiv">
      <CardDeck>
        <Card id="inventoryDiv">
          <CardBody>
            <CardTitle><h2>Inventory</h2></CardTitle>
            <CardSubtitle>List of Orders</CardSubtitle>
            <br></br>
            <CardText>Item #1</CardText>
            <CardText>Item #2</CardText>
            <CardText>Item #3</CardText>
            <CardText>Item #4</CardText>
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
      <br></br>
      <div id="modalDiv">
      <Button color="primary" onClick={toggle} id="modalButton">Create New Order</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle} id="modalHeader">Create A New Sales Order</ModalHeader>
          <ModalBody>
            {/* Please complete the form */}
            <Form id="modalForm">
              <FormGroup>
                <Label for="exampleEmail">Sales Order Number:</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="Please enter Sales Order Number" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Description:</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="Please enter a brief description of the order" />
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
    </div>
    </div>
  );
};

export default TestPage;