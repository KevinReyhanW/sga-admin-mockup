import { useState } from "react";
import { 
  Plus, Search, Filter, MoreVertical, 
  CheckCircle2, Clock, AlertCircle, 
  MapPin, ArrowUpDown
} from "lucide-react";
import { cn } from "../lib/utils";

const mockRooms = [
  { id: "101", category: "Deluxe Ocean", status: "Ready", guest: "John Smith", checkout: "Today", cleanStatus: "Cleaned" },
  { id: "102", category: "Standard City", status: "Occupied", guest: "Maria Garcia", checkout: "18 Mar", cleanStatus: "Touch-up" },
  { id: "103", category: "Executive Suite", status: "Maintenance", guest: "-", checkout: "-", cleanStatus: "Dirty" },
  { id: "201", category: "Deluxe Ocean", status: "Ready", guest: "Ali Rahardjo", checkout: "20 Mar", cleanStatus: "Cleaned" },
  { id: "202", category: "Standard City", status: "Out of Order", guest: "-", checkout: "-", cleanStatus: "Dirty" },
  { id: "PH-1", category: "Penthouse", status: "Occupied", guest: "Global Tech Group", checkout: "22 Mar", cleanStatus: "Dirty" },
];

export default function Rooms() {
  const [searchTerm, setSearchTerm] = useState("");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ready": return "bg-green-500/10 text-green-600 border-green-200";
      case "Occupied": return "bg-blue-500/10 text-blue-600 border-blue-200";
      case "Maintenance":
      case "Out of Order": return "bg-red-500/10 text-red-600 border-red-200";
      default: return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-10">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Rooms Inventory</h1>
          <p className="text-muted-foreground mt-1 flex items-center gap-2 italic">
            Manage your room states and guest assignments
          </p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-2xl font-semibold shadow-lg shadow-primary/20 hover:opacity-90 transition-all">
          <Plus size={18} /> Add New Room
        </button>
      </header>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <input 
            type="text" 
            placeholder="Search by room number, guest, or category..." 
            className="w-full pl-12 pr-6 py-3.5 bg-card border border-border rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none font-medium text-sm transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
           <button className="flex items-center gap-2 px-5 py-3 bg-card border border-border rounded-xl text-sm font-semibold hover:bg-muted transition-colors">
             <Filter size={16} /> Filters
           </button>
           <button className="flex items-center gap-2 px-5 py-3 bg-card border border-border rounded-xl text-sm font-semibold hover:bg-muted transition-colors">
             <ArrowUpDown size={16} /> Sort
           </button>
        </div>
      </div>

      {/* Rooms Table */}
      <div className="bg-card rounded-[2.5rem] border border-border shadow-sm overflow-hidden overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-muted/30 border-b border-border text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              <th className="px-8 py-5">Room</th>
              <th className="px-6 py-5">Category</th>
              <th className="px-6 py-5">Status</th>
              <th className="px-6 py-5">Guest</th>
              <th className="px-6 py-5">Checkout</th>
              <th className="px-6 py-5">Cleaning</th>
              <th className="px-8 py-5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {mockRooms.map((room) => (
              <tr key={room.id} className="hover:bg-muted/10 transition-colors group">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold shadow-sm">
                      {room.id}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-6">
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm">{room.category}</span>
                    <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                      <MapPin size={10} /> Floor {room.id.startsWith("PH") ? "Roof" : room.id[0]}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-6">
                  <span className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-bold border",
                    getStatusColor(room.status)
                  )}>
                    {room.status}
                  </span>
                </td>
                <td className="px-6 py-6">
                  <span className="text-sm font-medium">{room.guest}</span>
                </td>
                <td className="px-6 py-6">
                  <span className="text-sm font-medium text-muted-foreground">{room.checkout}</span>
                </td>
                <td className="px-6 py-6">
                  <div className="flex items-center gap-2">
                    {room.cleanStatus === "Cleaned" ? (
                      <CheckCircle2 className="text-green-500" size={14} />
                    ) : room.cleanStatus === "Touch-up" ? (
                      <Clock className="text-blue-500" size={14} />
                    ) : (
                      <AlertCircle className="text-amber-500" size={14} />
                    )}
                    <span className="text-xs font-medium">{room.cleanStatus}</span>
                  </div>
                </td>
                <td className="px-8 py-6 text-right">
                  <button className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground">
                    <MoreVertical size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="bg-card p-8 rounded-[2rem] border border-border shadow-sm flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Inventory Summary</h4>
            <div className="flex items-end justify-between">
               <div>
                  <p className="text-3xl font-bold">45 / 100</p>
                  <p className="text-xs text-muted-foreground font-medium italic mt-1">Rooms currently ready</p>
               </div>
               <div className="size-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-600">
                  <CheckCircle2 />
               </div>
            </div>
         </div>
         <div className="bg-card p-8 rounded-[2rem] border border-border shadow-sm flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Cleaning Queue</h4>
            <div className="flex items-end justify-between">
               <div>
                  <p className="text-3xl font-bold">12 Rooms</p>
                  <p className="text-xs text-muted-foreground font-medium italic mt-1">Requiring immediate attention</p>
               </div>
               <div className="size-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600">
                  <AlertCircle />
               </div>
            </div>
         </div>
         <div className="bg-card p-8 rounded-[2rem] border border-border shadow-sm flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Category Performance</h4>
            <div className="space-y-2">
               <div className="flex justify-between text-[10px] font-bold">
                  <span>Executive Suites</span>
                  <span className="text-primary">95% Occupied</span>
               </div>
               <div className="h-1.5 w-full bg-muted rounded-full">
                  <div className="h-full bg-primary rounded-full" style={{width: '95%'}} />
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
