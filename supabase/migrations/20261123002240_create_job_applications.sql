/*
# إنشاء جدول طلبات التوظيف

1. جدول جديد
- `job_applications`
- `id` (uuid, مفتاح أساسي)
- `full_name` (text, الاسم الكامل، غير فارغ)
- `email` (text, البريد الإلكتروني، غير فارغ)
- `phone` (text, رقم الهاتف، غير فارغ)
- `job_title` (text, المسمى الوظيفي، غير فارغ)
- `years_experience` (int, سنوات الخبرة)
- `cover_letter` (text, رسالة تعريفية)
- `status` (text, حالة الطلب، افتراضي 'جديد')
- `created_at` (timestamptz, تاريخ الإنشاء)

2. الأمان
- تفعيل RLS على الجدول
- منح صلاحيات CRUD لـ anon و authenticated
- سياسات عامة للقراءة/الإضافة لأنها بيانات طلبات عامة بدون تسجيل دخول
*/

CREATE TABLE IF NOT EXISTS job_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  job_title text NOT NULL,
  years_experience int DEFAULT 0,
  cover_letter text,
  status text NOT NULL DEFAULT 'جديد',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT ON job_applications TO anon, authenticated;

DROP POLICY IF EXISTS "anon_read_applications" ON job_applications;
CREATE POLICY "anon_read_applications"
ON job_applications FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_applications" ON job_applications;
CREATE POLICY "anon_insert_applications"
ON job_applications FOR INSERT
TO anon, authenticated WITH CHECK (true);
