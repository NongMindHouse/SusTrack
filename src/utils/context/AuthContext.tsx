import { createContext } from "react";

export interface AuthContextValue {
  id: string;
  email: string;
  isAuthenticated: boolean;
}

export const initialContextValue: AuthContextValue = {
  id: "",
  email: "",
  isAuthenticated: false,
};

interface IAuthContextType {
  authContext: AuthContextValue;
  setAuthContext: (value: AuthContextValue) => void;
}

export const AuthContext = createContext<IAuthContextType | null>(null);
