import axios from 'axios';

export async function getDiscoverMovies(sortby, page) {
  const url = process.env.REACT_APP_API_URL + '/discover/movie';
  var configs = {
    params: {
      sort_by: sortby,
      page: page,
      api_key: process.env.REACT_APP_API_KEY
    }
  };

  return axios
    .get(url, configs)
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log('get_error:', error);
      return error;
    });
}
