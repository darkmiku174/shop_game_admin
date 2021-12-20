import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { FaTrash } from 'react-icons/fa';
import { Pagination } from '@mui/material';
import { Button, Table, Container } from 'react-bootstrap';
import container from '../style/container.css';
class VoucherManager extends Component {
    render() {
        return (
            <Container>
                <div style={{ backgroundColor: '#3ac9c9' }}>
                    <p style={{ color: 'white', fontSize: '23px' }}>Voucher</p>
                </div>
                <Container className="table-container">
                    <Button style={{ float: 'right', marginBottom: '1rem' }}>Thêm +</Button>
                    <Table className="normal-table" bordered hover responsive="sm">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Id</th>
                                <th>Code</th>
                                <th>Discount</th>
                                <th>Create date</th>
                                <th>Time expired</th>
                                <th>Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td><FaTrash /></td>
                            </tr>
                        </tbody>
                    </Table>
                    <Pagination count={10} />
                </Container>
            </Container>
        )
    }
}
export default VoucherManager;