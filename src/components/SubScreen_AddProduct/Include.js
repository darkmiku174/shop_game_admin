import React,{useState} from 'react';
import { Button, Table,Modal } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
const Include = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
        <Button onClick={handleShow} className="selected-btn" variant="secondary" style={{width:'10rem'}}>
            Include details  
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Include details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Button variant="secondary" style={{float:'right', marginBottom:'1rem'}}>Thêm</Button>
            <Table bordered hover responsive="sm" className="listgame-details">
            <thead>
                <tr>
                <th></th>
                <th>Include</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td></td>
                <td></td>
                <td>
                    <button><FaTrash/></button>
                </td>
            </tr>
            </tbody>  
            </Table>
            </Modal.Body>
        </Modal>  
        </>                                                              
    )
}
export default Include;