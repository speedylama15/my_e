import { useEditor, EditorContent } from "@tiptap/react";

import content from "../content";
import extensions from "../extensions";
import editorProps from "../editorProps";

import "./MyE.css";

const MyE = () => {
  const editor = useEditor({
    content,
    editorProps,
    extensions,
  });

  return (
    <>
      <EditorContent editor={editor} className="my_e-container" />
    </>
  );
};

export default MyE;
