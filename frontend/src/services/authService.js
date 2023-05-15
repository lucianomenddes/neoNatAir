import axios from "axios";

const API_URL = "http://localhost:8080/";

const registerUser = (cpf, telefone, name, email, password, confPassword) => {
  return axios.post(API_URL + "register", {
    cpf,
    telefone,
    name,
    email,
    password,
    confPassword
  });
};

const login = async (username, password) => {
  const response = await axios
    .post(API_URL + "oauth/token", {
      username,
      password,
    });
  if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthserveceApi = {
  registerUser,
  login,
  logout,
  getCurrentUser
};

export default AuthserveceApi