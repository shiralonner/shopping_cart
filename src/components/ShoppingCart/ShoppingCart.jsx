import {useSelector} from "react-redux";
export default function ShoppingCart() {
    const selector = useSelector(state=>state)
    return <div>
        {/* {
            selector.map((prod, index)=>{
                return <div key={index}><div>{prod.title}</div></div>
            })
        } */}
       
        </div>
    
}