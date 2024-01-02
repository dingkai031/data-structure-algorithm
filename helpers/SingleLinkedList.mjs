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

  removeTail() {
    let currentNode = this.head;
    if (!currentNode) return;
    if (!currentNode.getNextNode()) {
      return (this.head = currentNode.getNextNode());
    }
    while (currentNode.getNextNode().getNextNode()) {
      currentNode = currentNode.getNextNode();
    }
    currentNode.next = null;
  }

  removeNode(data) {
    // initiate 2 pointer
    let currentNode = this.head;
    let previousNode = currentNode;

    // check if the list is empty
    if (!currentNode) return;
    // if the list only contains 1 node, call removeHead()
    if (currentNode.data === data) return this.removeHead();

    // travel both of the pointer until the current node is null
    // and node is found
    while (currentNode && currentNode.data !== data) {
      previousNode = currentNode;
      currentNode = currentNode.getNextNode();
    }

    // if data was not found return an error
    if (!currentNode || currentNode.data !== data)
      throw new Error("node not found");
    // if the node that contains data that we looking for,
    // call removeTail()
    if (!currentNode.getNextNode()) return this.removeTail();

    // if the data is found, and the data is not inside the first and the last
    // node. Set the previous node next property to current node next property
    previousNode.setNextNode(currentNode.getNextNode());
  }

  swapNode(data1, data2) {
    this.printList();
    console.log(`Swapping ${data1} and ${data2}:`);
    let node1Prev = null;
    let node2Prev = null;
    let node1 = this.head;
    let node2 = this.head;

    if (data1 === data2)
      return console.log("Elements are the same - no swap to be made");

    while (node1 !== null) {
      if (node1.data === data1) {
        break;
      }
      node1Prev = node1;
      node1 = node1.getNextNode();
    }

    while (node2 !== null) {
      if (node2.data === data2) {
        break;
      }
      node2Prev = node2;
      node2 = node2.getNextNode();
    }

    if (node1 === null || node2 === null)
      return console.log(
        "Swap not possible - one or more element is not in the list"
      );

    if (node1Prev === null) {
      this.head = node2;
    } else {
      node1Prev.setNextNode(node2);
    }

    if (node2Prev === null) {
      this.head = node1;
    } else {
      node2Prev.setNextNode(node1);
    }

    let temp = node1.getNextNode();
    node1.setNextNode(node2.getNextNode());
    node2.setNextNode(temp);
  }

  reverseList() {
    this.printList();
    let prev = null;
    let next = null;
    let currentNode = this.head;

    while (currentNode) {
      next = currentNode.getNextNode();
      currentNode.setNextNode(prev);
      prev = currentNode;
      currentNode = next;
    }

    this.head = prev;
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
