import axios from 'axios';
import qs from 'qs';
const basePath = '/myService/';

axios.interceptors.request.use(function (config) {
  config.headers.token = window._token || '';
  return config;
}, function (error) {
  return Promise.reject(error);
});

function makeUrl(url) {
  if (url.startsWith('/') || url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  } else {
    return `${basePath}${url}`;
  }
}
const Http = {
  get (url, query, options) {
    let queryString = '';
    if (query) {
      query.timestamp = new Date().getTime();
      queryString = qs.stringify(query);
    } else {
      queryString = qs.stringify({timestamp: new Date().getTime()});
    }
    return axios.get(makeUrl(url + (queryString ? '?' + queryString : ''))).then(data => data.data);
  },

  getRaw (url, query, options) {
    let queryString = '';
    if (query) {
      query.timestamp = new Date().getTime();
      queryString = qs.stringify(query);
    } else {
      queryString = qs.stringify({timestamp: new Date().getTime()});
    }
    return axios.get(makeUrl(url + (queryString ? '?' + queryString : '')));
  },

  post (url, param, options) {
    return axios.post(makeUrl(url), qs.stringify(param), options).then(data => data.data);
  },

  postRaw (url, param, options) {
    return axios.post(makeUrl(url), qs.stringify(param), options);
  },

  postJSON (url, param, options) {
    return axios.post(makeUrl(url), param, options).then(data => data.data);
  },

  postJSONRaw (url, param, options) {
    return axios.post(makeUrl(url), param, options);
  },

  delete (url, options) {
    return axios.delete(makeUrl(url), options).then(data => data.data);
  },

  deleteRaw (url, options) {
    return axios.delete(makeUrl(url), options);
  },

  jsonp (url, options) {
    return axios.jsonp(makeUrl(url), options);
  },
  generateUrl (url) {
    return makeUrl(url);
  }
};

export default Http;
