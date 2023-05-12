"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./generics/index");
const index_2 = require("./variables/index");
const index_3 = require("./classes/index");
function runModule(moreModules) {
    if (moreModules.length) {
        moreModules.forEach((modulo) => {
            modulo();
        });
    }
}
const modulesToRun = [index_2.Variables, index_3.Clases, index_1.Genericos];
runModule([...modulesToRun]);
//# sourceMappingURL=index.js.map