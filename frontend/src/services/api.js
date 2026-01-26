import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth';

// --- SIGNUP FUNCTIONS (OTP FLOW) ---

// 1. Send OTP
export const sendOtp = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/send-otp`, { email });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

// 2. Verify OTP & Register
export const verifyAndRegister = async (email, otp, userDto) => {
  try {
    const response = await axios.post(`${API_URL}/verify-register`, { email, otp, userDto });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

// --- LOGIN FUNCTION (RESTORED) ---

// 3. Login
export const loginUser = async (loginData) => {
  try {
    const response = await axios.post(`${API_URL}/signin`, loginData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};


export const joinClassroom = async (classCode, studentEmail) => {
  const response = await axios.post(`${API_URL}/classrooms/join`, {
    classCode,
    studentEmail
  });
  return response.data;
};