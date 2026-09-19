import type { RouteRecord } from 'vite-react-ssg'
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'
import NotFound from './pages/NotFound'
import { caseStudies } from './data/caseStudies'

/**
 * Every route is static, one per case study, so vite-react-ssg prerenders
 * all of them at build time without a dynamic-path step.
 */
export const routes: RouteRecord[] = [
  { path: '/', element: <Home />, entry: 'src/pages/Home.tsx' },
  ...caseStudies.map((study) => ({
    path: `/projects/${study.slug}`,
    element: <CaseStudy slug={study.slug} />,
    entry: 'src/pages/CaseStudy.tsx',
  })),
  // Prerendered so hosts that serve dist/404.html on unknown paths get a real page.
  { path: '/404', element: <NotFound />, entry: 'src/pages/NotFound.tsx' },
  { path: '*', element: <NotFound />, entry: 'src/pages/NotFound.tsx' },
]
