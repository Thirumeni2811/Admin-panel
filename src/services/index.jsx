const BASE_URL = "https://attendence-api-e4oc.onrender.com/v1"

//Default config
const token = sessionStorage.getItem('token');
export const CONFIG = {
    headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
    },
};

//Login config
export const LOGIN_CONFIG = {
    headers: {
        "Content-Type": "application/json",
    },
};

//Login
export const LOGIN = `${BASE_URL}/auth/login`
export const REFRESH_Token = `${BASE_URL}/auth/refresh-tokens`

//Organisation
export const GET_ORGANISATION = `${BASE_URL}/organisation`

//Designation
export const GET_DESIGNATION = `${BASE_URL}/designation`
export const CREATE_DESIGNATION = `${BASE_URL}/designation`
export const UPDATE_DESIGNATION = (destId) => `${BASE_URL}/designation/${destId}`
export const DELETE_DESIGNATION = (destId) => `${BASE_URL}/designation/${destId}`