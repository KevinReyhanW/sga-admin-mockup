import React from "react";
import { LayoutDashboard, MessageSquareText, LogOut, User, Settings, HelpCircle, BedDouble } from "lucide-react";
import { cn } from "../lib/utils";
import { useAuthStore } from "../store/auth.store";

interface SidebarProps {
  activeMenu: string;
  onNavigate: (menu: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeMenu, onNavigate }) => {
  const { user, logout } = useAuthStore();

  const mainMenus = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "rooms", label: "Rooms Management", icon: BedDouble },
    { id: "whatsapp", label: "WhatsApp Settings", icon: MessageSquareText },
  ];

  const systemMenus = [
    { id: "settings", label: "Settings", icon: Settings },
    { id: "help", label: "Help & Docs", icon: HelpCircle },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-72 bg-card border-r border-border flex flex-col z-50 shadow-2xl shadow-primary/5">
      <div className="p-8">
        <div className="flex items-center gap-4">
          <div className="size-12 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground font-semibold text-2xl shadow-xl shadow-primary/30 rotate-3">
            S
          </div>
          <div>
            <h1 className="font-bold text-xl leading-tight tracking-tighter">SGA Admin</h1>
            <p className="text-[10px] uppercase font-bold text-primary tracking-[0.2em] mt-0.5">Control Center</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1.5 mt-4">
        <p className="px-4 text-[10px] font-bold uppercase text-muted-foreground/40 tracking-[0.25em] mb-4">Main Navigation</p>
        {mainMenus.map((item) => {
          const Icon = item.icon;
          const isActive = activeMenu === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-300 group relative text-left outline-none",
                isActive
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "text-muted-foreground hover:bg-muted/40 hover:text-foreground"
              )}
            >
              <Icon className={cn("size-5 transition-transform duration-300", isActive ? "scale-105" : "group-hover:scale-110 opacity-70")} />
              <span className="font-medium text-sm tracking-tight">{item.label}</span>
            </button>
          );
        })}

        <div className="pt-8 space-y-1.5">
           <p className="px-4 text-[10px] font-bold uppercase text-muted-foreground/40 tracking-[0.25em] mb-4">System</p>
           {systemMenus.map((item) => {
             const Icon = item.icon;
             const isActive = activeMenu === item.id;
             return (
               <button 
                 key={item.id} 
                 onClick={() => onNavigate(item.id)}
                 className={cn(
                   "w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-300 group relative text-left outline-none",
                   isActive
                     ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                     : "text-muted-foreground hover:bg-muted/40 hover:text-foreground"
                 )}
               >
                 <Icon className={cn("size-5 transition-transform duration-300", isActive ? "scale-105" : "group-hover:scale-110 opacity-70")} />
                 <span className="font-medium text-sm tracking-tight">{item.label}</span>
               </button>
             );
           })}
        </div>
      </nav>

      <div className="mt-auto p-4 border-t border-border bg-muted/5">
        <div className="flex items-center gap-3 p-3 bg-card rounded-2xl border border-border/40 shadow-sm mb-4">
           <div className="size-10 rounded-xl bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center text-white font-semibold border-2 border-white/20">
             <User size={18} />
           </div>
           <div className="flex-1 min-w-0">
             <p className="text-xs font-semibold truncate tracking-tight">{user?.name || "Super Admin"}</p>
             <p className="text-[10px] text-muted-foreground truncate font-medium opacity-70 italic">{user?.email}</p>
           </div>
        </div>
        <button
          onClick={logout}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-destructive font-bold text-[10px] uppercase tracking-[0.15em] hover:bg-destructive/10 transition-all duration-200 border border-transparent hover:border-destructive/20"
        >
          <LogOut size={14} />
          End Session
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
