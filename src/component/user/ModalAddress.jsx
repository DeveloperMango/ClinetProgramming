import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DaumPostcodeEmbed from 'react-daum-postcode';

const ModalAddress = ({onAddress}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onCompleted = (e) => {
        const address=e.buildingName ? `${e.address} (${e.buildingName})` : e.address;
        onAddress(address);
        handleClose();
    }
    return (
        <>
            <Button className = "custom-button"onClick={handleShow} >
                검색
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>

                <Modal.Header closeButton>
                    <Modal.Title>주소검색</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <DaumPostcodeEmbed onComplete={ (e)=>onCompleted(e) }/>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalAddress