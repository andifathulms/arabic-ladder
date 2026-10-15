import { notFound } from 'next/navigation';
import { getAllSummaries, getCurriculum, getPlacement } from '@/lib/content/load';
import { PlacementRunner } from '@/components/check/PlacementRunner';

export const metadata = { title: 'Cek huruf' };

export default function PlacementPage() {
  const placement = getPlacement();
  if (!placement) notFound();
  return <PlacementRunner placement={placement} rungs={getCurriculum()} lessons={getAllSummaries()} />;
}
