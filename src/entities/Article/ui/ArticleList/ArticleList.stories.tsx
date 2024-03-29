import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleBlockType, ArticleListView, ArticleType } from '../../model';
import { ArticleList } from './ArticleList';
import { IArticle } from '../../model/types/article';

export default {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

const article = {
    id: '1',
    title: 'Batman',
    subtitle: 'Who is the Batman?',
    user: {
        id: '1',
        userName: 'neo',
        // eslint-disable-next-line max-len
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT94ar7hyopWcULyu8zjdyGkwmdV1VBQ_z2KRhZL_aDY6LhyYCxE9KoVl6qThCBVhPu3u8&usqp=CAU',
    },
    // eslint-disable-next-line max-len
    img: 'https://i.pinimg.com/736x/6b/6e/db/6b6edb53a211d0c0c9f2c857fc0d1418--batman-backgrounds-savior.jpg',
    views: 1022,
    createdAt: '30/01/2023',
    type: [ArticleType.News, ArticleType.Movies, ArticleType.Music, ArticleType.News],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.Text,
            title: 'Common info',
            paragraphs: [
                // eslint-disable-next-line max-len
                "Batman is a superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger, and debuted in the 27th issue of the comic book Detective Comics on March 30, 1939. In the DC Universe continuity, Batman is the alias of Bruce Wayne, a wealthy American playboy, philanthropist, and industrialist who resides in Gotham City. Batman's origin story features him swearing vengeance against criminals after witnessing the murder of his parents Thomas and Martha as a child, a vendetta tempered with the ideal of justice. He trains himself physically and intellectually, crafts a bat-inspired persona, and monitors the Gotham streets at night. Kane, Finger, and other creators accompanied Batman with supporting characters, including his sidekicks Robin and Batgirl; allies Alfred Pennyworth, James Gordon, and Catwoman; and foes such as the Penguin, the Riddler, Two-Face, and his archenemy, the Joker. Kane conceived Batman in early 1939 to capitalize on the popularity of DC's Superman; although Kane frequently claimed sole creation credit, Finger substantially developed the concept from a generic superhero into something more bat-like. The character received his own spin-off publication, Batman, in 1940. Batman was originally introduced as a ruthless vigilante who frequently killed or maimed criminals, but evolved into a character with a stringent moral code and strong sense of justice. Unlike most superheroes, Batman does not possess any superpowers, instead relying on his intellect, fighting skills, and wealth. The 1960s Batman television series used a camp aesthetic, which continued to be associated with the character for years after the show ended. Various creators worked to return the character to his darker roots in the 1970s and 1980s, culminating with the 1986 miniseries The Dark Knight Returns by Frank Miller.",
            ],
        },
        {
            id: '2',
            type: ArticleBlockType.Text,
            title: 'Creation',
            paragraphs: [
                // eslint-disable-next-line max-len
                "In early 1939, the success of Superman in Action Comics prompted editors at National Comics Publications (the future DC Comics) to request more superheroes for its titles. In response, Bob Kane created 'the Bat-Man'. Collaborator Bill Finger recalled that 'Kane had an idea for a character called 'Batman,' and he'd like me to see the drawings. I went over to Kane's, and he had drawn a character who looked very much like Superman with kind of ...reddish tights, I believe, with boots ...no gloves, no gauntlets ...with a small domino mask, swinging on a rope. He had two stiff wings that were sticking out, looking like bat wings. And under it was a big sign ...BATMAN'. The bat-wing-like cape was suggested by Bob Kane, inspired as a child by Leonardo da Vinci's sketch of an ornithopter flying device. Finger suggested giving the character a cowl instead of a simple domino mask, a cape instead of wings, and gloves; he also recommended removing the red sections from the original costume. Finger said he devised the name Bruce Wayne for the character's secret identity: 'Bruce Wayne's first name came from Robert the Bruce, the Scottish patriot. Wayne, being a playboy, was a man of gentry. I searched for a name that would suggest colonialism. I tried Adams, Hancock ...then I thought of Mad Anthony Wayne.' He later said his suggestions were influenced by Lee Falk's popular The Phantom, a syndicated newspaper comic-strip character with which Kane was also familiar.",
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
                // eslint-disable-next-line max-len
                "The first Batman story, 'The Case of the Chemical Syndicate', was published in Detective Comics #27 (cover dated May 1939). It was inspired, some say plagiarized, by the 60 page story “Partners of Peril” in The Shadow #113, which was written by Theodore Tinsley and illustrated by Tom Lovell.[21] Finger said, 'Batman was originally written in the style of the pulps', and this influence was evident with Batman showing little remorse over killing or maiming criminals. Batman proved a hit character, and he received his own solo title in 1940 while continuing to star in Detective Comics. By that time, Detective Comics was the top-selling and most influential publisher in the industry; Batman and the company's other major hero, Superman, were the cornerstones of the company's success.[23] The two characters were featured side by side as the stars of World's Finest Comics, which was originally titled World's Best Comics when it debuted in fall 1940. Creators including Jerry Robinson and Dick Sprang also worked on the strips during this period.",
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
                // eslint-disable-next-line max-len
                "Frank Miller's limited series The Dark Knight Returns returned the character to his darker roots, both in atmosphere and tone. The comic book, which tells the story of a 55-year-old Batman coming out of retirement in a possible future, reinvigorated interest in the character. The Dark Knight Returns was a financial success and has since become one of the medium's most noted touchstones. The series also sparked a major resurgence in the character's popularity",
            ],
        },
        {
            id: '7',
            type: ArticleBlockType.Image,
            // eslint-disable-next-line max-len
            src: 'https://upload.wikimedia.org/wikipedia/en/7/77/Dark_knight_returns.jpg',
            title: 'The Dark Knight Returns 1986',
        },
    ],
} as IArticle;

export const LoadingList = Template.bind({});
LoadingList.args = {
    articles: [],
    isLoading: true,
    view: ArticleListView.List,
};

export const LoadingTiles = Template.bind({});
LoadingTiles.args = {
    articles: [],
    isLoading: true,
    view: ArticleListView.Tiles,
};

export const Tiles = Template.bind({});
Tiles.args = {
    articles: new Array(12).fill(0).map((index) => ({
        ...article,
        id: String(index),
    })),
    isLoading: false,
    view: ArticleListView.Tiles,
};

export const List = Template.bind({});
List.args = {
    articles: new Array(9).fill(0).map((index) => ({
        ...article,
        id: String(index),
    })),
    isLoading: false,
    view: ArticleListView.List,
};
