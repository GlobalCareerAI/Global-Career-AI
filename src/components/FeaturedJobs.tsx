import { MapPin, Clock, Briefcase, ArrowLeft } from 'lucide-react'

const jobs = [
  {
    title: 'مهندس برمجيات أول (Full-Stack)',
    company: 'شركة تقنية متقدمة',
    location: 'الرياض، السعودية',
    type: 'دوام كامل',
    salary: '18,000 - 25,000 ر.س',
    tags: ['عن بُعد', 'React', 'Node.js'],
    logo: 'T',
    color: 'bg-primary-600',
  },
  {
    title: 'مصمم منتجات (UX/UI)',
    company: 'منصة إبداعية',
    location: 'دبي، الإمارات',
    type: 'عن بُعد',
    salary: '12,000 - 16,000 درهم',
    tags: ['عن بُعد', 'Figma', 'تصميم'],
    logo: 'D',
    color: 'bg-accent-600',
  },
  {
    title: 'أخصائي تسويق رقمي',
    company: 'وكالة نمو',
    location: 'القاهرة، مصر',
    type: 'دوام كامل',
    salary: '20,000 - 30,000 ج.م',
    tags: ['SEO', 'إعلانات', 'محتوى'],
    logo: 'M',
    color: 'bg-ink-700',
  },
  {
    title: 'محلل بيانات',
    company: 'بيانات الذكاء',
    location: 'عمّان، الأردن',
    type: 'هجين',
    salary: '1,200 - 1,800 د.أ',
    tags: ['SQL', 'Power BI', 'Python'],
    logo: 'A',
    color: 'bg-primary-700',
  },
  {
    title: 'مدير مبيعات إقليمي',
    company: 'مجموعة تجارية',
    location: 'الدوحة، قطر',
    type: 'دوام كامل',
    salary: '25,000 - 35,000 ر.ق',
    tags: ['B2B', 'إدارة فريق', 'مبيعات'],
    logo: 'S',
    color: 'bg-accent-700',
  },
  {
    title: 'محاسب مالي أول',
    company: 'مكتب استشاري',
    location: 'الكويت، الكويت',
    type: 'دوام كامل',
    salary: '900 - 1,400 د.ك',
    tags: ['محاسبة', 'تقارير', 'IFFRS'],
    logo: 'F',
    color: 'bg-ink-800',
  },
]

export default function FeaturedJobs() {
  return (
    <section id="jobs" className="py-16 md:py-24 bg-white">
      <div className="container-page">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="chip">وظائف مميزة</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-ink-900">
              أحدث الفرص الوظيفية
            </h2>
            <p className="mt-2 text-ink-600">فرص منتقاة بالذكاء الاصطناعي تناسب مهاراتك واهتماماتك.</p>
          </div>
          <a href="#jobs" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-bold text-primary-700 hover:text-primary-800">
            عرض الكل
            <ArrowLeft className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {jobs.map((job) => (
            <article key={job.title} className="card p-5 flex flex-col gap-4 transition-all hover:-translate-y-1 hover:shadow-lg hover:ring-ink-200">
              <div className="flex items-start gap-3">
                <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${job.color} text-white text-lg font-bold shrink-0`}>
                  {job.logo}
                </span>
                <div className="min-w-0">
                  <h3 className="font-bold text-ink-900 leading-snug truncate">{job.title}</h3>
                  <p className="text-sm text-ink-500 mt-0.5">{job.company}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-ink-600 font-medium">
                <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5 text-ink-400" />{job.location}</span>
                <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-ink-400" />{job.type}</span>
                <span className="inline-flex items-center gap-1"><Briefcase className="h-3.5 w-3.5 text-ink-400" />{job.salary}</span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {job.tags.map((t) => (
                  <span key={t} className="rounded-full bg-ink-50 px-2.5 py-1 text-[11px] font-bold text-ink-600">{t}</span>
                ))}
              </div>

              <a href="#apply" className="mt-auto btn-primary !py-2.5 !text-xs">تقديم الآن</a>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#jobs" className="btn-ghost">تصفّح جميع الوظائف</a>
        </div>
      </div>
    </section>
  )
}
