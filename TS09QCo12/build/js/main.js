"use strict";
const createNewAssign = (title, points) => {
    return { title, points };
};
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
