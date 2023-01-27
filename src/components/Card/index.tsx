import Button from '../Button';
import './Card.scss';

interface CardProps {
  imgSrc: string;
  title: string;
  text: string;
  customTextClass?: string;
}

export default function Card({
  imgSrc,
  title,
  text,
  customTextClass,
}: CardProps) {
  return (
    <div className="card">
      <img className="card__img" src={imgSrc} alt={title} />

      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className={`card__text card__text--${customTextClass}`}>{text}</p>
      </div>
      <div className="card__footer">
        <Button customClass="card__button" buttonText="Read more" />
      </div>
    </div>
  );
}
