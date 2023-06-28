import GitClashCard from './GitClashCard/GitClashCard';

export default function GitClashCardDeck({
  numberOfCards = 20,
  stack = true,
  w = '30px',
  hasNumber = true,
}: {
  numberOfCards?: number;
  stack?: boolean;
  w?: number | string;
  hasNumber?: boolean;
}) {
  const cards = Array(numberOfCards).fill(null);

  return cards.map((_, index) => (
    <GitClashCard
      key={index}
      number={hasNumber ? index : null}
      stack={stack}
      w={w}
    />
  ));
}
