export default class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (!(node instanceof Node) && node !== null) {
      throw new Error("Next Node must be a member of node class");
    }
    this.next = node;
  }

  getNextNode() {
    return this.next;
  }
}
