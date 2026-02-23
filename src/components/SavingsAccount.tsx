import { useState } from "react"
import Icon from "@/components/ui/icon"
import { Progress } from "@/components/ui/progress"

const goal = 500000
const saved = 284300
const rate = 18.5
const progressPct = Math.round((saved / goal) * 100)

const months = [
  { month: "Авг", amount: 25000 },
  { month: "Сен", amount: 32000 },
  { month: "Окт", amount: 45000 },
  { month: "Ноя", amount: 38000 },
  { month: "Дек", amount: 52000 },
]
const maxAmount = Math.max(...months.map(m => m.amount))

export function SavingsAccount() {
  const [balanceVisible, setBalanceVisible] = useState(true)

  return (
    <section className="px-4 pt-5 pb-8">
      <div className="bg-[#1a1a1a] rounded-2xl border border-white/5 overflow-hidden">
        <div className="bg-gradient-to-r from-[#1e1e1e] to-[#252525] px-4 py-4 border-b border-white/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                <Icon name="PiggyBank" size={16} className="text-red-400" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Накопительный счёт</p>
                <p className="text-gray-500 text-xs">Альфа-Сейф</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-green-400 text-sm font-bold">{rate}% годовых</p>
              <p className="text-gray-500 text-xs">начисляется ежедневно</p>
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-3 mb-4">
            <div>
              <p className="text-gray-500 text-xs mb-0.5">Накоплено</p>
              <div className="flex items-center gap-2">
                <p className="text-white text-2xl font-bold">
                  {balanceVisible ? `${saved.toLocaleString("ru-RU")} ₽` : "••• ••• ₽"}
                </p>
                <button onClick={() => setBalanceVisible(v => !v)} className="text-gray-500 hover:text-white transition-colors">
                  <Icon name={balanceVisible ? "Eye" : "EyeOff"} size={16} />
                </button>
              </div>
              <p className="text-green-400 text-xs mt-0.5">+4 280 ₽ проценты за декабрь</p>
            </div>
          </div>

          {/* Goal */}
          <div className="mb-4">
            <div className="flex justify-between text-xs mb-1.5">
              <span className="text-gray-400">Цель: новая машина</span>
              <span className="text-white font-medium">{progressPct}%</span>
            </div>
            <Progress value={progressPct} className="h-2 bg-white/10 [&>div]:bg-gradient-to-r [&>div]:from-red-500 [&>div]:to-red-400" />
            <div className="flex justify-between text-[10px] text-gray-600 mt-1">
              <span>0 ₽</span>
              <span>{goal.toLocaleString("ru-RU")} ₽</span>
            </div>
          </div>

          {/* Mini chart */}
          <div className="bg-white/3 rounded-xl p-3 mb-4">
            <p className="text-gray-500 text-xs mb-3">История пополнений</p>
            <div className="flex items-end gap-2 h-14">
              {months.map(m => (
                <div key={m.month} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t-md bg-gradient-to-t from-red-700 to-red-500 opacity-80"
                    style={{ height: `${(m.amount / maxAmount) * 48}px` }}
                  />
                  <span className="text-[9px] text-gray-600">{m.month}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-2">
            <button className="bg-red-600 hover:bg-red-500 text-white text-sm font-semibold rounded-xl py-3 transition-colors flex items-center justify-center gap-2">
              <Icon name="Plus" size={16} />
              Пополнить
            </button>
            <button className="bg-white/8 hover:bg-white/12 text-white text-sm font-semibold rounded-xl py-3 transition-colors flex items-center justify-center gap-2">
              <Icon name="ArrowDownLeft" size={16} />
              Вывести
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
