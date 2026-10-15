import { getCurriculum, getLessons } from '@/lib/content/load';
import { ReviewRunner } from '@/components/check/ReviewRunner';

export const metadata = { title: 'Ulang cepat' };

export default function ReviewPage() {
  const lessons = getCurriculum().flatMap((r) => getLessons(r.id));
  const items = lessons.flatMap((l) => l.check.map((item) => ({ item, lessonId: l.id })));
  return <ReviewRunner items={items} />;
}
