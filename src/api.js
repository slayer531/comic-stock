import axios from 'axios';

const api = axios.create({
                        baseURL: 'http://frontendshowcase.azurewebsites.net/api/',
                        timeout: 1000,
                        headers: {'X-Custom-Header': 'foobar'}
                        });

export default api                        