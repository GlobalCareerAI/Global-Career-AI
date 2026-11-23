import { Code, PenTool, Megaphone, BarChart3, Building2, HeartPulse, GraduationCap, ShoppingBag } from 'lucide-react'

const categories = [
  { name: 'تقنية المعلومات', icon: Code, count: 3400, color: 'bg-primary-50 text-primary-700' },
  { name: 'التصميم والإبداع', icon: PenTool, count: 1200, color: 'bg-accent-50 text-accent-700' },
  { name: 'التسويق والمبيعات', icon: Megaphone, count: 2100, color: 'bg-amber-50 text-amber-700' },
  { name: 'البيانات والتحليل', icon: BarChart3, count: 980, color: 'bg-sky-50 text-sky-700' },
  { name: 'المحاسبة والمالية', icon: Building2, count: 1500, color: 'bg-emerald-50 text-emerald-700' },
  { name: 'الصحة والطب', icon: HeartPulse, count: 760, color: 'bg-rose-50 text-rose-700' },
  { name: 'التعليم والتدريب', icon: GraduationCap, count: 640, color: 'bg-indigo-50 text-indigo-700' },
  { name: 'التجزئة والتجارة', icon: ShoppingBag, count: 1100, color: 'bg-teal-50 text-teal-700' },
]

export default function Categories() {
  return (
    <section id="categories" className="py-16 md:py-24 bg-ink-50/50">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto">
          <span className="chip">استكشف حسب المجال</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-ink-900">
            فئات وظيفية لكل مسار مهني
          </h2>
          <p className="mt-2 text-ink-600">اختر المجال الذي يناسبك واكتشف آلاف الفرص المتاحة.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <a
                key={cat.name}
                href="#jobs"
                className="card p-5 flex flex-col items-center text-center gap-3 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${cat.color}`}>
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-ink-900">{cat.name}</h3>
                  <p className="mt-0.5 text-xs text-ink-500 font-medium">{cat.count.toLocaleString('ar-EG')} وظيفة</p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
