import Icon from "@/components/ui/icon"
import { Progress } from "@/components/ui/progress"

const prizes = [
  { amount: 10000, label: "500 бонусов", icon: "Gift", unlocked: true },
  { amount: 30000, label: "Кешбэк 7%", icon: "Percent", unlocked: true },
  { amount: 60000, label: "Бесплатный Premium", icon: "Crown", unlocked: false },
  { amount: 100000, label: "iPhone 15 Pro", icon: "Smartphone", unlocked: false },
]

const spent = 38500
const target = 60000
const progressPct = Math.min((spent / target) * 100, 100)

export function SpendingProgress() {
  return (
    <section className="px-4 pt-5">
      <div className="bg-[#1a1a1a] rounded-2xl p-4 border border-white/5">
        <div className="flex items-center justify-between mb-1">
          <span className="text-white font-semibold">Прогресс трат</span>
          <span className="text-xs text-gray-500">Декабрь 2025</span>
        </div>
        <p className="text-gray-400 text-xs mb-4">Тратьте больше — получайте призы</p>

        <div className="mb-2 flex justify-between text-xs">
          <span className="text-white font-medium">{spent.toLocaleString("ru-RU")} ₽</span>
          <span className="text-gray-500">цель {target.toLocaleString("ru-RU")} ₽</span>
        </div>
        <Progress value={progressPct} className="h-2 mb-1 bg-white/10 [&>div]:bg-gradient-to-r [&>div]:from-red-500 [&>div]:to-red-400" />

        <div className="grid grid-cols-4 gap-2 mt-4">
          {prizes.map((prize) => (
            <div key={prize.label} className="flex flex-col items-center gap-1.5">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                prize.unlocked
                  ? "bg-gradient-to-br from-red-500 to-red-700 shadow-lg shadow-red-900/40"
                  : "bg-white/10"
              }`}>
                <Icon name={prize.icon as string} size={18} className={prize.unlocked ? "text-white" : "text-gray-600"} />
              </div>
              <span className={`text-[10px] text-center leading-tight ${prize.unlocked ? "text-white" : "text-gray-600"}`}>
                {prize.label}
              </span>
              <span className={`text-[10px] font-medium ${prize.unlocked ? "text-red-400" : "text-gray-600"}`}>
                {prize.amount.toLocaleString("ru-RU")} ₽
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 bg-red-500/10 border border-red-500/20 rounded-xl p-3">
          <p className="text-xs text-red-300">
            💡 До следующего приза осталось <span className="font-semibold text-white">{(target - spent).toLocaleString("ru-RU")} ₽</span>
          </p>
        </div>
      </div>
    </section>
  )
}
