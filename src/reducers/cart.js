import * as types from './../const/actionType';
var data=JSON.parse(localStorage.getItem('cart'));
var initialState=data ? data : [];
const cart = (state = initialState, action) => {
    var { product, quantity } = action
    var index = -1;
    var findProductInCart = (cart, product) => {
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {   //dùng vòng lặp để xem cart ở vị trí thứ i có id trùng với id của action truyền vào ko
                if (cart[i].product.id === product.id) {   //nếu có thì gán index = vị trí thứ i
                    index = i;
                    break;
                }
            }
        }
        return index
    }
    switch (action.type) {
        case types.ADD_TO_CART:
            index = findProductInCart(state, product)
            if (index !== -1) {
                state[index].quantity += quantity;
            }
            else {
                state.push({ product, quantity });
            }
            localStorage.setItem('cart',JSON.stringify(state))
            return [...state];
        case types.DELETE_PRODUCT:
            index=findProductInCart(state,product)
            if(index!==-1){
                state.splice(index,1)
            }
            localStorage.setItem('cart',JSON.stringify(state))
            return [...state];
        case types.UPDATE_PRODUCT_IN_CART:
            index=findProductInCart(state,product)
            if(index!==-1)
            {
                state[index].quantity=quantity
            }
            localStorage.setItem('cart',JSON.stringify(state))
            return [...state];
        default: return [...state]
    }
}
export default cart;