import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import container from '../style/container.css';
import Tag from './SubScreen_AddProduct/Tag';
import Key from './SubScreen_AddProduct/Key';
import Voucher from './SubScreen_AddProduct/Voucher';
import Include from './SubScreen_AddProduct/Include';
import IncludeIn from './SubScreen_AddProduct/IncludeIn';
class AddProduct extends Component {

	constructor(props) {
		super(props);
		this.state = {
			product: {
				name: "",
				short_name: "",
				type: "",
				brief: "",
				description: "",
				developer: "",
				publisher: "",
				release_date: new Date(),
				platform: "",
				purchase_price: 0,
				sale_price: 0,
				tags: [],
				keys: [],
				images: [],
				videos: [],
				includes: [],
				includes_in: [],
				vocher: [],
			}
		}
	}

	onChange = (e) => {
		var target = e.target;
		var name = target.name;
		var value = target.value;
		this.setState(pre => ({
			product: {
				...pre.product,
				[name]: value
			}
		}))
	}

	onChangeImages = (e) => {
		var { product } = this.state;
		var images = product.images
		var target = e.target;
		var index = target.name;
		var value = target.value;
		images[index] = {
			url: value,
			type: ""

		}
		this.setState(pre => ({
			product: {
				...pre.product,
				images
			}
		}))
	}

	onSave = (e) => {
		var { product } = this.state
		axios({
			method: 'POST',
			url: 'http://localhost:5000/api/games/add',
			data: product
		}).then(res => {
			console.log(res);
		}).catch(err => {
			console.log(err);
		})
	}

	onAddImage = () => {
		var { product } = this.state;
		var images = product.images
		images.push({
			url: "",
			type: ""
		});
		this.setState(pre => ({
			product: {
				...pre.product,
				images
			}
		}))
	}

	onAddVideo = () => {
		var { product } = this.state;
		var videos = product.videos
		videos.push("")
		this.setState(pre => ({
			product: {
				...pre.product,
				videos
			}
		}))
	}

	showImages(images) {
		var result = null;
		if (images.length > 0) {
			result = images.map((image, index) => {
				return (
					<Col className="img">
						<div className="img-container" style={{ display: 'flex', width: '15rem' }}>
							<form style={{ marginLeft: '1rem' }}>
								<img src={image.url} style={{ width: '17rem', height: '17rem' }} />
								<input name={index} type="text" placeholder="URL" style={{ width: '17rem' }} onChange={this.onChangeImages} />
								<input name="type" index={index} type="text" placeholder="Type" style={{ width: '17rem' }} />
							</form>
						</div>
					</Col>
				)
			})
		}
		return result;
	}

	showVideos(videos) {
		var result = null;
		if (videos.length > 0) {
			result = videos.map((video, index) => {
				return (
					<Col className="video">
						<div className="video-container" style={{ display: 'flex', width: '15rem' }}>
							<form style={{ marginLeft: '1rem' }}>
								<iframe width="256" height="256" src="https://www.youtube.com/embed/qHQsHJWxl4c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
								<input name="Video" value="" type="text" placeholder="URL" style={{ width: '16rem' }} />
								<input name="Video" value="" type="text" placeholder="Type" style={{ width: '16rem' }} />
							</form>
						</div>
					</Col>
				)
			})
		}
		return result;
	}

