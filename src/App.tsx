import { useState } from 'react'
import { useAuthStore } from './store/auth.store'
import LoginPage from './pages/LoginPage'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
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
      {/* Increased margin from ml-64 to ml-72 and added extra padding to main content for title spacing */}
      <main className="flex-1 ml-72 p-12 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {activeMenu === 'dashboard' && <Dashboard />}
          {activeMenu === 'whatsapp' && <WhatsAppSettings />}
          {activeMenu === 'settings' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
               <h1 className="text-4xl font-extrabold tracking-tight mb-8">System Settings</h1>
               <div className="bg-card p-12 rounded-[2.5rem] border border-border shadow-sm italic text-muted-foreground">
                  Global system configurations and organization preferences placeholder.
               </div>
            </div>
          )}
          {activeMenu === 'help' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
               <h1 className="text-4xl font-extrabold tracking-tight mb-8">Help & Documentation</h1>
               <div className="bg-card p-12 rounded-[2.5rem] border border-border shadow-sm italic text-muted-foreground">
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
