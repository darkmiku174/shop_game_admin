import React, { Component } from 'react';
import { Button, Table, Modal, Form, Dropdown } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
class Key extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            keys: []
        }
    }

    handleClose = () => {
        var { keys } = this.state
        this.setState({
            show: false
        })
        if (keys.length > 0) {
            keys.map((key, index) => {
                this.props.keys.push(key)
            })
        }
    };
    handleShow = () => {
        var { keys } = this.state
        this.props.keys.splice(0, keys.length)
        this.setState({
            show: true,
        })
    };

    onChange = (e) => {
        var { keys } = this.state
        var target = e.target;
        var index = target.name;
        var value = target.value;
        var key={
            code: value,
            status: "inactive"
        }
        if (index >= keys.length) {
            keys.push(key)
        } else {
            keys[index] = key
        }
    }

    showRowKeys(keys) {
        var result = null;
        if (keys.length > 0) {
            result = keys.map((key, index) => {
                return (
                    <tr className="tr-edit">
                        <td style={{ padding: '5px' }}>{index + 1}</td>
                        <td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} name={index} size="sm" type="text" value={this.showKey(key.code)} placeholder="Nhập vào" onChange={this.onChange} /></td>
                        <td style={{ padding: '0px' }}>
                            <Form.Select aria-label="Default select example" value={key.status}>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </Form.Select>
                        </td>
                        <td>
                            <button onClick={() => this.onDeleteRow(index)} ><FaTrash /></button>
                        </td>
                    </tr>
                )
            })
        }
        return result;
    }

    showKey(code) {
        if (code !== "") {
            return code
        }
    }

    onAddRow = () => {
        var { keys } = this.state;
        keys.push({
            code: "",
            status: "inactive"
        });
        this.setState({
            keys
        })
    }
    onDeleteRow = (index) => {
        var { keys } = this.state
        keys.splice(index, 1)
        this.setState({
            keys
        })
        this.showRowKeys(keys)
    }

    render() {
        var { show, keys } = this.state
        return (
            <>
                <Button onClick={this.handleShow} className="selected-btn" variant="secondary" style={{ width: '10rem' }}>
                    Key details
                </Button>
                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Key list</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Button variant="secondary" style={{ float: 'right', marginBottom: '1rem' }} onClick={this.onAddRow}>Thêm</Button>
                        <Table bordered hover responsive="sm" className="listgame-details">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Code</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.showRowKeys(keys)}
                            </tbody>
                        </Table>
                    </Modal.Body>
                </Modal>
            </>
        )
    }

}
export default Key;