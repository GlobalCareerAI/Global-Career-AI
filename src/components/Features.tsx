import { Brain, FileText, Send, Bell, Users, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'مطابقة بالذكاء الاصطناعي',
    desc: 'نطابق مهاراتك مع آلاف الوظائف تلقائياً ونرشّح لك الأنسب فوراً.',
    color: 'bg-primary-600',
  },
  {
    icon: FileText,
    title: 'سيرة ذاتية تفاعلية',
    desc: 'أنشئ سيرة ذاتية احترافية وذكية خلال دقائق، قابلة للمشاركة بضغطة.',
    color: 'bg-accent-600',
  },
  {
    icon: Send,
    title: 'تقديم مباشر وخارجي',
    desc: 'قدّم على الوظائف مباشرة أو عبر الروابط الخارجية، من مكان واحد.',
    color: 'bg-ink-700',
  },
  {
    icon: Bell,
    title: 'تنبيهات فورية',
    desc: 'استلم إشعارات فورية عند توفر وظيفة تطابق ملفك أو تحديث حالتك.',
    color: 'bg-amber-500',
  },
  {
    icon: Users,
    title: 'للأفراد والشركات',
    desc: 'منصة متكاملة لكل المستويات: باحثون عن عمل وأصحاب عمل معاً.',
    color: 'bg-sky-600',
  },
  {
    icon: ShieldCheck,
    title: 'بيانات موثوقة وآمنة',
    desc: 'تحقّق من أصحاب العمل وحماية لبياناتك مع رقابة على الإعلانات.',
    color: 'bg-emerald-600',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto">
          <span className="chip">لماذا نحن</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-ink-900">
            كل ما تحتاجه في رحلة البحث عن عمل
          </h2>
          <p className="mt-2 text-ink-600">أدوات ذكية تساعدك من أول بحث حتى قبول العرض.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div key={f.title} className="card p-6 flex flex-col gap-3 transition-all hover:-translate-y-1 hover:shadow-lg">
                <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${f.color} text-white`}>
                  <Icon className="h-5.5 w-5.5" />
                </span>
                <h3 className="font-bold text-ink-900 text-lg">{f.title}</h3>
                <p className="text-sm text-ink-600 leading-relaxed">{f.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
