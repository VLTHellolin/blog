import { glob } from 'fast-glob';

export const getPostList = () => glob('posts/**/*.md');
