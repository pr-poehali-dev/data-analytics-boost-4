import { useState } from "react"
import Icon from "@/components/ui/icon"

const stories = [
  { id: 1, title: "Кешбэк", icon: "Percent", gradient: "from-red-500 to-red-700", content: "До 5% кешбэк на супермаркеты в этом месяце. Активируйте в приложении!" },
  { id: 2, title: "Курсы валют", icon: "TrendingUp", gradient: "from-orange-500 to-red-600", content: "USD: 89.45 ₽ | EUR: 97.12 ₽ | Выгодный обмен без комиссий" },
  { id: 3, title: "Акции", icon: "Star", gradient: "from-red-600 to-pink-700", content: "Купите акции Газпрома через Альфа-Инвестиции с нулевой комиссией" },
  { id: 4, title: "Рассрочка", icon: "CreditCard", gradient: "from-rose-500 to-red-700", content: "0% рассрочка на 12 месяцев в магазинах-партнёрах" },
  { id: 5, title: "Путешествия", icon: "Plane", gradient: "from-red-500 to-rose-600", content: "Страхование путешественников за 299 ₽ в день. Онлайн за 2 минуты" },
  { id: 6, title: "Советы", icon: "Lightbulb", gradient: "from-red-700 to-red-900", content: "Как накопить ₽100 000 за год? Читайте наш гид по финансовому планированию" },
]

export function StoriesSection() {
  const [activeStory, setActiveStory] = useState<number | null>(null)
  const [progress, setProgress] = useState(0)

  const openStory = (id: number) => {
    setActiveStory(id)
    setProgress(0)
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); setActiveStory(null); return 0 }
        return p + 2
      })
    }, 60)
  }

  const activeData = stories.find(s => s.id === activeStory)

  return (
    <section className="px-4 pt-6">
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {stories.map(story => (
          <button
            key={story.id}
            onClick={() => openStory(story.id)}
            className="flex-shrink-0 flex flex-col items-center gap-1.5"
          >
            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${story.gradient} flex items-center justify-center ring-2 ring-red-500 ring-offset-2 ring-offset-[#0a0a0a] transition-transform active:scale-95`}>
              <Icon name={story.icon} size={24} className="text-white" />
            </div>
            <span className="text-xs text-gray-400 max-w-[64px] text-center leading-tight">{story.title}</span>
          </button>
        ))}
      </div>

      {activeStory && activeData && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setActiveStory(null)}
        >
          <div
            className={`w-full max-w-sm h-[70vh] mx-4 rounded-2xl bg-gradient-to-br ${activeData.gradient} p-5 flex flex-col relative overflow-hidden`}
            onClick={e => e.stopPropagation()}
          >
            <div className="w-full h-1 bg-white/30 rounded-full mb-4">
              <div className="h-full bg-white rounded-full transition-all" style={{ width: `${progress}%` }} />
            </div>
            <div className="flex items-center gap-2 mb-auto">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Icon name={activeData.icon} size={16} className="text-white" />
              </div>
              <span className="text-white font-semibold">{activeData.title}</span>
            </div>
            <p className="text-white text-xl font-medium leading-relaxed mt-auto mb-4">{activeData.content}</p>
            <button
              onClick={() => setActiveStory(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white"
            >
              <Icon name="X" size={20} />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}