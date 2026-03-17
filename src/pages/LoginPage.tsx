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
            <div className="size-20 rounded-3xl bg-primary/5 flex items-center justify-center text-primary mb-6 shadow-inner ring-1 ring-primary/10">
               <ShieldCheck size={40} className="opacity-80" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground italic">SGA Super Admin</h1>
            <p className="text-muted-foreground mt-2 font-medium italic opacity-70">Strategic Gateway Access Management</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground px-1 opacity-60">Organization Email</label>
              <div className="relative group">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground/50 group-focus-within:text-primary transition-colors">
                  <User size={20} />
                </div>
                <input
                  type="email"
                  required
                  className="w-full bg-muted/10 border-2 border-border focus:border-primary/30 focus:bg-background rounded-2xl py-4 pl-14 pr-6 outline-none transition-all font-semibold tracking-tight"
                  placeholder="admin@organization.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2 opacity-50 cursor-not-allowed">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground px-1">Access Token (Mock)</label>
              <div className="relative">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground/30">
                  <Lock size={20} />
                </div>
                <input
                  type="password"
                  disabled
                  className="w-full bg-muted/5 border-2 border-border rounded-2xl py-4 pl-14 pr-6 outline-none font-mono text-sm tracking-tighter"
                  placeholder="••••••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground rounded-2xl py-4 font-bold text-xs uppercase tracking-[0.2em] shadow-xl shadow-primary/20 hover:opacity-95 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-8"
            >
              Enter Console
              <ArrowRight size={18} />
            </button>
          </form>

          <div className="mt-12 text-center text-[10px] text-muted-foreground border-t border-border pt-8 font-medium italic opacity-60 tracking-wider">
             <p>&copy; 2026 MTA Hotel Group. Secured Access Protocol.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
