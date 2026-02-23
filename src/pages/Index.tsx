import { StoriesSection } from "@/components/StoriesSection"
import { SpendingProgress } from "@/components/SpendingProgress"
import { CardBalance } from "@/components/CardBalance"
import { SavingsAccount } from "@/components/SavingsAccount"
import Icon from "@/components/ui/icon"

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] max-w-md mx-auto relative">
      {/* Header */}
      <header className="flex items-center justify-between px-4 pt-12 pb-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg leading-none">α</span>
          </div>
          <div>
            <p className="text-white text-sm font-semibold leading-tight">Иван Петров</p>
            <p className="text-gray-500 text-xs">Премиум клиент</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative w-9 h-9 rounded-full bg-white/8 flex items-center justify-center">
            <Icon name="Bell" size={18} className="text-gray-300" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          <button className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center">
            <Icon name="Settings" size={18} className="text-gray-300" />
          </button>
        </div>
      </header>

      <StoriesSection />
      <SpendingProgress />
      <CardBalance />
      <SavingsAccount />

      {/* Bottom nav */}
      <nav className="sticky bottom-0 bg-[#111111] border-t border-white/8 px-6 py-3 flex justify-around">
        {[
          { icon: "Home", label: "Главная", active: true },
          { icon: "ArrowLeftRight", label: "Операции", active: false },
          { icon: "BarChart2", label: "Аналитика", active: false },
          { icon: "User", label: "Профиль", active: false },
        ].map(item => (
          <button key={item.label} className="flex flex-col items-center gap-1">
            <Icon name={item.icon as string} size={22} className={item.active ? "text-red-500" : "text-gray-600"} />
            <span className={`text-[10px] ${item.active ? "text-red-400" : "text-gray-600"}`}>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}
