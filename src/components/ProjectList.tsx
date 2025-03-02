import { Project, type ProjectItem } from './Project';

const projects: ProjectItem[] = [
  {
    text: 'Personal Website',
    description: 'Built with Next.js, UnoCSS and shadcn/ui, designed by myself.',
    href: '/',
    technologies: ['react', 'next', 'unocss', 'typescript'],
    type: 'website',
  },
  {
    text: 'ESLint Config',
    description: 'Hellolin\'s ESLint config preset for React developers.',
    href: 'https://github.com/VLTHellolin/eslint-config',
    technologies: ['eslint', 'react', 'typescript'],
    external: true,
    type: 'source',
  },
  {
    text: 'Silv UI',
    description: 'A collection of beautiful, highly customizable UI components. Powered by UnoCSS.',
    href: 'https://github.com/VLTHellolin/silv-ui',
    technologies: ['react', 'typescript', 'unocss'],
    external: true,
    developing: true,
    type: 'source',
  },
  {
    text: 'Blue Archive Navigator',
    description: 'Utilities for Blue Archive players.',
    href: 'https://github.com/VLTHellolin/BlueArchiveNavigator',
    technologies: ['vue', 'vite'],
    external: true,
    archived: true,
    type: 'source',
  },
];

export function ProjectList() {
  return (
    <div className='grid grid-cols-1 gap-2 lg:grid-cols-2'>
      {projects.map(e => (
        <Project key={e.href} {...e} />
      ))}
    </div>
  );
}
