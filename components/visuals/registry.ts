import type { ComponentType } from 'react';
import type { VisualId } from '@/lib/visualIds';
import { PlaceScene } from './PlaceScene';

/** Visual id → component. Lesson frontmatter refers to visuals by id only. */
// Each visual takes VisualProps plus its own props from frontmatter.
export const registry = {
  'place-scene': PlaceScene,
} satisfies Record<VisualId, ComponentType<never>>;
