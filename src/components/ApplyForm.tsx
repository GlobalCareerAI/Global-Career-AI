import { useState } from 'react'
import { MapPin, Send, CheckCircle2, Loader2, AlertCircle, Briefcase, Building2 } from 'lucide-react'
import { supabase } from '../lib/supabase'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const JOB_TITLES = [
  'مهندس برمجيات (Full-Stack)',
  'مطوّر واجهات أمامية (Front-End)',
  'مطوّر واجهات خلفية (Back-End)',
  'مصمم منتجات (UX/UI)',
  'أخصائي تسويق رقمي',
  'محلل بيانات',
  'مدير مبيعات',
  'محاسب مالي',
  'أخصائي موارد بشرية',
  'أخرى',
]

const COUNTRIES = [
  'السعودية',
  'الإمارات',
  'مصر',
  'الأردن',
  'قطر',
  'الكويت',
  'البحرين',
  'عُمان',
  'العراق',
  'المغرب',
  'تونس',
  'الجزائر',
  'دولة أخرى',
]

export default function ApplyForm() {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    job_title: JOB_TITLES[0],
    custom_job: '',
    country: COUNTRIES[0],
    city: '',
    work_type: 'دوام كامل',
    years_experience: '',
    cover_letter: '',
  })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    const jobTitle = form.job_title === 'أخرى' ? form.custom_job.trim() : form.job_title
    const years = Number(form.years_experience)

    if (!form.full_name.trim() || !form.email.trim() || !form.phone.trim()) {
      setStatus('error')
      setErrorMsg('يرجى تعبئة الاسم والبريد الإلكتروني ورقم الهاتف.')
      return
    }
    if (!jobTitle) {
      setStatus('error')
      setErrorMsg('يرجى كتابة المسمى الوظيفي.')
      return
    }
    if (!form.country || !form.city.trim()) {
      setStatus('error')
      setErrorMsg('يرجى تحديد الدولة والمدينة.')
      return
    }

    const payload = {
      full_name: form.full_name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      job_title: jobTitle,
      country: form.country,
      city: form.city.trim(),
      work_type: form.work_type,
      years_experience: Number.isNaN(years) ? 0 : years,
      cover_letter: form.cover_letter.trim() || null,
    }

    const { error } = await supabase.from('job_applications').insert(payload)

    if (error) {
      setStatus('error')
      setErrorMsg('حدث خطأ أثناء الإرسال. حاول مرة أخرى لاحقاً.')
      return
    }

    setStatus('success')
    setForm({
      full_name: '',
      email: '',
      phone: '',
      job_title: JOB_TITLES[0],
      custom_job: '',
      country: COUNTRIES[0],
      city: '',
      work_type: 'دوام كامل',
      years_experience: '',
      cover_letter: '',
    })
  }

  return (
    <section id="apply" className="py-16 md:py-24 bg-white">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="chip">
              <MapPin className="h-3.5 w-3.5" />
              فرص في كل المدن والدول
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-ink-900">
              قدّم على الوظيفة التي تناسبك،
              <span className="text-primary-600"> في أي مكان</span>
            </h2>
            <p className="mt-3 text-ink-600 leading-relaxed">
              نموذج تقديم موحّد لكل الوظائف في جميع المدن والدول. املأ بياناتك، اختر
              المسمى الوظيفي والموقع، وسنتواصل معك عند تطابق الملف.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-ink-700">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-accent-600 shrink-0" />
                تقديم على أي وظيفة وفي أي مدينة أو دولة
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-accent-600 shrink-0" />
                خيارات متعددة: دوام كامل، عن بُعد، أو هجين
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-accent-600 shrink-0" />
                طلبك يُحفظ ويتواصل معك فريق التوظيف مباشرة
              </li>
            </ul>
          </div>

          <div className="card p-6 md:p-8">
            {status === 'success' ? (
              <div className="text-center py-10">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-50 text-accent-600">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-ink-900">تم استلام طلبك بنجاح</h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                  شكراً لتقديمك! سيراجع فريق التوظيف طلبك ويتواصل معك في حال تطابق الملف.
                </p>
                <button onClick={() => setStatus('idle')} className="mt-6 btn-ghost">
                  تقديم طلب آخر
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="الاسم الكامل" name="full_name" value={form.full_name} onChange={handleChange} placeholder="مثال: أحمد العلي" />
                  <Field label="البريد الإلكتروني" name="email" type="email" value={form.email} onChange={handleChange} placeholder="name@example.com" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="رقم الهاتف" name="phone" value={form.phone} onChange={handleChange} placeholder="05xxxxxxxx" />
                  <Field label="سنوات الخبرة" name="years_experience" type="number" value={form.years_experience} onChange={handleChange} placeholder="0" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <SelectField
                    label="المسمى الوظيفي"
                    name="job_title"
                    value={form.job_title}
                    onChange={handleChange}
                    options={JOB_TITLES}
                    icon={<Briefcase className="h-4 w-4 text-ink-400" />}
                  />
                  <SelectField
                    label="نوع الدوام"
                    name="work_type"
                    value={form.work_type}
                    onChange={handleChange}
                    options={['دوام كامل', 'عن بُعد', 'هجين', 'دوام جزئي']}
                    icon={<Briefcase className="h-4 w-4 text-ink-400" />}
                  />
                </div>

                {form.job_title === 'أخرى' && (
                  <Field label="اكتب المسمى الوظيفي" name="custom_job" value={form.custom_job} onChange={handleChange} placeholder="مثال: مهندس ذكاء اصطناعي" />
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <SelectField
                    label="الدولة"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    options={COUNTRIES}
                    icon={<Building2 className="h-4 w-4 text-ink-400" />}
                  />
                  <Field label="المدينة" name="city" value={form.city} onChange={handleChange} placeholder="مثال: الرياض" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-ink-800 mb-1.5">رسالة تعريفية (اختياري)</label>
                  <textarea
                    name="cover_letter"
                    value={form.cover_letter}
                    onChange={handleChange}
                    rows={4}
                    placeholder="عرّف عن نفسك ولماذا أنت مهتم بهذه الوظيفة…"
                    className="w-full rounded-xl bg-ink-50/60 ring-1 ring-ink-100 px-3.5 py-3 text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-primary-300 transition-shadow"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-start gap-2 rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-700 ring-1 ring-rose-100">
                    <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      جارٍ الإرسال…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      تقديم الطلب
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-ink-400">
                  بإرسالك الطلب فأنت توافق على شروط الاستخدام وسياسة الخصوصية.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

type FieldProps = {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  placeholder?: string
}

function Field({ label, name, value, onChange, type = 'text', placeholder }: FieldProps) {
  return (
    <div>
      <label className="block text-sm font-bold text-ink-800 mb-1.5">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl bg-ink-50/60 ring-1 ring-ink-100 px-3.5 py-3 text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-primary-300 transition-shadow"
      />
    </div>
  )
}

type SelectFieldProps = {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: string[]
  icon?: React.ReactNode
}

function SelectField({ label, name, value, onChange, options, icon }: SelectFieldProps) {
  return (
    <div>
      <label className="block text-sm font-bold text-ink-800 mb-1.5">{label}</label>
      <div className="relative">
        {icon && (
          <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">{icon}</span>
        )}
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full appearance-none rounded-xl bg-ink-50/60 ring-1 ring-ink-100 ${icon ? 'pr-10' : 'pr-3.5'} pl-8 py-3 text-sm text-ink-800 focus:outline-none focus:ring-2 focus:ring-primary-300 transition-shadow`}
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-ink-400">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </div>
    </div>
  )
}
