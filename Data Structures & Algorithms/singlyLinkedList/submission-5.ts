type INode = {
    val: number;
    next: INode | null;
};

class LinkedList {
    private head: INode;
    constructor() {}

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        if(!this.head){
            return -1
        }
        let i = 0;
        let current = this.head;
        while (i < index) {
            if (current.next) {
                current = current.next;
            } else {
                return -1;
            }
            i++;
        }
        return current.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val: number): void {
        const newHead = { val, next: this.head };
        this.head = newHead;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val: number): void {
        if(!this.head){
            this.head={val,next:null}
            return;
        }
        let current = this.head;
        while (current?.next) {
            current = current.next;
        }
        current.next = { val, next: null };
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index: number): boolean {
        if(!this.head){
            return false
        }
        if(index===0){
            if(this.head.next){
                this.head=this.head.next
                return true
            }else{
                this.head=undefined
                return true;
            }
        }
        let i = 0;
        let current = this.head;
        let prev: INode;
        while (i < index) {
            if (current?.next) {
                prev = current;
                current = current?.next || null;
                i++;
            } else {
                return false;
            }
        }
        prev.next = current?.next || null;
        return true;
    }

    /**
     * @return {number[]}
     */
    getValues(): number[] {
        const values = [];
        if(!this.head){
            return values
        }
        let current = this.head;
        while (current.next) {
            values.push(current.val);
            current = current.next;
        }
        values.push(current.val)
        return values;
    }
}
