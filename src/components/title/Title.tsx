import './Title.css';
import classNames from 'classnames';

export interface TitleProps {
  label: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ label, className }) => {
  return <h1 className={classNames('title', className)}>{label}</h1>;
};

export default Title;
