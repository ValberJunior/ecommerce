import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWFmOWQzNmFmOGY1MTI1NWIwZTg3MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Mjc5MTA4OCwiZXhwIjoxNjQzMDUwMjg4fQ.H92sJuWQhBDjVccBVkdgQ0bqGRtidqWCAiPPan675Lc';

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{
        token: `Bearer ${TOKEN}`
    },
});