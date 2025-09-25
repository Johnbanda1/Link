import { lazy } from 'react';

// Lazy load heavy components to reduce initial bundle size
export const LazyAbout = lazy(() => import('./About'));
export const LazyServices = lazy(() => import('./Services'));
export const LazyProjects = lazy(() => import('./Projects'));
export const LazyStrategy = lazy(() => import('./Strategy'));
export const LazyGovernance = lazy(() => import('./Governance'));
export const LazyGallery = lazy(() => import('./Gallery'));
export const LazyStatistics = lazy(() => import('./Statistics'));
export const LazyContact = lazy(() => import('./Contact'));
export const LazyFooter = lazy(() => import('./Footer'));