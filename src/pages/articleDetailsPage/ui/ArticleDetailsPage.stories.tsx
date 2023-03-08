import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import { ArticleBlockType, ArticleType, IArticle } from 'entities/Article';
import { Theme } from 'shared/constants';
import ArticleDetailsPage from './ArticleDetailsPage';

const article: IArticle = {
    id: '1',
    title: 'Batman',
    subtitle: 'Who is the Batman?',
    img:
        // eslint-disable-next-line max-len
        'https://i.pinimg.com/736x/6b/6e/db/6b6edb53a211d0c0c9f2c857fc0d1418--batman-backgrounds-savior.jpg',
    views: 1022,
    createdAt: '30/01/2023',
    type: [ArticleType.Comics],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.Text,
            title: 'Common info',
            paragraphs: [
                `Batman is a superhero appearing in American comic books published by DC Comics. /n
                The character was created by artist Bob Kane and writer Bill Finger, and debuted /n
                in the 27th issue of the comic book Detective Comics on March 30, 1939. In the /n
                DC Universe continuity, Batman is the alias of Bruce Wayne, a wealthy American /n
                playboy, philanthropist, and industrialist who resides in Gotham City.`,
            ],
        },
        {
            id: '2',
            type: ArticleBlockType.Text,
            title: 'Creation',
            paragraphs: [
                `In early 1939, the success of Superman in Action Comics prompted editors /n
                at National Comics Publications (the future DC Comics) to request more superheroes/n
                for its titles. In response, Bob Kane created 'the Bat-Man'. Collaborator Bill /n
                Finger recalled that 'Kane had an idea for a character called 'Batman,' and he'd /n
                like me to see the drawings.`,
            ],
        },
        {
            id: '3',
            type: ArticleBlockType.Image,
            src: 'https://upload.wikimedia.org/wikipedia/en/b/b3/Batman_ad.jpg',
            title: 'First published image of Batman',
        },
        {
            id: '4',
            type: ArticleBlockType.Text,
            title: 'Early years',
            paragraphs: [
                `The first Batman story, 'The Case of the Chemical Syndicate', was published /n
                in Detective Comics #27 (cover dated May 1939). It was inspired, some say /n
                plagiarized, by the 60 page story “Partners of Peril” in The Shadow #113, which /n
                was written by Theodore Tinsley and illustrated by Tom Lovell.`,
            ],
        },
        {
            id: '5',
            type: ArticleBlockType.Image,
            // eslint-disable-next-line max-len
            src: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Detective_Comics_27_%28May_1939%29.png/220px-Detective_Comics_27_%28May_1939%29.png',
            title: 'Batman made his debut in Detective Comics #27',
        },
        {
            id: '6',
            type: ArticleBlockType.Text,
            title: 'Modern Age - The Dark Knight Returns',
            paragraphs: [
                `Frank Miller's limited series The Dark Knight Returns returned the /n
                character to his darker roots, both in atmosphere and tone. The comic book, /n
                which tells the story of a 55-year-old Batman coming out of retirement /n
                in a possible future, reinvigorated interest in the character.`,
            ],
        },
        {
            id: '7',
            type: ArticleBlockType.Image,
            src: 'https://upload.wikimedia.org/wikipedia/en/7/77/Dark_knight_returns.jpg',
            title: 'The Dark Knight Returns 1986',
        },
    ],
};

export default {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template:
ComponentStory<typeof ArticleDetailsPage> = () => <ArticleDetailsPage />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    articleDetails: {
        data: article,
    },
})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.Dark), StoreDecorator({
    articleDetails: {
        data: article,
    },
})];
