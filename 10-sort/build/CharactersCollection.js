"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactorCollection = void 0;
const sorter_1 = require("./sorter");
class CharactorCollection extends sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const characters = this.data.split('');
        const leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;
        this.data = characters.join('');
    }
}
exports.CharactorCollection = CharactorCollection;
