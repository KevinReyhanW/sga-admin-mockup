import { useState } from "react";
import { MessageSquare, CheckCircle2, AlertCircle, Save, Phone, Fingerprint, RefreshCw, Smartphone, Globe, Shield } from "lucide-react";
import { cn } from "../lib/utils";

export default function WhatsAppSettings() {
  const [isConnected, setIsConnected] = useState(true);

  return (
    <div className="space-y-8 animate-in slide-in-from-right duration-700 max-w-6xl pb-20">
      <header className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-tight">Messaging Infrastructure</h1>
        <p className="text-muted-foreground italic flex items-center gap-2">
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
                  "size-16 rounded-[1.5rem] flex items-center justify-center shadow-lg transition-all duration-500",
                  isConnected ? "bg-green-500 text-white shadow-green-500/20 rotate-3" : "bg-destructive text-white shadow-destructive/20 scale-110"
                )}>
                  <Smartphone size={32} />
                </div>
                <div>
                  <h3 className="font-bold text-2xl tracking-tighter">Connection Engine</h3>
                  <div className="flex items-center gap-2 mt-1">
                     <span className={cn(
                       "size-2 rounded-full animate-pulse",
                       isConnected ? "bg-green-500" : "bg-destructive"
                     )} />
                     <p className={cn("text-sm font-semibold", isConnected ? "text-green-600" : "text-destructive")}>
                       {isConnected ? "SYSTEM_ONLINE: Connected to Meta API v21.0" : "SYSTEM_OFFLINE: Connection Terminated"}
                     </p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsConnected(!isConnected)}
                className={cn(
                  "px-6 py-3 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all shadow-md z-10",
                  isConnected ? "bg-muted text-foreground hover:bg-muted/80" : "bg-primary text-primary-foreground hover:opacity-90 shadow-primary/20"
                )}
              >
                {isConnected ? "Reset Cluster" : "Initiate Link"}
              </button>
            </div>

            <div className="p-10 space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2 px-1">
                    <Phone size={14} /> Business Endpoint
                  </label>
                  <div className="relative group">
                    <input 
                      type="text" 
                      defaultValue="+62 812-3456-7890"
                      className="w-full px-5 py-4 rounded-2xl bg-muted/30 border-2 border-border focus:border-primary focus:bg-background focus:outline-none transition-all font-semibold text-lg"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                       <Shield size={18} className="text-primary/40" />
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2 px-1">
                    <Fingerprint size={14} /> API Access Key
                  </label>
                  <input 
                    type="password" 
                    defaultValue="sk-xxxxxxxxxxxxxxxxxxxx"
                    className="w-full px-5 py-4 rounded-2xl bg-muted/30 border-2 border-border focus:border-primary focus:bg-background focus:outline-none transition-all font-mono"
                  />
                </div>
              </div>

              <div className="space-y-6">
                 <div className="flex items-center justify-between">
                    <h3 className="font-bold text-xl tracking-tight">Active Automation Triggers</h3>
                    <span className="text-xs font-semibold text-primary hover:underline cursor-pointer">Edit Rules</span>
                 </div>
                 <div className="grid grid-cols-1 gap-4">
                   {[
                     { name: 'Reservation Confirmation', desc: 'Sent after successful booking', icon: CheckCircle2, status: 'Active' },
                     { name: 'Housekeeping Alert', desc: 'Triggered upon room status change', icon: AlertCircle, status: 'Active' },
                     { name: 'Welcome Experience', desc: 'Personalized check-in greeting', icon: Smartphone, status: 'Draft' }
                   ].map((item) => (
                     <div key={item.name} className="flex items-center justify-between p-6 bg-muted/20 rounded-[1.5rem] border border-border/50 hover:border-primary/40 hover:bg-background transition-all group">
                        <div className="flex items-center gap-4">
                          <div className="size-10 rounded-xl bg-card flex items-center justify-center text-primary shadow-sm">
                             <item.icon size={20} />
                          </div>
                          <div>
                            <p className="font-bold text-sm">{item.name}</p>
                            <p className="text-xs text-muted-foreground font-medium italic">{item.desc}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                           <span className={cn(
                             "px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider",
                             item.status === 'Active' ? "bg-green-500/10 text-green-600" : "bg-yellow-500/10 text-yellow-600"
                           )}>{item.status}</span>
                           <button className="text-muted-foreground hover:text-primary transition-colors">
                             <RefreshCw size={16} />
                           </button>
                        </div>
                     </div>
                   ))}
                 </div>
              </div>

              <div className="flex justify-end gap-4 pt-6">
                  <button className="px-10 py-4 bg-primary text-primary-foreground rounded-2xl font-bold text-xs uppercase tracking-widest shadow-2xl shadow-primary/30 hover:opacity-90 active:scale-95 transition-all flex items-center gap-3">
                    <Save size={18} />
                    Save Configurations
                  </button>
              </div>
            </div>
          </div>
        </div>

        {/* Device Linking (HIDDEN as per user request) */}
        {/*
        <div className="bg-muted p-8 rounded-[2.5rem] border border-border border-dashed flex flex-col items-center justify-center text-center opacity-50">
           <QrCode size={48} className="text-muted-foreground mb-4" />
           <p className="font-bold text-lg">Device Linking Disabled</p>
           <p className="text-sm text-muted-foreground italic">Contact system administrator to authorize new devices.</p>
        </div>
        */}

      </div>
    </div>
  );
}
