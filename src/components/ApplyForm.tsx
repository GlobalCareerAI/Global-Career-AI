import { useState } from 'react'
import { MapPin, Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react'
import { supabase } from '../lib/supabase'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const JOB_TITLE = 'مهندس برمجيات (Full-Stack) — الرياض'

export default function ApplyForm() {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    years_experience: '',
    cover_letter: '',
  })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    const years = Number(form.years_experience)
    const payload = {
      full_name: form.full_name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      job_title: JOB_TITLE,
      years_experience: Number.isNaN(years) ? 0 : years,
      cover_letter: form.cover_letter.trim() || null,
    }

    if (!payload.full_name || !payload.email || !payload.phone) {
      setStatus('error')
      setErrorMsg('يرجى تعبئة الاسم والبريد الإلكتروني ورقم الهاتف.')
      return
    }

    const { error } = await supabase
      .from('job_applications')
      .insert(payload)

    if (error) {
      setStatus('error')
      setErrorMsg('حدث خطأ أثناء الإرسال. حاول مرة أخرى لاحقاً.')
      return
    }

    setStatus('success')
    setForm({ full_name: '', email: '', phone: '', years_experience: '', cover_letter: '' })
  }

  return (
    <section id="apply" className="py-16 md:py-24 bg-white">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="chip">
              <MapPin className="h-3.5 w-3.5" />
              فرصة في الرياض
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-ink-900">
              قدّم على وظيفة
              <span className="text-primary-600"> مهندس برمجيات </span>
              في الرياض
            </h2>
            <p className="mt-3 text-ink-600 leading-relaxed">
              انضم إلى فريق تقني متنامٍ في الرياض. نبحث عن مهندس Full-Stack متحمّس لبناء
              منتجات تخدم ملايين المستخدمين. املأ النموذج وسنتواصل معك في حال تم اختيارك.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-ink-700">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-accent-600 shrink-0" />
                دوام كامل في الرياض (مع إمكانية العمل الهجين)
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-accent-600 shrink-0" />
                راتب تنافسي ومزايا شاملة
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-accent-600 shrink-0" />
                بيئة عمل احترافية وفرص نمو حقيقية
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
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 btn-ghost"
                >
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
