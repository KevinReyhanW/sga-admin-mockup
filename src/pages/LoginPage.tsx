import React, { useState } from "react";
import { useAuthStore } from "../store/auth.store";
import { User, Lock, ArrowRight, ShieldCheck } from "lucide-react";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const { login } = useAuthStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="w-full max-w-lg">
        <div className="bg-card p-10 md:p-14 rounded-[3rem] border border-border shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-blue-500" />
          
          <div className="flex flex-col items-center text-center mb-10">
            <div className="size-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mb-6 shadow-inner">
               <ShieldCheck size={40} />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground">SGA Super Admin</h1>
            <p className="text-muted-foreground mt-2 font-medium italic">Strategic Gateway Access Management</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground px-1">Organization Email</label>
              <div className="relative group">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
                  <User size={20} />
                </div>
                <input
                  type="email"
                  required
                  className="w-full bg-muted/30 border-2 border-border focus:border-primary focus:bg-background rounded-2xl py-4 pl-14 pr-6 outline-none transition-all font-semibold"
                  placeholder="admin@organization.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2 opacity-50 cursor-not-allowed">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground px-1">Access Token (Mock)</label>
              <div className="relative">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Lock size={20} />
                </div>
                <input
                  type="password"
                  disabled
                  className="w-full bg-muted/20 border-2 border-border rounded-2xl py-4 pl-14 pr-6 outline-none font-mono"
                  placeholder="••••••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground rounded-2xl py-4 font-bold text-sm uppercase tracking-widest shadow-xl shadow-primary/20 hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-8"
            >
              Continue to Dashboard
              <ArrowRight size={18} />
            </button>
          </form>

          <div className="mt-12 text-center text-xs text-muted-foreground border-t border-border pt-8 font-medium">
             <p>&copy; 2026 MTA Hotel Group. Secured Access Protocol.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
