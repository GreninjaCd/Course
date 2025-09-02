// src/api.js

import { useNavigate } from "react-router-dom";

const API_BASE = 'http://localhost:5000';

// ---- AUTH API CALLS ----
export const registerUser = async ({ userName, email, password, role }) => {
  try {
    console.log(email, password, role);
    const response = await fetch(`${API_BASE}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userName, email, password, role }),
    });
    return await response.json();
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    console.log(email, password);
    const response = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userEmail: email, password }),
    });
    return await response.json();
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const checkAuth = async (token) => {
  try {
    const response = await fetch(`${API_BASE}/auth/check-auth`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return await response.json();
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const logout = () => {
  localStorage.clear();
window.location.reload();
}