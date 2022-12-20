import axios from "axios"
// class UserService {
//     getAllUsers = (searchDetails) => {
//         var url = "https://nztodo.herokuapp.com/api/tasks/?format=json";
//         if (searchDetails.name !== '' && searchDetails.name != null)
//             url = url + "&search=" + searchDetails.name
//         return axios.get(url);
//     }
//     aaaaa(){
//         return axios.get(`http://127.0.0.1:5000/`)
//         .then(res=>console.log(res))
        
//     }

//     postfile(files){
//         console.log(files)
//         // var url = "https://nztodo.herokuapp.com/api/tasks/?format=json";
//         // if (searchDetails.name != '' && searchDetails.name != null)
//         //     url = url + "&search=" + searchDetails.name
//         return axios.post(`http://127.0.0.1:5000/hello`,files,{})
//         .then(function (res){return res})    
//     }
// }
// export default new UserService()