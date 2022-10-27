import { BiInfoCircle } from 'react-icons/bi';
import classes from './AlertModal.module.css';

const AlertModal = ({ content }) => (
  <div className={classes.container}>
    <BiInfoCircle />
    <span className={classes.text}>{content}</span>
    <div className={classes.progress} />
  </div>
);

export default AlertModal;
