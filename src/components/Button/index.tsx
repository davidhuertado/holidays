interface ButtonProps {
  buttonText: string;
  buttonType?: 'submit' | 'reset' | 'button' | undefined;
  customClass?: string;
}

export default function Button({
  buttonText,
  buttonType,
  customClass,
}: ButtonProps) {
  return (
    <button className={`${customClass}`} type={buttonType}>
      {buttonText}
    </button>
  );
}
