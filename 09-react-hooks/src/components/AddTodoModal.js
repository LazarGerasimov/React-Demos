import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


export const AddTodoModal = () => {

    const onTodoSubmit = (e) => {
        e.preventDefault();
        console.log('submit')
    }

    return (
        <Modal show={true}>
            <Modal.Header closeButton>
                <Modal.Title>Add Todo</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={onTodoSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Todo</Form.Label>
                        <Form.Control type="text" placeholder="Add Todo here.." />
                    </Form.Group>

                    <Button variant="secondary">Close</Button>
                    <Button variant="primary" type="submit">Submit</Button>

                </Form>
            </Modal.Body>
        </Modal>
    )
}