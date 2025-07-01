import "./BulletList.css";

const BulletList = ({ indentLevel, children }) => {
  return (
    <>
      <div
        data-node-type="block"
        data-content-type="bulletList"
        data-indent-level={indentLevel}
        className="block"
      >
        <div data-node-type="content" data-content-type="bulletList">
          <p>{children}</p>
        </div>
      </div>
    </>
  );
};

export default BulletList;
