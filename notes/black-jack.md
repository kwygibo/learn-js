# Blackjack JavaScript Changes

| Change | Description | Code Comparison | Link |
| --- | --- | --- | --- |
| **Class Syntax** | Using the `class` keyword encapsulates properties and methods into a clean structural template rather than manually attaching functions directly to `this` inside legacy constructor functions. | **Before:** `function Deck() { this.shuffle = function() { ... } }` **After:** `class Deck { shuffle() { ... } }` | [MDN Class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) |
| **Array Destructuring** | Swapping two array indices in a single line using `[this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]`, which entirely removes the need for a temporary third variable tracking assignment values. | **Before:** `x = this.cards[i];` `this.cards[i] = this.cards[j];` `this.cards[j] = x;` **After:** `[this.cards[i], this.cards[j]] =` `[this.cards[j], this.cards[i]];` | [MDN Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) |
| **Property Shorthand** | Pushing an object property via `{ suit, rank }` instead of typing `{ suit: suit, rank: rank }` directly targets syntax updates where a key name matches its initialization variable name. | **Before:** `this.cards.push({ suit: suit, rank: rank });` **After:** `this.cards.push({ suit, rank });` | MDN Object Initializer |
| **Block-Scoped Variables** | Migrating legacy `var` declarations over to block-scoped `let` and `const` assignments limits iterator variables to their specific loops, isolating lexical definitions from wrapping contexts. | **Before:** `var j, x, i;` `for (i = ...)` **After:** `for (let i = ...)` `const j = ...` | [MDN let Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) |

# Additional Concepts

1. [Using Classes Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes)
2. [Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
