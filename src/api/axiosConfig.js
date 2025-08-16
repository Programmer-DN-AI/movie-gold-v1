import axios from 'axios';

export default axios.create({
    baseURL:'  https://ef68661c7e1a.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});