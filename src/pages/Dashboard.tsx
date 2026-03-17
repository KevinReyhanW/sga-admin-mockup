import { useState } from "react";
import { 
  Users, UserCheck, BedDouble, TrendingUp, 
  DollarSign, Star, UserPlus, FileText,
  BarChart, Download, Filter, Search, Award, 
  Clock, Activity, Sparkles, ShieldCheck
} from "lucide-react";
import { cn } from "../lib/utils";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, BarChart as ReBarChart, Bar,
  PieChart as RePieChart, Pie, Cell, Line
} from 'recharts';

const trendData = [
  { name: 'Mon', bookings: 40, revenue: 4000, occupancy: 65 },
  { name: 'Tue', bookings: 30, revenue: 3200, occupancy: 60 },
  { name: 'Wed', bookings: 60, revenue: 6500, occupancy: 85 },
  { name: 'Thu', bookings: 80, revenue: 8200, occupancy: 90 },
  { name: 'Fri', bookings: 50, revenue: 5400, occupancy: 75 },
  { name: 'Sat', bookings: 90, revenue: 10500, occupancy: 95 },
  { name: 'Sun', bookings: 110, revenue: 12500, occupancy: 98 },
];

const roomStatusData = [
  { name: 'Ready', value: 45, fill: 'var(--success)' },
  { name: 'Occupied', value: 35, fill: 'var(--primary)' },
  { name: 'Dirty', value: 12, fill: 'var(--warning)' },
  { name: 'Maintenance', value: 8, fill: 'var(--destructive)' },
];

const staffList = [
  { id: 1, name: "Aris Nugraha", dept: "Front Desk", role: "Manager", status: "Active", rating: "4.9", avatar: "A" },
  { id: 2, name: "Siti Aminah", dept: "Housekeeping", role: "Supervisor", status: "Active", rating: "4.8", avatar: "S" },
  { id: 3, name: "Budi Santoso", dept: "Maintenance", role: "Technician", status: "On Break", rating: "4.7", avatar: "B" },
  { id: 4, name: "Dewi Lestari", dept: "F&B", role: "Service", status: "Active", rating: "5.0", avatar: "D" },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-10">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Management Insights</h1>
          <p className="text-muted-foreground mt-1 flex items-center gap-2 italic font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Live operational data for MTA Hotel Group
          </p>
        </div>
        <div className="flex items-center gap-2 bg-card border border-border p-1.5 rounded-2xl shadow-sm">
           {[
             { id: "overview", label: "Overview" },
             { id: "reports", label: "Reports" },
             { id: "staff", label: "Staff" }
           ].map((tab) => (
             <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-200",
                  activeTab === tab.id 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : "text-muted-foreground hover:bg-muted"
                )}
             >
               {tab.label}
             </button>
           ))}
        </div>
      </header>

      {activeTab === "overview" && <Overview />}
      {activeTab === "reports" && <Reports />}
      {activeTab === "staff" && <Staff />}
    </div>
  );
}

