import { Search, MapPin, Sparkles, TrendingUp } from 'lucide-react'

const stats = [
  { value: '+12,000', label: 'وظيفة نشطة' },
  { value: '+8,500', label: 'شركة مسجّلة' },
  { value: '+45,000', label: 'مرشّح ناجح' },
]

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-primary-50/60 to-white">
      <div className="absolute inset-0 -z-10 opacity-60">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary-100 blur-3xl" />
        <div className="absolute top-40 -right-20 h-72 w-72 rounded-full bg-accent-100 blur-3xl" />
      </div>

      <div className="container-page py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <span className="chip">
            <Sparkles className="h-3.5 w-3.5" />
            مطابقة ذكية بالذكاء الاصطناعي
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-[1.15] tracking-tight text-ink-900">
            ابحث عن وظيفتك القادمة،
            <br />
            <span className="text-primary-600">بذكاء وسرعة</span>
          </h1>
          <p className="mt-5 text-lg text-ink-600 leading-relaxed">
            منصة عالمية للتوظيف تربط الباحثين عن العمل بأصحاب العمل، مع مطابقة وظائف
            بالذكاء الاصطناعي، سيرة ذاتية تفاعلية، وتتبّع طلباتك في مكان واحد.
          </p>
        </div>

        <div className="mt-8 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="card p-2 sm:p-3 flex flex-col sm:flex-row gap-2">
            <div className="flex-1 flex items-center gap-2 rounded-xl px-3.5 py-3 bg-ink-50/60 ring-1 ring-ink-100">
              <Search className="h-5 w-5 text-ink-400 shrink-0" />
              <input
                type="text"
                placeholder="المسمى الوظيفي، الكلمة المفتاحية…"
                className="w-full bg-transparent text-sm font-medium text-ink-800 placeholder:text-ink-400 focus:outline-none"
              />
            </div>
            <div className="flex-1 flex items-center gap-2 rounded-xl px-3.5 py-3 bg-ink-50/60 ring-1 ring-ink-100">
              <MapPin className="h-5 w-5 text-ink-400 shrink-0" />
              <input
                type="text"
                placeholder="المدينة أو الدولة"
                className="w-full bg-transparent text-sm font-medium text-ink-800 placeholder:text-ink-400 focus:outline-none"
              />
            </div>
            <button className="btn-primary !rounded-xl w-full sm:w-auto">
              <Search className="h-4 w-4" />
              بحث
            </button>
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-ink-500">
            <span className="font-medium">الأكثر بحثاً:</span>
            {['مطوّر برمجيات', 'تصميم', 'تسويق', 'محاسب', 'مبيعات عن بُعد'].map((t) => (
              <a key={t} href="#jobs" className="rounded-full bg-white px-3 py-1 ring-1 ring-ink-200 hover:ring-primary-300 hover:text-primary-700 transition-colors">
                {t}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-4 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="flex items-center justify-center gap-1.5 text-2xl md:text-3xl font-bold text-ink-900">
                <TrendingUp className="hidden sm:inline h-5 w-5 text-accent-500" />
                {s.value}
              </div>
              <div className="mt-1 text-xs md:text-sm text-ink-500 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
