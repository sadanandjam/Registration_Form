import Product2 from "./user2";

function Product1(val){
    return(
        <div>
        <Product2 amount={val.amount}/>
        </div>
    )
}
export default Product1;