function Overview() {
  const stats = [
    { label: "Occupancy Rate", value: "88%", icon: BedDouble, color: "text-blue-500", bg: "bg-blue-500/5", trend: "+5.2%", desc: "vs last week" },
    { label: "ADR (Avg Rate)", value: "$245.00", icon: DollarSign, color: "text-green-500", bg: "bg-green-500/5", trend: "+12%", desc: "Performance peak" },
    { label: "Guest Satisfaction", value: "4.8/5.0", icon: Star, color: "text-yellow-500", bg: "bg-yellow-500/5", trend: "+0.2", desc: "Based on 124 reviews" },
    { label: "Active Staff", value: "24 On-Duty", icon: UserCheck, color: "text-purple-500", bg: "bg-purple-500/5", trend: "Full", desc: "Morning shift" },
  ];

  const urgentTasks = [
    { id: 1, title: "Room 402 leaking faucet", time: "15m ago", priority: "High", type: "Maintenance" },
    { id: 2, title: "VIP Airport Pickup", time: "In 30m", priority: "Urgent", type: "Concierge" },
    { id: 3, title: "Buffet restocking needed", time: "Just now", priority: "Medium", type: "F&B" },
  ];

  const recentActivity = [
    { id: 1, user: "Admin", action: "Updated WhatsApp template", time: "2h ago", icon: ShieldCheck },
    { id: 2, user: "Reception", action: "Checked in Room 102", time: "4h ago", icon: UserCheck },
    { id: 3, user: "System", action: "Nightly backup completed", time: "12h ago", icon: Activity },
  ];

  const vipArrivals = [
    { id: 1, guest: "Mr. Taniguchi", room: "Suite 501", time: "16:45", icon: Sparkles },
    { id: 2, guest: "Ms. Elena", room: "Penthouse", time: "Tomorrow", icon: Star },
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 animate-in slide-in-from-bottom-4 duration-500">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-card p-6 rounded-[2rem] border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className={cn("p-4 rounded-2xl", stat.bg)}>
                  <Icon className={stat.color} size={28} />
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground opacity-70">Trend</span>
                  <div className="flex items-center gap-1 text-xs font-semibold text-green-500">
                    <TrendingUp size={12} />
                    {stat.trend}
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-sm text-muted-foreground font-medium tracking-tight">{stat.label}</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-bold mt-1 tracking-tighter">{stat.value}</p>
                </div>
                <p className="text-[11px] text-muted-foreground/60 mt-1 italic font-medium">{stat.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 bg-card p-8 rounded-[2rem] border border-border shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Booking vs Revenue</h2>
              <p className="text-sm text-muted-foreground font-medium">Historical comparison of volume vs income</p>
            </div>
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="5 5" vertical={false} stroke="var(--border)" opacity={0.5} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: 'var(--muted-foreground)', fontSize: 12, fontWeight: 500}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: 'var(--muted-foreground)', fontSize: 12, fontWeight: 500}} />
                <Tooltip 
                  contentStyle={{backgroundColor: 'var(--card)', borderRadius: '20px', border: '1px solid var(--border)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', padding: '16px'}}
                  itemStyle={{fontWeight: 500}}
                />
                <Area type="monotone" dataKey="revenue" stroke="var(--primary)" strokeWidth={4} fillOpacity={1} fill="url(#colorRev)" />
                <Line type="monotone" dataKey="bookings" stroke="#60a5fa" strokeWidth={3} dot={{r: 6}} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="lg:col-span-4 bg-card p-8 rounded-[2rem] border border-border shadow-sm flex flex-col items-center">
            <div className="w-full text-left mb-6">
                <h2 className="text-2xl font-bold tracking-tight">Room Status</h2>
                <p className="text-sm text-muted-foreground font-medium">Inventory distribution</p>
            </div>
            <div className="h-[250px] w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                    <RePieChart>
                        <Pie
                            data={roomStatusData}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                            outerRadius={90}
                            paddingAngle={8}
                            dataKey="value"
                        >
                            {roomStatusData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} stroke="transparent" />
                            ))}
                        </Pie>
                    </RePieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-4xl font-bold italic">100</span>
                    <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">Total Rooms</span>
                </div>
            </div>
            <div className="w-full grid grid-cols-2 gap-3 mt-4">
                {roomStatusData.map((item) => (
                    <div key={item.name} className="flex items-center gap-2 p-2 bg-muted/20 rounded-xl border border-border/50">
                        <div className="size-2 rounded-full" style={{backgroundColor: item.fill}} />
                        <span className="text-[10px] text-muted-foreground font-semibold uppercase">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
      
      {/* Expanded Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {/* Urgent Tasks */}
         <div className="bg-card p-8 rounded-[2rem] border border-border shadow-sm">
           <h2 className="text-lg font-bold tracking-tight mb-6 flex items-center gap-2">
             <Clock className="text-primary" size={20} /> Urgent Tasks
           </h2>
           <div className="space-y-4">
             {urgentTasks.map(task => (
               <div key={task.id} className="p-4 bg-muted/10 rounded-2xl border border-border/30 hover:border-primary/20 transition-all cursor-pointer group">
                 <p className="font-semibold text-sm group-hover:text-primary transition-colors">{task.title}</p>
                 <p className="text-[10px] text-muted-foreground font-semibold uppercase mt-1 tracking-wider opacity-60">{task.type} • {task.time}</p>
               </div>
             ))}
           </div>
         </div>

         {/* Recent Activity */}
         <div className="bg-card p-8 rounded-[2rem] border border-border shadow-sm">
           <h2 className="text-lg font-bold tracking-tight mb-6 flex items-center gap-2">
             <Activity className="text-primary" size={20} /> System Activity
           </h2>
           <div className="space-y-4">
             {recentActivity.map(item => (
               <div key={item.id} className="flex items-center gap-4">
                  <div className="size-9 rounded-xl bg-primary/5 flex items-center justify-center text-primary/60">
                    <item.icon size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold truncate">{item.action}</p>
                    <p className="text-[10px] text-muted-foreground font-medium italic">{item.user} • {item.time}</p>
                  </div>
               </div>
             ))}
           </div>
         </div>

         {/* VIP Arrivals */}
         <div className="bg-card p-8 rounded-[2rem] border border-border shadow-sm">
           <h2 className="text-lg font-bold tracking-tight mb-6 flex items-center gap-2">
             <Sparkles className="text-primary" size={20} /> VIP Arrival Feed
           </h2>
           <div className="space-y-4">
             {vipArrivals.map(vip => (
               <div key={vip.id} className="flex items-center justify-between p-4 bg-primary/5 rounded-2xl border border-primary/10">
                 <div className="flex items-center gap-3">
                   <div className="size-8 rounded-lg bg-white flex items-center justify-center text-primary shadow-sm font-bold text-xs ring-1 ring-primary/10">
                    {vip.guest[3]}
                   </div>
                   <div>
                     <p className="text-sm font-semibold">{vip.guest}</p>
                     <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-tight">{vip.room}</p>
                   </div>
                 </div>
                 <span className="text-[10px] font-bold text-primary bg-white px-2 py-1 rounded-lg shadow-sm">{vip.time}</span>
               </div>
             ))}
           </div>
         </div>
      </div>
    </>
  );
}

function Reports() {
  const reports = [
    { title: "Monthly Revenue", date: "Mar 2026", growth: "+15%", icon: DollarSign, color: "text-green-500" },
    { title: "Occupancy Rate", date: "Mar 2026", growth: "+8%", icon: BarChart, color: "text-blue-500" },
    { title: "Guest Demographics", date: "Mar 2026", growth: "Stable", icon: Users, color: "text-purple-500" },
  ];

  return (
    <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
      <div className="flex items-center justify-between">
         <h2 className="text-2xl font-bold tracking-tight flex items-center gap-3">
            <FileText className="text-primary" /> Reports
         </h2>
         <div className="flex gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-card border border-border rounded-xl text-sm font-semibold hover:bg-muted transition-colors">
               <Filter size={16} /> Filter
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-semibold shadow-lg shadow-primary/20 hover:opacity-90 transition-all">
               <Download size={16} /> Export
            </button>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reports.map((report) => (
          <div key={report.title} className="bg-card p-8 rounded-[2.5rem] border border-border shadow-sm hover:shadow-md transition-all group">
             <div className="flex items-center justify-between mb-4">
                <report.icon className={report.color} size={24} />
                <span className="text-[10px] font-semibold bg-green-500/10 text-green-600 px-2 py-0.5 rounded-full uppercase tracking-widest">{report.growth}</span>
             </div>
             <h3 className="font-semibold text-lg leading-tight">{report.title}</h3>
             <p className="text-xs text-muted-foreground mt-1 font-medium italic">{report.date}</p>
             <button className="mt-6 text-sm font-semibold text-primary group-hover:underline flex items-center gap-1">
                Download PDF <Download size={14} />
             </button>
          </div>
        ))}
      </div>

      <div className="bg-card p-10 rounded-[2.5rem] border border-border shadow-sm">
         <h3 className="text-xl font-bold mb-6">Revenue Breakdown</h3>
         <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
               <ReBarChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontWeight: 500}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fontWeight: 500}} />
                  <Tooltip cursor={{fill: 'var(--muted)', opacity: 0.2}} />
                  <Bar dataKey="revenue" fill="var(--primary)" radius={[6, 6, 0, 0]} />
               </ReBarChart>
            </ResponsiveContainer>
         </div>
      </div>
    </div>
  );
}

