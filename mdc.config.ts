function walk(node: any, fn: (node: any) => void) {
  fn(node);
  if (Array.isArray(node.children)) {
    for (const child of node.children) {
      walk(child, fn);
    }
  }
}

export default {
  unified: {
    remark(processor: any) {
      processor.use(() => (tree: any) => {
        walk(tree, (node) => {
          if (node.type === 'code') {
            const rawLang = node.lang?.toLowerCase();
            if (rawLang === 'php') {
              node.lang = 'javascript';
              if (!node.meta?.includes('icon=')) {
                node.meta = (node.meta ? `${node.meta} ` : '') + 'icon=vscode-icons:file-type-php';
              }
            } else if (rawLang === 'blade') {
              node.lang = 'html';
              if (!node.meta?.includes('icon=')) {
                node.meta = (node.meta ? `${node.meta} ` : '') + 'icon=vscode-icons:file-type-blade';
              }
            }
          }
        });
      });
    },
  },
};
