import type { MouseEvent } from 'react';
import type { PageId } from '../types';

export const pagePath = (id: PageId) => (id === 'home' ? '/' : `/${id}`);

/** Lets crawlers and "open in new tab" use the real href, while normal clicks stay in-app. */
export const handleLinkClick = (e: MouseEvent, action: () => void) => {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
  e.preventDefault();
  action();
};
