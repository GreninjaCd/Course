import React, { createContext, useContext } from 'react';
import { create } from 'zustand';

const useAuthStore = create((set) => ({
    user: null,
    setUser: (userData) => set({ user: userData }),
}));

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const store = useAuthStore();
    return (
        <AuthContext.Provider value={store}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);