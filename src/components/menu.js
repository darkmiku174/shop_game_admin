import React, { Component } from 'react';
import CartManager from './cart_manager';
import CollectionManager from './collection_manager';
import OrderManager from './order_manager';
import ProductManager from './product_manager';
import UserManager from './user_manager';
import VoucherManager from './vocher_manager';
import navbar from '../style/navbar.css';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "CART"
        }
    }
    setActive = (pros) => {
        this.setState({
            active: pros
        })
    }

    render() {
        var { active } = this.state
        return (
            <>
                <div>
                    <link rel="stylesheet" type="text/css" href="css/menu.css" />
                    <link rel="stylesheet" type="text/css" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" />
                    <nav className="main-menu">
                        <div style={{ height: '56px', backgroundColor: '#343a40', padding: '1rem' }}>
                        </div>
                        <div />
                        <div className="scrollbar" id="style-1">
                            <ul>
                                <li onClick={() => this.setActive("CART")}>
                                    <a>
                                        <i className="fa fa-shopping-cart fa-lg" />
                                        <span className="nav-text">Cart</span>
                                    </a>
                                </li>
                                <li onClick={() => this.setActive("COLLECTION")}>
                                    <a>
                                        <i className="fa fa-list fa-lg" />
                                        <span className="nav-text">Collection</span>
                                    </a>
                                </li>
                                <li onClick={() => this.setActive("PRODUCT")}>
                                    <a>
                                        <i className="fa fa-gamepad fa-lg" />
                                        <span className="nav-text">Product</span>
                                    </a>
                                </li>
                                <li onClick={() => this.setActive("ORDER")}>
                                    <a>
                                        <i className="fa fa-th fa-lg" />
                                        <span className="nav-text">ORDER</span>
                                    </a>
                                </li>
                                <li onClick={() => this.setActive("USER")}>
                                    <a>
                                        <i className="fa fa-user fa-lg" />
                                        <span className="nav-text">USER</span>
                                    </a>
                                </li>
                                <li onClick={() => this.setActive("VOUCHER")}>
                                    <a>
                                        <i className="fa fa-money fa-lg" />
                                        <span className="nav-text">VOUCHER</span>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="mcw">
                    {active === "CART" && <CartManager />}
                    {active === "PRODUCT" && <ProductManager />}
                    {active === "ORDER" && <OrderManager />}
                    {active === "COLLECTION" && <CollectionManager />}
                    {active === "USER" && <UserManager />}
                    {active === "VOUCHER" && <VoucherManager />}
                </div>
            </>
        )
    }
}
export default Menu;