/** Visual ids lesson content may reference. Components live in components/visuals/registry.ts. */
export const VISUAL_IDS = ['place-scene'] as const;
export type VisualId = (typeof VISUAL_IDS)[number];
