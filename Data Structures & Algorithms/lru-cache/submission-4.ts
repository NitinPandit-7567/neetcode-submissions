class LRUCache {
    private capacity: number = 0;
    private cache:Map<number, number> = new Map();
    /**
     * @param {number} capacity
     */
    constructor(capacity: number = 0) {
        this.capacity = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if (this.cache.has(key)) {
            const value=this.cache.get(key)
            this.cache.delete(key)
            this.cache.set(key, value);
            return value
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        if(this.cache.has(key)){
            this.cache.delete(key);
        }
        else if (this.cache.size >= this.capacity) {
            const evictKey = this.cache.keys().next().value;
            this.cache.delete(evictKey);
        }
        this.cache.set(key, value);
    }
}
