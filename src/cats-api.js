import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_V4svR7tPTorAPN1vQiuugtos4Ngifb7vLiPEy0XOEJBIB1CcI6DJnkBbxEoLSF0c';

// export function fetchBreeds() {
//   return axios
//     .get('https://api.thecatapi.com/v1/breeds')
//     .then(response => {
//       return response.data;
//     })
//     .catch(error => {
//       // new Error('Oops! Something went wrong! Try reloading the page!');
//       errorInAxios(error);
//     });
// }

// export function fetchCatByBreed(breedId) {
//   return axios
//     .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
//     .then(response => {
//       console.log(response.data);
//       return response.data;
//     })
//     .catch(error => {
//       errorInAxios(error);
//       // new Error('Oops! Something went wrong! Try reloading the page!');
//     });
// }

// function errorInAxios(error) {
//   if (error.response) {
//     // The request was made and the server responded with a status code
//     // that falls out of the range of 2xx
//     console.log(error.response.data);
//     console.log(error.response.status);
//     console.log(error.response.headers);
//   } else if (error.request) {
//     // The request was made but no response was received
//     // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//     // http.ClientRequest in node.js
//     console.log(error.request);
//   } else {
//     // Something happened in setting up the request that triggered an Error
//     console.log('Error', error.message);
//   }
//   console.log(error.config);
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//
// rozwiazanie z uzyciem funkcji asynchroniczych
export async function fetchBreeds() {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    return response.data;
  } catch (error) {
    errorInAxios(error);
  }
}

export async function fetchCatByBreed(breedId) {
  try {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    errorInAxios(error);
  }
}

function errorInAxios(error) {
  if (error.response) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    console.log(error.request);
  } else {
    console.log('Error', error.message);
  }
  console.log(error.config);
}
