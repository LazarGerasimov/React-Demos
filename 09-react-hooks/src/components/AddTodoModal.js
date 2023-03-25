import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export const AddTodoModal = () => {
    return (
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Add Todo</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Add</Button>
            </Modal.Footer>
        </Modal.Dialog>
    )
}