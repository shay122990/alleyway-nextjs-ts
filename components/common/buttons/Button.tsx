import { ButtonHTMLAttributes, FC } from 'react';
import styles from "./Button.module.css";

type ButtonProps = {
  buttonType: keyof typeof BUTTON_TYPE_CLASSES;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const BUTTON_TYPE_CLASSES = {
  primary: styles.btnPrimary,
  secondary: styles.btnSecondary,
  generic: styles.btnGeneric,
  submit: styles.btnSubmit,
};

const Button: FC<ButtonProps> = ({ children, buttonType, ...otherProps }) => {
  return (
    <button className={`${styles.btn} ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
      {children}
    </button>
  );
}

export default Button;
