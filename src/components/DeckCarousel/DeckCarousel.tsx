import { Carousel } from '@mantine/carousel';

import './DeckCarousel.scss';
import {
  IconGitBranch,
  IconGitPullRequest,
  IconPlus,
  IconMessageDots,
  IconArticle,
  IconPlayerPlay,
} from '@tabler/icons-react';
import DeckCard from '../DeckCard/DeckCard';
import { type } from 'os';

type card = Array<{
  type: string;
  icon: JSX.Element;
  title: string;
  comment: string;
  command: string;
}>;

const cardsArray: card = [
  {
    type: 'attack',
    icon: <IconArticle />,
    title: 'Git Log',
    comment: '// Allows you to see the top 3 card commit of the pile',
    command: '$ git log',
  },
  {
    type: 'defense',
    icon: <IconGitPullRequest />,
    comment: '// Allows you to see the top 3 card commit of the pile',
    title: 'BB',
    command: '$ git init',
  },
  {
    type: 'neutral',
    icon: <IconMessageDots />,
    comment: '// Allows you to see the top 3 card commit of the pile',
    title: 'CCC',
    command: '$ git init',
  },
  {
    type: 'neutral',
    icon: <IconPlayerPlay />,
    comment: '// Allows you to see the top 3 card commit of the pile',
    title: 'DDDD',
    command: '$ aijdsfkjadskfsakdfkj',
  },
  {
    type: 'neutral',
    icon: <IconPlayerPlay />,
    comment: '// Allows you to see the top 3 card commit of the pile',
    title: 'DDDD',
    command: '$ git init',
  },
  {
    type: 'neutral',
    icon: <IconPlayerPlay />,
    comment: '// Allows you to see the top 3 card commit of the pile',
    title: 'DDDD',
    command: '$ git init',
  },
  {
    type: 'neutral',
    icon: <IconPlayerPlay />,
    comment: '// Allows you to see the top 3 card commit of the pile',
    title: 'DDDD',
    command: '$ git init',
  },
  {
    type: 'neutral',
    icon: <IconPlayerPlay />,
    comment: '// Allows you to see the top 3 card commit of the pile',
    title: 'DDDD',
    command: '$ git init',
  },
  {
    type: 'neutral',
    icon: <IconPlayerPlay />,
    comment: '// Allows you to see the top 3 card commit of the pile',
    title: 'DDDD',
    command: '$ git init',
  },

  {
    type: 'neutral',
    icon: <IconPlayerPlay />,
    comment: '// Allows you to see the top 3 card commit of the pile',
    title: 'DDDD',
    command: '$ git init',
  },
  {
    type: 'neutral',
    icon: <IconPlayerPlay />,
    comment: '// Allows you to see the top 3 card commit of the pile',
    title: 'DDDD',
    command: '$ git init',
  },

  {
    type: 'neutral',
    icon: <IconPlayerPlay />,
    comment: '// Allows you to see the top 3 card commit of the pile',
    title: 'DDDD',
    command: '$ git init',
  },
];

export default function DeckCarousel() {
  return (
    <div className="deck-carousel">
      <Carousel
        slideGap="5%"
        // controlsOffset="xl"
        slideSize="fit-content"
        loop
        withIndicators
      >
        {cardsArray.map((card, index) => {
          return (
            <Carousel.Slide key={index}>
              <DeckCard
                type={card.type}
                icon={card.icon}
                title={card.title}
                command={card.command}
                comment={card.comment}
              />
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </div>
  );
}
