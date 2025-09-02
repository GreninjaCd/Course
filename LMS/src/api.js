// src/api.js

const API_BASE = 'http://localhost:5000'; 
// ---- AUTH API CALLS ----
export const registerUser = async ({ email, password, role }) => {
  try {
    const response = await fetch(`${API_BASE}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, role }),
    });
    return await response.json();
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const response = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
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


export const fetchCourses = async () => {
  try {
    const response = await fetch(`${API_BASE}/api/courses`);
    return await response.json();
  } catch (error) {
    return { success: false, message: error.message };
  }
};

// Add more API calls for adding/editing/deleting courses, enrolling, etc. as needed

