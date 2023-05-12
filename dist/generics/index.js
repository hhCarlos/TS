"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Genericos = void 0;
const contenido = () => {
    console.log("Modulo de Genericos -----------------------------------------------------------------------------------------------------");
    function genFun1(param) {
        return param;
    }
    let funVar1 = genFun1("Carlos");
    let funVar2 = genFun1(9898);
    console.log(funVar1);
    console.log(funVar2);
    let genFun2 = (param) => param;
    let funVar3 = genFun1(false);
    let funVar4 = genFun1({});
    console.log(funVar3);
    console.log(funVar4);
    console.log("Interfaces con genericos");
    let boxGen1 = {
        name: "Carlos"
    };
    console.log("Explicit Generic Calls Types");
    function logWrapper(callback) {
        return (input) => {
            console.log("Input --> ", input);
            callback(input);
        };
    }
    const logStr1 = logWrapper((input) => {
        console.log(input.toUpperCase());
    });
    logStr1("carlos el ak fory seven");
    // logStr1(8989);
    console.log("Multiple Function Types Parameters");
    // Recomendable no usar mas de dos tipos y usar otra estrategia en caso de ser requerido
    function makeTuple(first, second) {
        return [first, second];
    }
    let tuple1 = makeTuple("ABC", 1234);
    console.log(tuple1);
    console.log(tuple1[0]);
    console.log(tuple1[1]);
    // Clases con genericos
    class ClassGenric1 {
        constructor(dataIn) {
            this.dataIn = dataIn;
        }
        getData() {
            return this.dataIn;
        }
    }
    const classGen11 = new ClassGenric1(123);
    console.log('classGen11 ----> ', classGen11.getData());
    const classGen12 = new ClassGenric1(true);
    console.log('classGen12 ----> ', classGen12.getData());
    // Clases: Extencion de clases
    class ClassGen2 {
        constructor(data) {
            this.data = data;
            this.showData();
        }
        showData() {
            console.log(this.data);
        }
    }
    class ClassGen2Ext extends ClassGen2 {
        constructor(dataIn, data) {
            super(data);
            this.dataIn = dataIn;
        }
        show() {
            console.log('-> ', this.dataIn);
        }
    }
    const ClassGen21 = new ClassGen2Ext(1234, "Primero hay que ver internamente...");
    ClassGen21.show();
    class getRoleFromClass {
        constructor(role, auror) {
            this.role = role;
            this.auror = auror;
        }
        showData() {
            console.log('getRoleFromClass(this.role) --> ', this.role);
            console.log('getRoleFromClass(this.auror) --> ', this.auror);
        }
    }
    const roleClass = new getRoleFromClass("Jefe de jefes", true);
    roleClass.showData();
    // Clases con funcionen genericas
    class CreateCouple {
        constructor(key) {
            this.key = key;
        }
        addPair(value) {
            return { key: this.key, value };
        }
    }
    const createCouple1 = new CreateCouple("id");
    console.log(createCouple1.addPair(123));
};
exports.Genericos = contenido;
//# sourceMappingURL=index.js.map