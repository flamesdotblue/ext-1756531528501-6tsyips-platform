import { Home, Hash, Bell, Mail, User } from 'lucide-react'

export default function TopNav() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-zinc-200">
      <div className="mx-auto max-w-xl px-4 sm:px-0 h-14 flex items-center justify-between">
        <div className="flex items-center gap-4 text-zinc-500">
          <Home className="h-5 w-5" />
          <Hash className="h-5 w-5" />
        </div>
        <div className="font-semibold tracking-tight">minimal feed</div>
        <div className="flex items-center gap-4 text-zinc-500">
          <Bell className="h-5 w-5" />
          <Mail className="h-5 w-5" />
          <User className="h-5 w-5" />
        </div>
      </div>
    </header>
  )
}
