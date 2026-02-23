import { useState } from "react"
import Icon from "@/components/ui/icon"

const transactions = [
  { id: 1, name: "Пятёрочка", category: "Супермаркет", amount: -1240, icon: "ShoppingCart", date: "Сегодня", cashback: 62 },
  { id: 2, name: "Netflix", category: "Подписка", amount: -799, icon: "Play", date: "Вчера", cashback: 0 },
  { id: 3, name: "Зарплата", category: "Пополнение", amount: 145000, icon: "Wallet", date: "1 дек", cashback: 0 },
  { id: 4, name: "Яндекс Go", category: "Такси", amount: -483, icon: "Car", date: "1 дек", cashback: 24 },
]

export function CardBalance() {
  const [balanceVisible, setBalanceVisible] = useState(true)

  return (
    <section className="px-4 pt-5">
      <div className="rounded-2xl overflow-hidden">
        {/* Card */}
        <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-900 p-5 relative overflow-hidden">
          <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/5" />
          <div className="absolute -bottom-10 -left-4 w-32 h-32 rounded-full bg-white/5" />

          <div className="flex justify-between items-start mb-6 relative z-10">
            <div>
              <p className="text-white/60 text-xs mb-0.5">Альфа-Карта</p>
              <p className="text-white text-xs font-mono">•••• •••• •••• 4821</p>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-white font-bold text-lg tracking-tight">α</span>
              <span className="text-white text-xs font-semibold">alfa-bank</span>
            </div>
          </div>

          <div className="relative z-10">
            <p className="text-white/60 text-xs mb-1">Баланс</p>
            <div className="flex items-center gap-3">
              <p className="text-white text-3xl font-bold">
                {balanceVisible ? "142 560 ₽" : "••• ••• ₽"}
              </p>
              <button onClick={() => setBalanceVisible(v => !v)} className="text-white/60 hover:text-white transition-colors">
                <Icon name={balanceVisible ? "Eye" : "EyeOff"} size={18} />
              </button>
            </div>
            <p className="text-white/50 text-xs mt-1">+2 350 ₽ кешбэк за месяц</p>
          </div>

          <div className="flex gap-4 mt-5 relative z-10">
            {[
              { label: "Пополнить", icon: "Plus" },
              { label: "Перевести", icon: "Send" },
              { label: "Платёж", icon: "Zap" },
              { label: "Ещё", icon: "MoreHorizontal" },
            ].map(action => (
              <button key={action.label} className="flex flex-col items-center gap-1 flex-1">
                <div className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center">
                  <Icon name={action.icon as string} size={18} className="text-white" />
                </div>
                <span className="text-white/70 text-[10px]">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Transactions */}
        <div className="bg-[#1a1a1a] border-x border-b border-white/5 rounded-b-2xl">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
            <span className="text-white text-sm font-semibold">Последние операции</span>
            <button className="text-red-400 text-xs">Все</button>
          </div>
          {transactions.map(tx => (
            <div key={tx.id} className="flex items-center gap-3 px-4 py-3 border-b border-white/5 last:border-0">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${
                tx.amount > 0 ? "bg-green-500/15" : "bg-white/8"
              }`}>
                <Icon name={tx.icon as string} size={16} className={tx.amount > 0 ? "text-green-400" : "text-gray-400"} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium truncate">{tx.name}</p>
                <p className="text-gray-500 text-xs">{tx.category} · {tx.date}</p>
              </div>
              <div className="text-right">
                <p className={`text-sm font-semibold ${tx.amount > 0 ? "text-green-400" : "text-white"}`}>
                  {tx.amount > 0 ? "+" : ""}{tx.amount.toLocaleString("ru-RU")} ₽
                </p>
                {tx.cashback > 0 && (
                  <p className="text-red-400 text-[10px]">+{tx.cashback} ₽ кешбэк</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
