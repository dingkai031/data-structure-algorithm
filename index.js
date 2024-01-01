import SingleLinkedList from "./helpers/SingleLinkedList.mjs";

// singleLinkedList
const food = new SingleLinkedList();
food.addToHead("mi goreng");
food.addToHead("mi kuah");

// food.removeNode("mi bihun"); //will throw an error
food.printList();
