import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext({ user: null, loading: true, logout: async () => {}, refetchUser: async () => {} });

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchMe = useCallback(async () => {
    try {
      const { data } = await axios.get("/user/me", { withCredentials: true });
      setUser(data);
    } catch (err) {
      // Not logged in — this is a normal, expected state on public pages,
      // not an error worth surfacing to the user.
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMe();
  }, [fetchMe]);

  const logout = async () => {
    try {
      await axios.get("/user/logout", { withCredentials: true });
    } finally {
      // Clear local state regardless of whether the request succeeded —
      // if the cookie's already gone or the request fails, staying logged
      // in on the client while the server thinks otherwise is worse.
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout, refetchUser: fetchMe }}>
      {children}
    </AuthContext.Provider>
  );
}

// Usage: const { user, loading, logout, refetchUser } = useAuth();
// `user` is null both while loading and when logged out — check `loading`
// if you need to distinguish "still checking" from "definitely logged out".
// Call refetchUser() right after a successful login so the rest of the app
// (navbar, profile icon, etc.) reflects the new session immediately, without
// waiting for a full page reload.
export function useAuth() {
  return useContext(AuthContext);
}