	render() {
		var { product } = this.state;
		console.log(product)
		return (
			<div>
				<Container>
					<div style={{ backgroundColor: '#3ac9c9', paddingLeft: '2rem', paddingBottom: '1rem' }}>
						<p style={{ color: 'white', fontSize: '23px', paddingTop: '1rem' }}>Thêm sản phẩm</p>
					</div>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<Container style={{ backgroundColor: 'white', width: '60rem', marginLeft: '8%', padding: '1rem' }}>
							{/*Parent Row 1*/}
							<Row style={{ margin: '0.2rem', marginTop: '1rem', marginBottom: '1rem', border: '1px solid black', padding: '1rem' }}>
								<h5>Thông tin chung</h5>
								<Container style={{ marginTop: '3rem' }}>
									<Col>
										<div className="parent-row-1-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
											<div className="product-details-table">
												<Table striped bordered style={{ width: '30rem' }}>
													<thead>
														<tr>
															<th></th>
															<th></th>
															<th></th>

														</tr>
													</thead>
													<tbody>

														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>1</td>
															<td style={{ padding: '5px' }}>Name</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} name="name" size="sm" type="text" placeholder="Nhập vào" onChange={this.onChange} /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>2</td>
															<td style={{ padding: '5px' }}>Short name</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} name="short_name" size="sm" type="text" placeholder="Nhập vào" onChange={this.onChange} /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>3</td>
															<td style={{ padding: '5px' }}>Type</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} name="type" size="sm" type="text" placeholder="Nhập vào" onChange={this.onChange} /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>4</td>
															<td style={{ padding: '5px' }}>Brief</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} name="brief" size="sm" type="text" placeholder="Nhập vào" onChange={this.onChange} /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>5</td>
															<td style={{ padding: '5px' }}>Description</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} name="description" size="sm" type="text" placeholder="Nhập vào" onChange={this.onChange} /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>6</td>
															<td style={{ padding: '5px' }}>Developer</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} name="developer" size="sm" type="text" placeholder="Nhập vào" onChange={this.onChange} /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>7</td>
															<td style={{ padding: '5px' }}>Publisher</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} name="publisher" size="sm" type="text" placeholder="Nhập vào" onChange={this.onChange} /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>8</td>
															<td style={{ padding: '5px' }}>Release date</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} name="release_date" size="sm" type="text" placeholder="Nhập vào" onChange={this.onChange} /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>9</td>
															<td style={{ padding: '5px' }}>Platform</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} name="platform" size="sm" type="text" placeholder="Nhập vào" onChange={this.onChange} /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>10</td>
															<td style={{ padding: '5px' }}>Purchase price</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} name="purchase_price" size="sm" type="text" placeholder="Nhập vào" onChange={this.onChange} /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>11</td>
															<td style={{ padding: '5px' }}>Sale price</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} name="sale_price" size="sm" type="text" placeholder="Nhập vào" onChange={this.onChange} /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>12</td>
															<td style={{ padding: '5px' }}>Tags</td>
															<td><Tag tags={product.tags} /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>13</td>
															<td style={{ padding: '5px' }}>Keys</td>
															<td><Key keys={product.keys} /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>14</td>
															<td style={{ padding: '5px' }}>Includes</td>
															<td><Include /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>15</td>
															<td style={{ padding: '5px' }}>Includes in</td>
															<td><IncludeIn /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>15</td>
															<td style={{ padding: '5px' }}>Voucher</td>
															<td><Voucher /></td>
														</tr>
													</tbody>
												</Table>
											</div>
										</div>
									</Col>
								</Container>
							</Row>
							{/*Parent Row 2 */}
							<Row style={{ display: "flex", margin: '0.2rem', border: '1px solid black', marginTop: '1rem', marginBottom: '1rem', padding: '1rem' }}>
								<p style={{ fontSize: '12px' }}>Videos</p>
								<Button variant="secondary" style={{ width: '3rem', margin: '0.6rem' }} onClick={this.onAddVideo}>+</Button>
								<Row>
									{this.showVideos(product.videos)}
								</Row>
							</Row>
							{/*Parent Row 3 */}
							<Row style={{ display: "flex", margin: '0.2rem', border: '1px solid black', marginTop: '1rem', marginBottom: '1rem', padding: '1rem' }}>
								<p style={{ fontSize: '12px' }}>Hình ảnh</p>
								<Button variant="secondary" style={{ width: '3rem', margin: '0.6rem' }} onClick={this.onAddImage}>+</Button>
								<Row>{this.showImages(product.images)}</Row>
							</Row>
						</Container>
						<Container style={{ marginLeft: '4rem' }}>
							<Button style={{
								position: 'relative',
								float: 'right',
								marginRight: '8rem',
								width: '7rem',
								backgroundColor: 'white',
								color: 'black',
								fontSize: '12px'
							}}>Hủy</Button>
							<Button onClick={this.onSave} style={{
								position: 'relative',
								float: 'right',
								marginRight: '4rem',
								width: '7rem',
								fontSize: '12px',
								backgroundColor: '#3ac9c9'
							}}>Thêm</Button>
						</Container>
					</div>
				</Container>
			</div>
		)
	}
}
export default AddProduct;



