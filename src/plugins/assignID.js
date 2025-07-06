import { Plugin, PluginKey } from "@tiptap/pm/state";
import { v4 as uuidv4 } from "uuid";

// FIX: maybe I should have one plugin that does breadth-first and assigning of ids
// FIX: then a separate method that does the breadth-first
const assignID = new Plugin({
  key: new PluginKey("assignIDPlugin"),

  appendTransaction: (transactions, oldState, newState) => {
    const docChanged = transactions.some((tr) => tr.docChanged);

    if (!docChanged) return null;

    const { tr } = newState;
    let modified = false;

    newState.doc.descendants((node, pos) => {
      // FIX
      console.log("ASSIGNID DESCENDANTS");

      if (node.attrs.nodeType === "block" && !node.attrs.id) {
        // FIX
        console.log("ASSIGNID", node?.attrs?.id);

        tr.setNodeAttribute(pos, "id", uuidv4());

        modified = true;
      }
    });

    return modified ? tr : null;
  },
});

export default assignID;
