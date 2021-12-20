import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Button, Table, Container, Modal } from 'react-bootstrap';
import { FaEdit, FaTrash, FaAngleDoubleDown } from 'react-icons/fa';
import { Pagination } from '@mui/material';
import axios from "axios"
import AddProduct from './add_product';
import container from '../style/container.css';

class ProductManager extends Component {

	constructor(props) {
		super(props);
		this.state = {
			products: [],
			show: false
		}
	}

	handleClose = () => {
		this.setState({
			show: false
		})
	};
	handleShow = () => {
		this.setState({
			show: true
		})
	};

	componentDidMount() {
		axios({
			method: 'GET',
			url: 'http://localhost:5000/api/games',
			data: null
		}).then(res => {
			console.log(res);
			this.setState({
				products: res.data
			});
		}).catch(err => {
			console.log(err);
		})
	}

	// onClick = (product) => {
	// 	axios({
	// 		method: 'DELETE',
	// 		url: 'http://localhost:5000/api/products/delete/'+product._id,
	// 		data: null
	// 	}).then(res => {
	// 		window.location.reload();
	// 	}).catch(err => {
	// 		console.log(err);
	// 	})
	// }

	countActiveKey(keys) {
		var result = 0;
		if (keys.length > 0) {
			keys.map((key, index) => {
				if (key.status === "active")
					result++;
			})
		}
		return result;
	}

	showKeys(keys) {
		var result = 0;
		if (keys.length > 0) {
			result = keys.map((key, index) => {
				if (key.status === "active") {
					return (
						<tr>
							<td>{index}</td>
							<td>{key.code}</td>
						</tr>
					)
				}
			});
		}
		return result;
	}

	getDate(date) {
		var result = "";
		var year = date.slice(0, 4);
		var month = date.slice(5, 7)
		var day = date.slice(8, 10)
		result = result + day + "/" + month + "/" + year
		return result;
	}

	showProducts(products, show) {
		var result = null;
		if (products.length > 0) {
			result = products.map((product, index) => {
				return (
					<tr>
						<td>{product.name}</td>
						<td>{product.type}</td>
						<td>{product.developer}</td>
						<td>{product.publisher}</td>
						<td>{this.getDate(product.release_date)}</td>
						<td>{product.platform}</td>
						<td>{product.purchase_price}</td>
						<td>{product.sale_price}</td>
						<td>
							{this.countActiveKey(product.keys)}
							<FaAngleDoubleDown onClick={this.handleShow} style={{ fontSize: '12px', marginLeft: '1rem' }} />
							<Modal show={show} onHide={this.handleClose}>
								<Modal.Header closeButton>
									<Modal.Title>Chi tiết kho</Modal.Title>
								</Modal.Header>
								<Modal.Body>
									<Table bordered hover responsive="sm" className="listgame-details">
										<thead>
											<tr>
												<th></th>
												<th>Code</th>
											</tr>
										</thead>
										<tbody>
											{this.showKeys(product.keys)}
										</tbody>
									</Table>
									<Table bordered hover responsive="sm" className="listgame-details">
										<tbody>
											<tr>
												<td>
													<p>Số lượng hàng tồn trong kho: {this.countActiveKey(product.keys)}</p>
												</td>
											</tr>
										</tbody>
									</Table>
								</Modal.Body>
							</Modal>
						</td>
						<td>{product.vocher}</td>
						<td style={{ display: 'flex', justifyContent: 'space-around' }}>
							{/* <button onClick={() => this.onClick(product)} key={index}><FaTrash /></button> */}
							<button><FaEdit /></button>
							{/* <button onClick={() => this.onClick(product)} key={index}><FaTrash /></button> */}
							<button><FaTrash /></button>
						</td>
					</tr>
				)
			});
		}
		return result;
	}
	render() {
		var { products, show } = this.state
		return (
			<Container>
				<div style={{ backgroundColor: '#3ac9c9' }}>
					<p style={{ color: 'white', fontSize: '23px' }}>Product</p>
				</div>
				<Container>
					<div style={{ backgroundColor: 'white' }}>
						<Button variant="secondary" style={{ float: 'right', width: '5rem' }}> Thêm</Button>
						<Table bordered hover style={{ backgroundColor: 'white', fontSize: '12px' }}>
							<thead>
								<tr>
									<th style={{ fontSize: '13px' }}>Tên sản phẩm</th>
									<th style={{ fontSize: '13px' }}>Loại</th>
									<th style={{ fontSize: '13px' }}>Nhà phát triển</th>
									<th style={{ fontSize: '13px' }}>Nhà phát hành</th>
									<th style={{ fontSize: '13px' }}>Ngày xuất bản</th>
									<th style={{ fontSize: '13px' }}>Hệ điều hành</th>
									<th style={{ fontSize: '13px' }}>Giá mua</th>
									<th style={{ fontSize: '13px' }}>Giá bán</th>
									<th style={{ fontSize: '13px' }}>Kho</th>
									<th style={{ fontSize: '13px' }}>Khuyến mãi</th>
								</tr>
							</thead>
							<tbody>
								{this.showProducts(products, show)}
							</tbody>
						</Table>
						<Row style={{ marginTop: '1rem', float: 'right' }}>
							<Pagination count={10} />
						</Row>
					</div>
				</Container>
			</Container>
		)
	}
}
export default ProductManager;


