import { create } from "zustand";

interface User {
  id: string;
  name: string;
  email: string;
  role: "super-admin";
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (email) => {
    // Mock login logic
    const mockUser: User = {
      id: "1",
      name: "Admin SGA",
      email: email,
      role: "super-admin",
    };
    set({ user: mockUser, isAuthenticated: true });
  },
  logout: () => set({ user: null, isAuthenticated: false }),
}));
