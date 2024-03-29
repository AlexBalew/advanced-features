import { IUser } from '@/entities/User';
import { ArticleBlockType, ArticleType } from '../constants';

export interface IArticleBlockBase {
    id: string;
    title?: string;
    type: ArticleBlockType;
}

export interface IArticleBlockText extends IArticleBlockBase {
    type: ArticleBlockType.Text;
    paragraphs?: string[];
}

export interface IArticleBlockImage extends IArticleBlockBase {
    type: ArticleBlockType.Image;
    src: string;
}

export type IArticleBlock = IArticleBlockText | IArticleBlockImage;

export interface IArticle {
    id: string;
    title?: string;
    subtitle?: string;
    img?: string;
    views?: number;
    user?: IUser;
    createdAt?: string;
    type: ArticleType[];
    blocks?: IArticleBlock[];
}
