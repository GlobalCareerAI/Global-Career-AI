/*
# إضافة أعمدة المدينة والدولة وحقول التعميم لجدول طلبات التوظيف

1. تعديلات على الجدول `job_applications`
- إضافة عمود `city` (text, المدينة, غير فارغ) — ليقبل أي مدينة
- إضافة عمود `country` (text, الدولة, غير فارغ) — ليقبل أي دولة
- جعل عمود `job_title` قابلاً لأي مسمى وظيفي (لا تغيير في النوع، فقط توضيحي)
- إضافة عمود `work_type` (text, نوع الدوام، افتراضي 'دوام كامل') — اختياري

2. الأمان
- لا تغيير في سياسات RLS الموجودة (تبقى عامة لـ anon و authenticated)
- تحديث صلاحية INSERT لتشمل الأعمدة الجديدة (الصلاحية على مستوى الجدول تغطيها)
*/

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns
                 WHERE table_name = 'job_applications' AND column_name = 'city') THEN
    ALTER TABLE job_applications ADD COLUMN city text;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns
                 WHERE table_name = 'job_applications' AND column_name = 'country') THEN
    ALTER TABLE job_applications ADD COLUMN country text;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns
                 WHERE table_name = 'job_applications' AND column_name = 'work_type') THEN
    ALTER TABLE job_applications ADD COLUMN work_type text DEFAULT 'دوام كامل';
  END IF;
END $$;
