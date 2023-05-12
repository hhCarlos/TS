import { Genericos } from './generics/index';
import { Variables } from './variables/index';
import { Clases } from './classes/index';

function runModule(moreModules: Function[]): void {
    if (moreModules.length) {
        moreModules.forEach((modulo: Function) => {
            modulo();
        });   
    }
}

const modulesToRun = [Variables, Clases ,Genericos];

runModule([...modulesToRun]);
