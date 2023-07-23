import s from './ColumnCountBtn.module.css';

export const ColumnCountBtn = ({ columnCount, setColumnCount }) => {
  const handleSetColumnCount = () => {
    columnCount === 3 ? setColumnCount(5) : setColumnCount(3);
  };

  return (
    <button
      className={s.setColumnCountBtn}
      onClick={handleSetColumnCount}
      type="button"
    >
      {columnCount} columns
    </button>
  );
};
