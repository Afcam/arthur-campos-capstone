import GitClashCard from '../GitClashCard/GitClashCard';

interface Props {
  numberOfCards: number;
  stack: boolean;
  w: number | string;
}

export default function GitClashCardDeck({ numberOfCards = 20, stack = true, w = '30px' }: Props) {
  const cards = Array(numberOfCards).fill(null);

  return cards.map((_, index) => <GitClashCard key={index} number={index} stack={stack} w={w} />);
}
