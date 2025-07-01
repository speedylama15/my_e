import "./Paragraph.css";

const Paragraph = ({ indentLevel, children }) => {
  return (
    <>
      <div
        data-node-type="block"
        data-content-type="paragraph"
        data-indent-level={indentLevel}
        className="block"
      >
        <div data-node-type="content">
          <p>{children}</p>
        </div>
      </div>
    </>
  );
};

export default Paragraph;
