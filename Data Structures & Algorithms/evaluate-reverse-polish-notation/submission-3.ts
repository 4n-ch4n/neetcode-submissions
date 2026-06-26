class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const numsStack: number[] = [];

        const operations = {
            '+': (a: number, b: number) => a + b,
            '-': (a: number, b: number) => a - b,
            '*': (a: number, b: number) => a * b,
            '/': (a: number, b: number) => Math.trunc(a / b),
        }

        for (const token of tokens) {
            if (token === "+" || token === "-" || token === "*" || token === "/") {
                let second = numsStack.pop();
                let first = numsStack.pop();

                numsStack.push(operations[token](first, second));
            } else {
                numsStack.push(+token);
            }
        }

        return numsStack.at(0);
    }
}
