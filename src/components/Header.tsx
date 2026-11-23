import { Briefcase, Search, Menu, X, Globe, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'الوظائف', href: '#jobs' },
  { label: 'الفئات', href: '#categories' },
  { label: 'المميزات', href: '#features' },
  { label: 'كيف يعمل', href: '#how' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-ink-100">
      <div className="container-page flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2.5 shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-600 text-white">
            <Briefcase className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-tight">
            Global<span className="text-primary-600"> Career</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 text-sm font-medium text-ink-600 rounded-lg hover:text-ink-900 hover:bg-ink-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <button className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-ink-600 hover:text-ink-900 hover:bg-ink-50 transition-colors">
            <Globe className="h-4 w-4" />
            عربي
            <ChevronDown className="h-3.5 w-3.5" />
          </button>
          <button className="btn-ghost !py-2 !px-4 text-ink-700">
            <Search className="h-4 w-4" />
            تسجيل الدخول
          </button>
          <button className="btn-primary !py-2 !px-4">إنشاء حساب</button>
        </div>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink-700 hover:bg-ink-50"
          onClick={() => setOpen((v) => !v)}
          aria-label="القائمة"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink-100 bg-white">
          <div className="container-page py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-ink-700 rounded-lg hover:bg-ink-50"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <button className="btn-ghost !py-2.5">تسجيل الدخول</button>
              <button className="btn-primary !py-2.5">إنشاء حساب</button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
