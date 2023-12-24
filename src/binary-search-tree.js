const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootDom = null;
  }

  root() {
    return this.rootDom;
  }

  add(data) {
    this.rootDom = addLeaf(this.rootDom, data);

    function addLeaf(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addLeaf(node.left, data);
      } else {
        node.right = addLeaf(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return hasRoot(this.rootDom, data);

    function hasRoot(node, data) {
      if (!node) {
        return false;
      } else if (node.data === data) {
        return true;
      }

      if (node.data > data) {
        return hasRoot(node.left, data);
      } else {
        return hasRoot(node.right, data);
      }
    }
  }

  find(data) {
    return hasRoot(this.rootDom, data);

    function hasRoot(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }

      if (node.data > data) {
        return hasRoot(node.left, data);
      } else {
        return hasRoot(node.right, data);
      }
    }
  }

  remove(data) {
    this.rootDom = removeRoot(this.rootDom, data);

    function removeRoot(node, data) {
      if (!node) {
        return null;
      }

      if (node.data > data) {
        node.left = removeRoot(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeRoot(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let Leftmax = node.left;
        while (Leftmax.right) {
          Leftmax = Leftmax.right;
        }
        node.data = Leftmax.data;
        node.left = removeRoot(node.left, Leftmax.data);

        return node;
      }
    }
  }

  min() {
    if (!this.rootDom) {
      return null;
    }

    let node = this.rootDom;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.rootDom) {
      return null;
    }

    let node = this.rootDom;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