function Staff() {
  return (
    <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
         <h2 className="text-2xl font-bold tracking-tight flex items-center gap-3">
            <UserCheck className="text-primary" /> Staff
         </h2>
         <div className="flex items-center gap-4 relative">
             <Search className="absolute left-4 text-muted-foreground" size={18} />
             <input 
                type="text" 
                placeholder="Search staff..." 
                className="pl-12 pr-6 py-3 bg-card border border-border rounded-2xl w-full sm:w-80 focus:ring-2 focus:ring-primary/20 outline-none font-medium text-sm"
             />
             <button className="p-3 bg-primary text-primary-foreground rounded-2xl shadow-lg shadow-primary/20 hover:rotate-90 transition-all">
                <UserPlus size={20} />
             </button>
         </div>
      </div>

      <div className="bg-card rounded-[2.5rem] border border-border shadow-sm overflow-hidden">
         <div className="grid grid-cols-5 p-6 bg-muted/20 border-b border-border text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            <div className="col-span-2">Employee</div>
            <div>Department</div>
            <div>Status</div>
            <div className="text-right">Performance</div>
         </div>
         <div className="divide-y divide-border/50">
            {staffList.map((staff) => (
              <div key={staff.id} className="grid grid-cols-5 p-6 items-center hover:bg-muted/5 transition-colors group">
                 <div className="col-span-2 flex items-center gap-4">
                    <div className="size-12 rounded-2xl bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center text-white font-semibold shadow-md border-2 border-white">
                       {staff.avatar}
                    </div>
                    <div>
                       <p className="font-semibold group-hover:text-primary transition-colors">{staff.name}</p>
                       <p className="text-xs text-muted-foreground font-medium italic">{staff.role}</p>
                    </div>
                 </div>
                 <div className="text-sm font-medium text-muted-foreground">{staff.dept}</div>
                 <div>
                    <span className={cn(
                       "px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider",
                       staff.status === "Active" ? "bg-green-500/10 text-green-600" : "bg-yellow-500/10 text-yellow-600"
                    )}>{staff.status}</span>
                 </div>
                 <div className="flex items-center justify-end gap-1.5 text-sm font-semibold">
                    <Star className="text-yellow-500" size={14} fill="currentColor" /> {staff.rating}
                 </div>
              </div>
            ))}
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bg-card p-10 rounded-[2.5rem] border border-border shadow-sm">
            <h3 className="font-semibold text-xl mb-6 tracking-tight">Staff Contribution</h3>
            <div className="space-y-6">
               {[
                 { dept: "Front Desk", val: 88 },
                 { dept: "Housekeeping", val: 92 },
                 { dept: "F&B Service", val: 75 }
               ].map(item => (
                 <div key={item.dept} className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold uppercase tracking-widest text-muted-foreground opacity-80">
                       <span>{item.dept}</span>
                       <span className="text-primary">{item.val}% Efficiency</span>
                    </div>
                    <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                       <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{width: `${item.val}%`}} />
                    </div>
                 </div>
               ))}
            </div>
         </div>
         <div className="bg-card p-10 rounded-[2.5rem] border border-border shadow-sm border-dashed border-2 flex flex-col items-center justify-center text-center">
             <div className="size-16 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-4">
                <Award size={32} />
             </div>
             <h3 className="font-semibold text-lg tracking-tight">Employee of the Month</h3>
             <p className="text-sm text-muted-foreground italic mt-2 px-6 font-medium">Implementation of rewards module coming in next update.</p>
         </div>
      </div>
    </div>
  );
}
