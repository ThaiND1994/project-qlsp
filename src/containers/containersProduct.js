import React, { Component } from 'react';
import Products from './../components/Products';
import ProductItem from './../components/productitem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './../actions/index'
class containerProduct extends Component {
    showProduct(product) {
        var result = null;
        if (product.length > 0) {
            result = product.map((product, index) => {
                // truyền vào Product 1 cái props là product(prodcut này chính là cái mapStateToProps)
                return <ProductItem key={index}
                    product={product}
                    onAdd={this.props.onAdd}
                    onChangeMessage={this.props.onChangeMessage} />
            });
        }
        return result;
    }
    render() {
        return (
            <Products>
                {this.showProduct(this.props.products)}
            </Products>
        );
    }
}
//kiểm tra kiểu giá trị của props mà component nhận vào
containerProduct.propTypes = {
    // kiểm tra xem cái props product có phải dạng array ko,isRequired bắt buộc phải có
    products: PropTypes.arrayOf(
        //kiểm tra các giá trị bên trong object
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
        })
    ).isRequired,
    onChangeMessage: PropTypes.func.isRequired

}
const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAdd: (product) => {
            dispatch(actions.actADDTOCART(product, 1))
        },
        onChangeMessage: (message) => {
            dispatch(actions.actChangeMessage(message))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(containerProduct);
