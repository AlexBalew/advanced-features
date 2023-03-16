export const getPathMain = (): string => '/';
export const getPathAbout = (): string => '/about';
export const getPathProfile = (id: string): string => `/profile/${id}`;
export const getPathArticles = (): string => '/articles';
export const getPathArticleDetails = (id: string): string => `/article/${id}`;
export const getPathArticleCreate = (): string => '/article/create';
export const getPathArticleEdit = (id: string): string => `/article/${id}/edit`;
export const getPathAdmin = (): string => '/admin';
export const getPathForbidden = (): string => '/forbidden';
