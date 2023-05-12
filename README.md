Instalacion de TS:

1. Instalar TS: npm i --save-dev typescript tslint @types/node
2. Crear archivo de configuracion: tsconfig.json
3. Generar el index del archivo a transpilar a JS. En este caso se creo src/index.ts
4. Compilar archivo TS. ./node_modules/.bin/tsc
5. Correr codigo JS transpilado. node ./dist/index.js