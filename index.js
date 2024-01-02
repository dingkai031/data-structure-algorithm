import SingleLinkedList from "./helpers/SingleLinkedList.mjs";

// singleLinkedList
const food = new SingleLinkedList();
food.addToTail("mi kuah");
food.addToTail("soto");
food.addToTail("mi goreng");
food.addToTail("cap cay");

// food.removeNode("mi bihun"); //will throw an error
// food.swapNode("mi kuah", "cap cay");
food.reverseList();
food.printList();
