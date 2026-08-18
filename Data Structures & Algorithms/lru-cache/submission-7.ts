class LRUCache {
    private capacity: number;
    private cache: Map<number, number>;
    /**
     * @param {number} capacity
     */
    constructor(capacity: number = 0) {
        this.capacity = capacity;
        this.cache=new Map()
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if (!this.cache.has(key)) {
            return -1;
        }
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else if (this.cache.size >= this.capacity) {
            const evictKey = this.cache.keys().next().value;
            this.cache.delete(evictKey);
        }
        this.cache.set(key, value);
    }
}
