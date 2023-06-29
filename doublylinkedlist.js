//Q7-2. Write a program to implement - . Doubly linked list with required member function(Create, insert, delete, Display ) 

class Node
{
    constructor(value)
    {
        this.prev = null;
        this.data = value;
        this.next = null;
    }
}

class DLL
{
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }
    isEmpty()
    {
        if(this.head == null)
            return true;
        else
            return false;
    }
    insertAtFirst(value)
    {
        var temp = new Node(value);
        if(this.isEmpty())
        {
            this.head = temp;
            this.tail = temp;
            this.count++;
        }
        else
        {
            temp.next = this.head;
            this.head.prev = temp;
            this.head = temp;
            this.count++; 
        }
    }
    insertAtLast(value)
    {
        if(this.isEmpty())
        {
            this.insertAtFirst(value);
        }
        else
        {
            var temp = new Node(value);
            this.tail.next = temp;
            temp.prev = this.tail;
            this.tail = temp;
            this.count++;
        }
    }
    insertAtPos(value, pos)
    {
        if(pos>0 && pos<=this.count+1)
        {
            if(pos==1)
            {
                this.insertAtFirst(value);
            }
            else if(pos==this.count+1)
            {
                this.insertAtLast(value);
            }
            else
            {
                var temp = new Node(value);
                var trv = this.head;
                for(let index = 2; index<pos; index++)
                {
                    trv = trv.next;
                }
                temp.next = trv.next;
                temp.prev = trv;
                trv.next.prev = temp;
                trv.next = temp;
                this.count++;
            }
        }
        else
        {
            console.log("Invalid Position");
        }
    }
    deleteAtFirst()
    {
        if(this.isEmpty())
        {
            console.log("List is empty");
        }
        else
        {
            var temp = this.head;
            this.head = temp.next;
            temp.next = null;
            this.head.prev = null;
            this.count--;
            return temp.data;
        }
    }
    deleteAtLast()
    {
        if(this.isEmpty())
        {
            console.log("List is empty");
        }
        else
        {
            var temp = this.tail;
            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev = null;
            this.count--;
            return temp.data;
        }
    }
    deleteAtPos(pos)
    {
        if(pos>0 && pos<=this.count)
        {
            if(pos==1)
            {
                this.deleteAtFirst();
            }
            else if(pos==this.count)
            {
                this.deleteAtLast();
            }
            else
            {
                var trv = this.head;
                for(let index=2; index<pos;index++)
                {
                    trv = trv.next;
                }
                var temp = trv.next;
                trv.next = temp.next;
                temp.next.prev = trv;
                temp.next = null;
                temp.prev = null;
                this.count--;
                return temp.data;
            }
        }
        else
        {
            console.log("Invalid Position");
        }
    }
    display()
    {
        if(this.isEmpty())
        {
            console.log("List is empty");
        }
        else
        {
            console.log("\n Start ");
            for(let trv=this.head; trv!=null; trv=trv.next)
            {
                console.log(" -> "+trv.data);
            }
            console.log(" End \n");
        }
    }
}

var dll = new DLL();
dll.insertAtFirst(20);
dll.insertAtLast(30);
dll.insertAtLast(40);
dll.insertAtLast(60);
dll.insertAtLast(70);
dll.insertAtLast(80);
dll.insertAtPos(50,4);
dll.insertAtFirst(10);
dll.display();
dll.insertAtFirst(101);
dll.insertAtLast(102);
dll.insertAtPos(103,11);
dll.insertAtPos(104,3);
dll.insertAtPos(105,7);
dll.display();
dll.deleteAtFirst();
dll.deleteAtLast();
dll.deleteAtPos(2);
dll.deleteAtPos(5);
dll.deleteAtPos(9);
dll.display();