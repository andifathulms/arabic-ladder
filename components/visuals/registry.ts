import type { ComponentType } from 'react';
import type { VisualId } from '@/lib/visualIds';
import { Pending } from './Pending';

/** Visual id → component. Lesson frontmatter refers to visuals by id only. */
// Each visual takes VisualProps plus its own props from frontmatter.
export const registry = {
  'letter-forms': Pending,
  'word-joiner': Pending,
  'harakat-builder': Pending,
  makhraj: Pending,
  'sun-moon': Pending,
  'place-scene-ar': Pending,
  agreement: Pending,
} satisfies Record<VisualId, ComponentType<never>>;
