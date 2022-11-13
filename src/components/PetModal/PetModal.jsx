import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
function PetModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const deleteTodo = (id) => {
        axios.delete(`${process.env.REACT_APP_SECRET_NAME_backendURL}/api/animals/${id}`).then()

    }
    const save = () => {
        deleteTodo(props.id);
        alert("תודה שטיפלת בדיווח הציבור מודה לך")

    }

    return (
        <div className="App">
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ textAlign: "center" }}>פרטים נוספים</Modal.Title>
                </Modal.Header>
                <img src="https://mdbootstrap.com/img/new/standard/nature/184.webp" alt="image" />
                <Modal.Body dir='rtl'>שם: </Modal.Body>
                <Modal.Body dir='rtl'>טלפון:</Modal.Body>
                <Modal.Body dir='rtl'>כתובת:</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
}
export default PetModal;  