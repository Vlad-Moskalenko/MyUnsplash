export const ColumnCountBtn = ({ columnCount, setColumnCount }) => {
  const handleSetColumnCount = () => {
    columnCount === 3 ? setColumnCount(5) : setColumnCount(3);
  };

  return (
    <button onClick={handleSetColumnCount} type="button">
      {columnCount}
    </button>
  );
};
