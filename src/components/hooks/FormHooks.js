import { useState } from "react";
import axios from "axios";
// const getGiHubUserWithAxios = async () => {
//     const response = await axios.get(prodecturl);
//     setUserData(response.data);
//   };
//   useEffect(() => {
//     getGiHubUserWithAxios();
//   }, []);
const getGitHubUserWithFetch = async () => {
    const response = await fetch(gitHubUrl);
    const jsonData = await response.json();
    setUserData(jsonData);
  };