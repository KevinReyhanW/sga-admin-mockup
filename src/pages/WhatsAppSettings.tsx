import { useState } from "react";
import { 
  CheckCircle2, AlertCircle, Save, Phone, 
  Fingerprint, RefreshCw, Smartphone, Globe, Shield 
} from "lucide-react";
import { cn } from "../lib/utils";

export default function WhatsAppSettings() {
  const [isConnected, setIsConnected] = useState(true);

  return (
    <div className="space-y-8 animate-in slide-in-from-right duration-700 max-w-6xl pb-20">
      <header className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-tight">Messaging Infrastructure</h1>
        <p className="text-muted-foreground italic flex items-center gap-2 font-medium">
          <Globe size={16} /> Global WhatsApp API configuration & automated triggers.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8">
        
        {/* Connection Status Card */}
        <div className="space-y-8">
          <div className="bg-card rounded-[2.5rem] border border-border overflow-hidden shadow-xl shadow-primary/5">
            <div className={cn(
              "px-10 py-8 flex items-center justify-between border-b border-border relative overflow-hidden",
              isConnected ? "bg-green-500/5" : "bg-destructive/5"
            )}>
              <div className="flex items-center gap-6 z-10">
                <div className={cn(
                  "size-16 rounded-[1.5rem] flex items-center justify-center shadow-lg transition-all duration-500 transition-shadow",
                  isConnected ? "bg-green-500 text-white shadow-green-500/20 rotate-3" : "bg-destructive text-white shadow-destructive/20 scale-110"
                )}>
                  <Smartphone size={32} />
                </div>
                <div>
                  <h3 className="font-bold text-2xl tracking-tighter italic">Connection Engine</h3>
                  <div className="flex items-center gap-2 mt-1">
                     <span className={cn(
                       "size-2 rounded-full animate-pulse",
                       isConnected ? "bg-green-500" : "bg-destructive"
                     )} />
                     <p className={cn("text-sm font-semibold tracking-tight uppercase", isConnected ? "text-green-600" : "text-destructive")}>
                       {isConnected ? "SYSTEM_ONLINE: Connected to Meta API v21.0" : "SYSTEM_OFFLINE: Connection Terminated"}
                     </p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsConnected(!isConnected)}
                className={cn(
                  "px-6 py-3 rounded-2xl font-bold text-[10px] uppercase tracking-[0.15em] transition-all shadow-md z-10 outline-none active:scale-95",
                  isConnected ? "bg-muted text-foreground hover:bg-muted/60" : "bg-primary text-primary-foreground hover:opacity-90 shadow-primary/20"
                )}
              >
                {isConnected ? "Reset Cluster" : "Initiate Link"}
              </button>
            </div>

            <div className="p-10 space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2 px-1 opacity-60">
                    <Phone size={14} /> Business Endpoint
                  </label>
                  <div className="relative group">
                    <input 
                      type="text" 
                      defaultValue="+62 812-3456-7890"
                      className="w-full px-5 py-4 rounded-2xl bg-muted/10 border-2 border-border focus:border-primary/40 focus:bg-background focus:outline-none transition-all font-semibold text-lg tracking-tight"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                       <Shield size={18} className="text-primary/20" />
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2 px-1 opacity-60">
                    <Fingerprint size={14} /> API Access Key
                  </label>
                  <input 
                    type="password" 
                    defaultValue="sk-xxxxxxxxxxxxxxxxxxxx"
                    className="w-full px-5 py-4 rounded-2xl bg-muted/10 border-2 border-border focus:border-primary/40 focus:bg-background focus:outline-none transition-all font-mono text-sm opacity-80"
                  />
                </div>
              </div>

              <div className="space-y-6">
                 <div className="flex items-center justify-between px-2">
                    <h3 className="font-semibold text-xl tracking-tight">Active Automation Triggers</h3>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary hover:opacity-80 cursor-pointer">Edit Rules</span>
                 </div>
                 <div className="grid grid-cols-1 gap-4">
                   {[
                     { name: 'Reservation Confirmation', desc: 'Sent after successful booking', icon: CheckCircle2, status: 'Active' },
                     { name: 'Housekeeping Alert', desc: 'Triggered upon room status change', icon: AlertCircle, status: 'Active' },
                     { name: 'Welcome Experience', desc: 'Personalized check-in greeting', icon: Smartphone, status: 'Draft' }
                   ].map((item) => (
                     <div key={item.name} className="flex items-center justify-between p-6 bg-muted/5 rounded-[1.5rem] border border-border/40 hover:border-primary/20 hover:bg-background transition-all group">
                        <div className="flex items-center gap-4">
                          <div className="size-10 rounded-xl bg-card flex items-center justify-center text-primary/60 shadow-sm ring-1 ring-border/50">
                             <item.icon size={20} />
                          </div>
                          <div>
                            <p className="font-semibold text-sm tracking-tight">{item.name}</p>
                            <p className="text-[11px] text-muted-foreground font-medium italic opacity-70 mt-0.5">{item.desc}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                           <span className={cn(
                             "px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-[0.1em] ring-1",
                             item.status === 'Active' ? "bg-green-500/5 text-green-600 ring-green-600/10" : "bg-yellow-500/5 text-yellow-600 ring-yellow-600/10"
                           )}>{item.status}</span>
                           <button className="text-muted-foreground/40 hover:text-primary transition-colors outline-none active:rotate-180 duration-500">
                             <RefreshCw size={16} />
                           </button>
                        </div>
                     </div>
                   ))}
                 </div>
              </div>

              <div className="flex justify-end gap-4 pt-6">
                  <button className="px-10 py-4 bg-primary text-primary-foreground rounded-2xl font-bold text-[10px] uppercase tracking-[0.2em] shadow-2xl shadow-primary/20 hover:opacity-95 active:scale-95 transition-all flex items-center gap-3">
                    <Save size={18} />
                    Deploy Configurations
                  </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
