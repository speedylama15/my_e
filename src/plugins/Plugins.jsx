import { Node } from "@tiptap/core";

import assignID from "./assignID";

const Plugins = Node.create({
  name: "plugins",

  addProseMirrorPlugins() {
    return [assignID];
  },
});

export default Plugins;
