import { Briefcase, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react'

const columns = [
  {
    title: 'للباحثين',
    links: ['تصفّح الوظائف', 'إنشاء سيرة ذاتية', 'تنبيهات الوظائف', 'نصائح مهنية'],
  },
  {
    title: 'للشركات',
    links: ['نشر وظيفة', 'البحث عن مرشحين', 'الأسعار', 'إدارة الفريق'],
  },
  {
    title: 'المنصة',
    links: ['من نحن', 'اتصل بنا', 'المدوّنة', 'الشروط والأحكام'],
  },
]

const socials = [
  { icon: Twitter, label: 'تويتر' },
  { icon: Linkedin, label: 'لينكدإن' },
  { icon: Facebook, label: 'فيسبوك' },
  { icon: Instagram, label: 'إنستغرام' },
]

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-200">
      <div className="container-page py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-600 text-white">
                <Briefcase className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold text-white">
                Global<span className="text-primary-400"> Career</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-ink-300 max-w-xs">
              منصة عالمية ذكية للتوظيف تربط الباحثين عن العمل بأصحاب العمل، مع أدوات
              ذكية لكل خطوة في رحلتك المهنية.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-800 text-ink-300 hover:bg-primary-600 hover:text-white transition-colors"
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </a>
                )
              })}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold text-white">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-ink-300 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-ink-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-400">© 2026 Global Career AI. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-4 text-xs text-ink-400">
            <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-white transition-colors">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
