import React, { useState } from "react";
import { useAuthStore } from "../store/auth.store";
import { LogIn, Hotel } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const login = useAuthStore((state) => state.login);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) login(email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="w-full max-w-md space-y-8 bg-card p-8 rounded-3xl border border-border shadow-2xl shadow-primary/5">
        <div className="text-center space-y-4">
          <div className="size-16 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground mx-auto shadow-lg shadow-primary/20 animate-bounce">
            <Hotel size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">Welcome Back</h1>
            <p className="text-muted-foreground mt-2">Sign in to your organization admin account</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 mt-8">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium px-1">Organization Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@hotel.com"
              required
              className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-primary/30"
          >
            <LogIn size={20} />
            Continue to Dashboard
          </button>
        </form>

        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            Protected by MTA SGA System security
          </p>
        </div>
      </div>
    </div>
  );
}
