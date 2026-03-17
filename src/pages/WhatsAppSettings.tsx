import { useState } from "react";
import { MessageSquare, CheckCircle2, AlertCircle, Save, Phone, Fingerprint, QrCode, RefreshCw, Smartphone, Globe, Shield } from "lucide-react";
import { cn } from "../lib/utils";

export default function WhatsAppSettings() {
  const [isConnected, setIsConnected] = useState(true);
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="space-y-8 animate-in slide-in-from-right duration-700 max-w-6xl pb-20">
      <header className="flex flex-col gap-2">
        <h1 className="text-4xl font-extrabold tracking-tight">Messaging Infrastructure</h1>
        <p className="text-muted-foreground italic flex items-center gap-2">
          <Globe size={16} /> Global WhatsApp API configuration & automated triggers.
        </p>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Connection Status Card */}
        <div className="xl:col-span-2 space-y-8">
          <div className="bg-card rounded-[2.5rem] border border-border overflow-hidden shadow-xl shadow-primary/5">
            <div className={cn(
              "px-10 py-8 flex items-center justify-between border-b border-border relative overflow-hidden",
              isConnected ? "bg-green-500/5" : "bg-destructive/5"
            )}>
              <div className="absolute top-0 right-0 p-8 opacity-10">
                 <MessageSquare size={120} />
              </div>
              <div className="flex items-center gap-6 z-10">
                <div className={cn(
                  "size-16 rounded-[1.5rem] flex items-center justify-center shadow-lg transition-all duration-500",
                  isConnected ? "bg-green-500 text-white shadow-green-500/20 rotate-3" : "bg-destructive text-white shadow-destructive/20 scale-110"
                )}>
                  <Smartphone size={32} />
                </div>
                <div>
                  <h3 className="font-black text-2xl tracking-tighter">Connection Engine</h3>
                  <div className="flex items-center gap-2 mt-1">
                     <span className={cn(
                       "size-2 rounded-full animate-pulse",
                       isConnected ? "bg-green-500" : "bg-destructive"
                     )} />
                     <p className={cn("text-sm font-bold", isConnected ? "text-green-600" : "text-destructive")}>
                       {isConnected ? "SYSTEM_ONLINE: Connected to Meta API v21.0" : "SYSTEM_OFFLINE: Connection Terminated"}
                     </p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsConnected(!isConnected)}
                className={cn(
                  "px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-md z-10",
                  isConnected ? "bg-muted text-foreground hover:bg-muted/80" : "bg-primary text-primary-foreground hover:opacity-90 shadow-primary/20"
                )}
              >
                {isConnected ? "Reset Cluster" : "Initiate Link"}
              </button>
            </div>

            <div className="p-10 space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2 px-1">
                    <Phone size={14} /> Business Endpoint
                  </label>
                  <div className="relative group">
                    <input 
                      type="text" 
                      defaultValue="+62 812-3456-7890"
                      className="w-full px-5 py-4 rounded-2xl bg-muted/30 border-2 border-border focus:border-primary focus:bg-background focus:outline-none transition-all font-bold text-lg"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                       <Shield size={18} className="text-primary" />
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2 px-1">
                    <Fingerprint size={14} /> Encrypted API Key
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
                    <h3 className="font-black text-xl tracking-tight">Active Automation Triggers</h3>
                    <span className="text-xs font-bold text-primary hover:underline cursor-pointer">Advanced Rules +</span>
                 </div>
                 <div className="grid grid-cols-1 gap-4">
                   {[
                     { name: 'Reservation Confirmation', desc: 'Sent instantly after booking', icon: CheckCircle2, status: 'Active' },
                     { name: 'Housekeeping Alert', desc: 'Triggered when room marked "Dirty"', icon: AlertCircle, status: 'Active' },
                     { name: 'Welcome Experience', desc: 'Personalized greeting on check-in', icon: Smartphone, status: 'Draft' }
                   ].map((item) => (
                     <div key={item.name} className="flex items-center justify-between p-6 bg-muted/20 rounded-[1.5rem] border border-border/50 hover:border-primary/40 hover:bg-muted/40 transition-all group">
                        <div className="flex items-center gap-4">
                          <div className="size-10 rounded-xl bg-card flex items-center justify-center text-primary shadow-sm">
                             <item.icon size={20} />
                          </div>
                          <div>
                            <p className="font-black text-sm">{item.name}</p>
                            <p className="text-xs text-muted-foreground font-medium italic">{item.desc}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                           <span className={cn(
                             "px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider",
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
                  <button className="px-10 py-4 bg-primary text-primary-foreground rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-primary/30 hover:opacity-90 active:scale-95 transition-all flex items-center gap-3">
                    <Save size={18} />
                    Commit Operations
                  </button>
              </div>
            </div>
          </div>
        </div>

        {/* Linking Wizard / QR Code Card */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-primary to-blue-600 p-8 rounded-[2.5rem] text-white shadow-2xl shadow-primary/20 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-10 opacity-10">
                <QrCode size={150} />
             </div>
             <div className="relative z-10">
               <h3 className="font-black text-2xl tracking-tight mb-2">Device Linking</h3>
               <p className="text-white/70 text-sm font-medium italic mb-8">Scan with your business mobile device to authorize API broadcast.</p>
               
               <div className="bg-white p-6 rounded-[2rem] shadow-inner mb-8 flex flex-col items-center">
                  <div className="size-48 bg-muted rounded-2xl flex items-center justify-center relative group cursor-pointer">
                     <QrCode size={120} className="text-foreground transition-transform group-hover:scale-90" />
                     <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-2xl transition-opacity">
                        <RefreshCw size={32} className="text-white animate-spin" />
                     </div>
                  </div>
                  <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest mt-6">Expires in 02:45</p>
               </div>

               <div className="space-y-4">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className={cn(
                      "flex items-center gap-4 p-3 rounded-2xl transition-all",
                      activeStep === step ? "bg-white/20 border border-white/20 shadow-lg" : "opacity-50"
                    )} onClick={() => setActiveStep(step)}>
                       <div className="size-8 rounded-xl bg-white text-primary flex items-center justify-center font-black">
                          {step}
                       </div>
                       <p className="text-xs font-black tracking-tight uppercase">
                          {step === 1 && "Prepare Device"}
                          {step === 2 && "Scan Identifier"}
                          {step === 3 && "Finalize Node"}
                       </p>
                    </div>
                  ))}
               </div>
             </div>
          </div>

          <div className="bg-card p-8 rounded-[2rem] border border-border shadow-sm">
             <h4 className="font-black text-sm uppercase tracking-widest text-muted-foreground mb-4 px-1">Last Deployments</h4>
             <div className="space-y-4">
                {['London Node', 'Jakarta Hub', 'Dev Test'].map((node) => (
                  <div key={node} className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <div className="size-1.5 rounded-full bg-green-500" />
                        <span className="text-xs font-bold">{node}</span>
                     </div>
                     <span className="text-[10px] text-muted-foreground font-medium italic">Active</span>
                  </div>
                ))}
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
