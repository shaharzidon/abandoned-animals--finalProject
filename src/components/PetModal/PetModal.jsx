import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
function PetModal({ report }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    // const deleteTodo = (id) => {
    //     axios.delete(`${process.env.REACT_APP_SECRET_NAME_backendURL}/api/animals/${id}`).then()

    // }
    // const save = () => {
    //     deleteTodo(props.id);
    //     alert("תודה שטיפלת בדיווח הציבור מודה לך")

    // }

    return (
        <div className="App">
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ textAlign: "center" }}>פרטים נוספים</Modal.Title>
                </Modal.Header>
                <img src={report.photo} alt="image" />
                <Modal.Body dir='rtl'>שם: {report.name} </Modal.Body>
                <Modal.Body dir='rtl'>טלפון: {report.phoneNumber}</Modal.Body>
                <Modal.Body dir='rtl'>כתובת: {report.place}</Modal.Body>
                <Modal.Body dir='rtl'>הערות: {report.exstraDetails}</Modal.Body>
                <Modal.Body dir='rtl'>סטאטוס: </Modal.Body>
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

