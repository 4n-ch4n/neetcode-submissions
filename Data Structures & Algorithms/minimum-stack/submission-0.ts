class MinStack {
    stack: { val: number; min: number }[];

    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        if (this.stack.length === 0) {
            this.stack.push({ val, min: val });
            return;
        }

        const min = this.stack.at(-1).min;
        if (val < min) {
            this.stack.push({ val, min: val });
            return;
        }

        this.stack.push({ val, min });
    }

    /**
     * @return {void}
     */
    pop(): void {
        if (this.stack.length === 0) return;

        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack.at(-1).val;
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.stack.at(-1).min;
    }
}
