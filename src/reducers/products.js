var initialState=[{
    id:1,
    name:'Iphone 8',
    img:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone8-select-2019-family?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1550795431127',
    description:'Iphone 8 , bộ nhớ 32GB',
    price:500,
    inventory:10,
    rating :4
},
{
    id:2,
    name:'Iphone 11',
    img:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-select-2019-family?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567022175704',
    description:'Iphone 11 , bộ nhớ 128GB',
    price:1000,
    inventory:5,
    rating:5
},
{
    id:3,
    name:'Iphone 11 Pro ',
    img:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-space-select-2019?wid=834&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1566954989577',
    description:'Iphone 11 Pro , bộ nhớ 256GB',
    price:1500,
    inventory:15,
    rating:5
}
]
const products=(state=initialState,action)=>{
    switch(action.type){
        default: return [...state]
    }
}
export default products;