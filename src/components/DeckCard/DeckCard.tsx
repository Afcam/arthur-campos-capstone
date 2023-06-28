import './DeckCard.scss';

interface Props {
  type: string;
  icon: JSX.Element;
  title: string;
  command: string;
  comment: string;
}

export default function DeckCard({
  type,
  icon,
  title,
  command,
  comment,
}: Props) {
  const cardClassName =
    type === 'attack'
      ? 'deck-card deck-card--attack'
      : type === 'defense'
      ? 'deck-card deck-card--defense'
      : type === 'neutral'
      ? 'deck-card deck-card--neutral'
      : 'deck-card';

  return (
    <article className={cardClassName}>
      <header className="deck-card__header">
        <div className="deck-card__tab">
          {icon}
          <span className="deck-card__title"> {title}</span>
        </div>
      </header>
      <main className="deck-card__main">
        <div className="deck-card__number">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
        </div>
        <div className="deck-card__code">
          <span className="deck-card__line">
            <span className="hl hl--c">{comment}</span>
          </span>
          <span className="deck-card__line">
            <span className="hl hl--k">{command}</span>
          </span>
        </div>
      </main>
    </article>
  );
}
