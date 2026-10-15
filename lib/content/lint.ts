import type { Lesson, Rung } from '../types';

export type Finding = { level: 'error' | 'warn'; message: string };

/** Content lint. English Ladder's English rules are removed; the Arabic rules arrive in M3. */
export function lintLessons(_rungs: Rung[], _byRung: Map<string, Lesson[]>): Finding[] {
  return [];
}
