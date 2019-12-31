import * as types from './../const/actionType';

export const actADDTOCART= (product,quantity)=>{
    return {
        type:types.ADD_TO_CART,
        product,
        quantity
    }
}
export const actChangeMessage = (message)=>{
    return {
        type:types.CHANGE_MESSAGE,
        message
    }
}
export const actDeleteCart = (product)=>{
    return {
        type:types.DELETE_PRODUCT,
        product
    }
}
export const actUpdateCart = (product,quantity)=>{
    return{
        type:types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}