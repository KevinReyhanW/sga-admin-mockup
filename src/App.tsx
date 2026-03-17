import { useState } from 'react'
import { useAuthStore } from './store/auth.store'
import LoginPage from './pages/LoginPage'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Rooms from './pages/Rooms'
import WhatsAppSettings from './pages/WhatsAppSettings'

function App() {
  const { isAuthenticated } = useAuthStore()
  const [activeMenu, setActiveMenu] = useState('dashboard')

  if (!isAuthenticated) {
    return <LoginPage />
  }

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar activeMenu={activeMenu} onNavigate={setActiveMenu} />
      <main className="flex-1 ml-72 p-12 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {activeMenu === 'dashboard' && <Dashboard />}
          {activeMenu === 'rooms' && <Rooms />}
          {activeMenu === 'whatsapp' && <WhatsAppSettings />}
          {activeMenu === 'settings' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
               <h1 className="text-4xl font-bold tracking-tight mb-8">System Settings</h1>
               <div className="bg-card p-12 rounded-[2.5rem] border border-border shadow-sm italic text-muted-foreground font-medium">
                  Global system configurations and organization preferences placeholder.
               </div>
            </div>
          )}
          {activeMenu === 'help' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
               <h1 className="text-4xl font-bold tracking-tight mb-8">Help & Documentation</h1>
               <div className="bg-card p-12 rounded-[2.5rem] border border-border shadow-sm italic text-muted-foreground font-medium">
                  Documentation resources and support center placeholder.
               </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default App
