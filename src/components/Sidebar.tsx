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
          <div className="size-12 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-2xl shadow-xl shadow-primary/30 rotate-3">
            S
          </div>
          <div>
            <h1 className="font-bold text-xl leading-tight tracking-tighter">SGA Admin</h1>
            <p className="text-[10px] uppercase font-semibold text-primary tracking-widest mt-0.5">Control Center</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1.5 mt-4">
        <p className="px-4 text-[10px] font-bold uppercase text-muted-foreground/50 tracking-[0.2em] mb-4">Main Navigation</p>
        {mainMenus.map((item) => {
          const Icon = item.icon;
          const isActive = activeMenu === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-300 group relative text-left",
                isActive
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              {isActive && (
                <div className="absolute left-0 w-1 h-6 bg-white rounded-full ml-1" />
              )}
              <Icon className={cn("size-5 transition-transform duration-300", isActive ? "scale-110" : "group-hover:scale-110")} />
              <span className="font-semibold text-sm">{item.label}</span>
            </button>
          );
        })}

        <div className="pt-8 space-y-1.5">
           <p className="px-4 text-[10px] font-bold uppercase text-muted-foreground/50 tracking-[0.2em] mb-4">System</p>
           {systemMenus.map((item) => {
             const Icon = item.icon;
             const isActive = activeMenu === item.id;
             return (
               <button 
                 key={item.id} 
                 onClick={() => onNavigate(item.id)}
                 className={cn(
                   "w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-300 group relative text-left",
                   isActive
                     ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                     : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                 )}
               >
                 <Icon size={20} className={cn("size-5 transition-transform duration-300", isActive ? "scale-110" : "group-hover:scale-110")} />
                 <span className="font-semibold text-sm">{item.label}</span>
               </button>
             );
           })}
        </div>
      </nav>

      <div className="mt-auto p-4 border-t border-border bg-muted/20">
        <div className="flex items-center gap-3 p-3 bg-card rounded-2xl border border-border/50 shadow-sm mb-4">
           <div className="size-10 rounded-xl bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center text-white font-bold border-2 border-white/20">
             <User size={20} />
           </div>
           <div className="flex-1 min-w-0">
             <p className="text-xs font-bold truncate">{user?.name || "Super Admin"}</p>
             <p className="text-[10px] text-muted-foreground truncate font-medium">{user?.email}</p>
           </div>
        </div>
        <button
          onClick={logout}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-destructive font-bold text-xs uppercase tracking-widest hover:bg-destructive/10 transition-all duration-200 border border-transparent hover:border-destructive/20"
        >
          <LogOut className="size-4" />
          Terminate Session
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
