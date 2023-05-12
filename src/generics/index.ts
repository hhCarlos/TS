const contenido = () => {
    console.log("Modulo de Genericos -----------------------------------------------------------------------------------------------------");

    function genFun1<T>(param: T) {
        return param;
    }

    let funVar1 = genFun1("Carlos");
    let funVar2 = genFun1(9898);

    console.log(funVar1);
    console.log(funVar2);

    let genFun2 = <T>(param: T) => param;

    let funVar3 = genFun1(false);
    let funVar4 = genFun1({});

    console.log(funVar3);
    console.log(funVar4);

    console.log("Interfaces con genericos");

    interface Box<T> {
        name: T;
    }

    let boxGen1: Box<string> = {
        name: "Carlos"
    };

    console.log("Explicit Generic Calls Types");

    function logWrapper<Input>(callback: (input: Input) => void) {
        return (input: Input) => {
            console.log("Input --> ", input);
            callback(input);
        }
    }

    const logStr1 = logWrapper((input: string) => {
        console.log(input.toUpperCase());
    });

    logStr1("carlos el ak fory seven");
    // logStr1(8989);

    console.log("Multiple Function Types Parameters");
    // Recomendable no usar mas de dos tipos y usar otra estrategia en caso de ser requerido

    function makeTuple<First, Second>(first: First, second: Second) {
        return [first, second] as const;
    }

    let tuple1 = makeTuple("ABC", 1234);

    console.log(tuple1);
    console.log(tuple1[0]);
    console.log(tuple1[1]);

    // Clases con genericos
    class ClassGenric1<T> {
        dataIn: T;

        constructor(dataIn: T) {
            this.dataIn = dataIn;
        }

        getData(): T {
            return this.dataIn;
        }
    }

    const classGen11 = new ClassGenric1(123);
    console.log('classGen11 ----> ', classGen11.getData());

    const classGen12 = new ClassGenric1(true);
    console.log('classGen12 ----> ', classGen12.getData());

    // Clases: Extencion de clases
    class ClassGen2<T> {
        data: T;

        constructor(data: T) {
            this.data = data;

            this.showData();
        }

        showData(): void {
            console.log(this.data);
        }
    }

    class ClassGen2Ext<T> extends ClassGen2<string> {
        dataIn: T;

        constructor(dataIn: T, data: string) {
            super(data);

            this.dataIn = dataIn;
        }

        show(): void {
            console.log('-> ', this.dataIn);
        }
    }

    const ClassGen21 = new ClassGen2Ext(1234, "Primero hay que ver internamente...");
    ClassGen21.show();

    // Implementando interfaces en clases
    interface InterfazClass<Role> {
        role: Role;
    }

    class getRoleFromClass implements InterfazClass<string> {
        role: string;
        auror: boolean;

        constructor(role: string, auror: boolean) {
            this.role = role;
            this.auror = auror;
        }

        showData(): void {
            console.log('getRoleFromClass(this.role) --> ', this.role);
            console.log('getRoleFromClass(this.auror) --> ', this.auror);
        }
    }

    const roleClass = new getRoleFromClass("Jefe de jefes", true);
    roleClass.showData();

    // Clases con funcionen genericas
    class CreateCouple<T> {
        key: T;

        constructor(key: T) {
            this.key = key;
        }

        addPair<U>(value: U) {
            return { key: this.key,  value}
        }
    }

    const createCouple1 = new CreateCouple("id");
    console.log(createCouple1.addPair(123));
};

export { contenido as Genericos };
