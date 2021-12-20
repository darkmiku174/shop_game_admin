import React,{useState} from 'react';
import { Button, Table,Modal } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
const IncludeIn = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
        <Button onClick={handleShow} className="selected-btn" variant="secondary" style={{width:'10rem'}}>
            Include in details  
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Include in details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Button variant="secondary" style={{float:'right', marginBottom:'1rem'}}>Thêm</Button>
            <Table bordered hover responsive="sm" className="listgame-details">
            <thead>
                <tr>
                <th></th>
                <th>Include in </th>
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
export default IncludeIn;