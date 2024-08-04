function getLength(arg) {
    if (arg === null || arg === void 0 ? void 0 : arg.hasOwnProperty("length")) {
        return arg["length"];
    }
    return 0;
}
// console.log(getLength<number>(22));
console.log(getLength("hollo World."));
