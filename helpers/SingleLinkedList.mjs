import Node from "./Node.mjs";

export default class SingleLinkedList {
  constructor() {
    this.head = null;
  }

  getTotalNode() {
    let currentNode = this.head;
    let totalNode = 0;
    if (!currentNode) return totalNode;
    while (currentNode) {
      totalNode++;
      currentNode = currentNode.getNextNode();
    }
    return totalNode;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;

    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    let tail = this.head;
    const newTail = new Node(data);

    if (!tail) {
      this.head = newTail;
    } else {
      while (tail.getNextNode()) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(newTail);
    }
  }

  removeHead() {
    const removedHead = this.head;

    if (!removedHead) return;
    this.head = this.head.getNextNode();
    return `removed node ${removedHead.data}`;
  }

  printList() {
    let currentNode = this.head;
    if (!currentNode)
      return console.log("linked list has no nodes".toUpperCase());
    let output = "<head> ";
    const totalNode = this.getTotalNode();
    let currentNodeIndex = 0;

    while (currentNode) {
      currentNodeIndex++;
      if (currentNodeIndex === totalNode) {
        output = output + currentNode.data + " ";
      } else {
        output = output + currentNode.data + " -> ";
      }
      currentNode = currentNode.getNextNode();
    }

    output = output + "<tail>";
    console.log(output);
  }
}
