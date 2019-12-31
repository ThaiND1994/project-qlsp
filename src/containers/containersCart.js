import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import Cartitem from './../components/Cartitem';
import CartResult from './../components/CartResult';
import * as Message from './../const/message';
import * as actions from './../actions/index';
class containersCart extends Component {
    showCartItem = (cart) => {
        var result = null;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return <Cartitem key={index}
                    item={item}
                    onDelete={this.props.onDelete}
                    onChangeMessage={this.props.onChangeMessage}
                    onUpdateProductInCart={this.props.onUpdateProductInCart} />
            })
        }
        else {
            result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
        }
        return result;
    }
    showTotalAmount = (cart) => {
        var result = null;
        if (cart.length > 0) {
            result = <CartResult key={cart.quantity} cart={cart} />
        }
        return result;
    }
    render() {
        var { cart } = this.props;
        return (
            <Cart >{this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart >
        );
    }
}
//kiểm tra kiểu giá trị của props mà component nhận vào
containersCart.propTypes = {
    // kiểm tra xem cái props product có phải dạng array ko,isRequired bắt buộc phải có
    cart: PropTypes.arrayOf(
        //kiểm tra các giá trị bên trong object
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                img: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired,
            }).isRequired,
            quantity: PropTypes.number.isRequired
        }),
    ).isRequired

}
const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDelete: (product) => {
            dispatch(actions.actDeleteCart(product))
        },
        onChangeMessage: (message) => {
            dispatch(actions.actChangeMessage(message))
        },
        onUpdateProductInCart: (product,quantity) => {
            dispatch(actions.actUpdateCart(product,quantity))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(containersCart);
