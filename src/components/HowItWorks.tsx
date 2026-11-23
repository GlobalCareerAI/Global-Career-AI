import { Search, FileText, Brain, CheckCircle2 } from 'lucide-react'

const steps = [
  { icon: Search, title: 'ابحث واستكشف', desc: 'تصفّح آلاف الوظائف أو دع الذكاء الاصطناعي يرشّحها لك.' },
  { icon: FileText, title: 'أنشئ سيرتك الذاتية', desc: 'أنشئ ملفاً احترافياً تفاعلياً خلال دقائق.' },
  { icon: Brain, title: 'مطابقة ذكية', desc: 'نطابقك مع الوظائف الأنسب لمهاراتك واهتماماتك.' },
  { icon: CheckCircle2, title: 'قدّم وتتبّع', desc: 'قدّم على الوظائف وتابع حالة كل طلب من لوحة واحدة.' },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-16 md:py-24 bg-gradient-to-b from-white to-primary-50/40">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto">
          <span className="chip">كيف يعمل</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-ink-900">
            أربع خطوات بسيطة للوظيفة المثالية
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={s.title} className="relative text-center">
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white ring-1 ring-ink-100 shadow-soft">
                  <Icon className="h-7 w-7 text-primary-600" />
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary-600 text-white text-xs font-bold">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-4 font-bold text-ink-900">{s.title}</h3>
                <p className="mt-1.5 text-sm text-ink-600 leading-relaxed">{s.desc}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <button className="btn-primary">ابدأ الآن مجاناً</button>
        </div>
      </div>
    </section>
  )
}
