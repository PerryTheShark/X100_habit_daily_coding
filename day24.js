class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

//in javascript you do not have to declare in object

class LinkedList {
    constructor () {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        let node = new Node(element);

        let current;

        if(this.head == null)
            this.head = node;
        else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size ++;
    }

    removeElement(element) {
        let current = this.head;
        let prev = null;

        while (current != null) {
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    isEmpty() {
        return this.size == 0;
    }

    printList() {
        let curr = this.head;
        let str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }

}

let ll = new LinkedList();

ll.add(10);
ll.add(23);

ll.printList();