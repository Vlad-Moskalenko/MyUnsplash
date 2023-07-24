import { useMediaQuery } from 'hooks/useMediaQuery';
import s from './ColumnCountBtn.module.css';

export const ColumnCountBtn = ({ columnCount, setColumnCount }) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const handleSetColumnCount = () => {
    columnCount === 3 ? setColumnCount(5) : setColumnCount(3);
  };

  return (
    isDesktop && (
      <button
        className={s.setColumnCountBtn}
        onClick={handleSetColumnCount}
        type="button"
      >
        {'|'.repeat(columnCount)}
      </button>
    )
  );
};
