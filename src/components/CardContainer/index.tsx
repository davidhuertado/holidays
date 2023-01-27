import './CardContainer.scss';

interface CardContainerInterface {
  children: React.ReactNode;
}

export default function CardContainer({
  children,
}: CardContainerInterface): JSX.Element {
  return <div className="card-container">{children}</div>;
}
