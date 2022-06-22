import classNames from 'classnames';
import styles from './alert.module.css';

const cx = classNames.bind(styles);

export default function Alert({ children, type }) {
  return (
    <div
      className={cx({
        success: type === 'success',
        error: type === 'error',
      })}
    >
      {children}
    </div>
  );
}