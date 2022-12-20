import axios from "axios"
import userService from "./item.service"
class UserService{

BASE_URL= "https://fakestoreapi.com/products";
getItemDetails=()=>{
    axios.get(this.BASE_URL);
}

}
export default new UserService()