import "./NumberedList.css";

const NumberedList = ({ indentLevel, startNumber, children }) => {
  console.log(startNumber);
  return (
    <>
      <div
        data-node-type="block"
        data-content-type="numberedList"
        data-indent-level={indentLevel}
        data-start-number={startNumber}
        className="block"
      >
        <div
          data-node-type="content"
          data-content-type="numberedList"
          data-start-number={startNumber}
        >
          <p data-start-number={startNumber}>{children}</p>
        </div>
      </div>
    </>
  );
};

export default NumberedList;
