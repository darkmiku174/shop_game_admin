import React, { Component } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
class Tag extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            tags: [""]
        }
    }

    handleClose = () => {
        var { tags } = this.state
        this.setState({
            show: false
        })
        if (tags.length > 0) {
            tags.map((tag, index) => {
                this.props.tags.push(tag)
            })
        }
    };
    handleShow = () => {
        var { tags } = this.state
        this.props.tags.splice(0, tags.length)
        this.setState({
            show: true,
        })
    };

    onChange = (e) => {
        var { tags } = this.state
        var target = e.target;
        var index = target.name;
        var value = target.value;
        if (index >= tags.length) {
            tags.push(value)
        } else {
            tags[index] = value
        }
    }

    showRowTags(tags) {
        var result = null;
        if (tags.length > 0) {
            result = tags.map((tag, index) => {
                return (
                    <tr className="tr-edit">
                        <td style={{ padding: '5px' }}>{index + 1}</td>
                        <td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} name={index} size="sm" type="text" value={this.showTag(tag)} placeholder="Nhập vào" onChange={this.onChange} /></td>
                        <td>
                            <button onClick={() => this.onDeleteRow(index)} ><FaTrash /></button>
                        </td>
                    </tr>
                )
            })
        }
        return result;
    }

    showTag(tag) {
        if (tag !== "") {
            return tag
        }
    }

    onAddRow = () => {
        var { tags } = this.state;
        tags.push("");
        this.setState({
            tags
        })
    }
    onDeleteRow = (index) => {
        var { tags } = this.state
        tags.splice(index, 1)
        this.setState({
            tags
        })
        this.showRowTags(tags)
    }

    render() {
        var { show, tags } = this.state
        return (
            <>
                <Button onClick={this.handleShow} className="selected-btn" variant="secondary" style={{ width: '10rem' }}>
                    Tag details
                </Button>
                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Tag list</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Button variant="secondary" style={{ float: 'right', marginBottom: '1rem' }} onClick={this.onAddRow} >Thêm</Button>
                        <Table bordered hover responsive="sm" className="listgame-details">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Tags name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.showRowTags(tags)}
                            </tbody>
                        </Table>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}
export default Tag;