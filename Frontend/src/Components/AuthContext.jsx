import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext({ user: null, loading: true });

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMe = async () => {
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
    };

    fetchMe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

// Usage: const { user, loading } = useAuth();
// `user` is null both while loading and when logged out — check `loading`
// if you need to distinguish "still checking" from "definitely logged out".
export function useAuth() {
  return useContext(AuthContext);
}