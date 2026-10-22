declare module '*.mdx' { import type {ComponentType} from 'react'; const content: ComponentType<{components?: Record<string, ComponentType<any>>}>; export default content; }
