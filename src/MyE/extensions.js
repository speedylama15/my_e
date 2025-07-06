import { Doc, Paragraph } from "../nodes";
import { Plugins } from "../plugins";
import { UndoRedo } from "@tiptap/extensions";
import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Superscript from "@tiptap/extension-superscript";
import Strike from "@tiptap/extension-strike";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";

const extensions = [
  UndoRedo,
  Doc,
  Paragraph,
  Plugins,
  Text,
  Bold,
  Italic,
  Superscript,
  Strike,
  Underline,
  Highlight,
];

export default extensions;
