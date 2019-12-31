import React, { Component } from 'react';
import * as message from './../const/message'
class Cartitem extends Component {
    constructor(props){
        super(props);
        this.state={
            quantity:1
        }
    }
    subTotal=(quantity,price)=>{
        return quantity*price;
    }
    onDelete=(product)=>{
        this.props.onDelete(product);
        this.props.onChangeMessage(message.MSG_DELETE_PRODUCT_TO_CART_SUCCESS);
    }
    onUpdateQuantity=(product,quantity)=>{
        if(quantity>0)
        { this.setState({
                quantity:quantity
            })
            this.props.onUpdateProductInCart(product,quantity)
            this.props.onChangeMessage(message.MSG_UPDATE_PRODUCT_TO_CART_SUCCESS)
        }
    }
	render() {
        var {item}=this.props;
        var quantity= item.quantity > 0 ? item.quantity:this.state.quantity;
		return (
            <tr>
            <th scope="row">
                <img src={item.product.img}
                    alt={item.product.name} className="img-fluid z-depth-0" />
            </th>
            <td>
                <h5>
                    <strong>{item.product.name}</strong>
                </h5>
            </td>
            <td>{item.product.price}$</td>
            <td className="center-on-small-only">
                <span className="qty">{quantity}</span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light"
                        onClick={()=>this.onUpdateQuantity(item.product,item.quantity-1)}
                    >
                        <a href={'# '}>—</a>
                    </label>
                    <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light"
                        onClick={()=>this.onUpdateQuantity(item.product,item.quantity+1)}
                    >
                        <a href={'# '}>+</a>
                    </label>
                </div>
            </td>
            <td>{this.subTotal(item.quantity,item.product.price)}</td>
            <td>
                <button type="button" 
                className="btn btn-sm btn-primary waves-effect waves-light" 
                data-toggle="tooltip" 
                data-placement="top"
                title="" 
                data-original-title="Remove item"
                onClick={()=>{this.onDelete(item.product)}}
                >
                    Delete
                </button>
            </td>
            </tr>
		);
	}
}

export default Cartitem;
