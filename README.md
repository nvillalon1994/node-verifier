#Dependencias instaladas

npm init=>Creamos un proyecto de Node(o más bien lo iniciamos)

npm i express⇒instala express y nos permite crear una aplicacion con node. Proporciona mecanismos de escritura de manejadores de peticiones de diferentes verbos de HTTP en diferente caminos(URL)

npm i dotenv ⇒ se utiliza para obtener a nivel de proyecto un archivo .env al que se puede hacer consultas de cierta informacion privada que no se subira a nuestro repositorio

npm i -D typescript @types/express @types/node =>Instalamos una extencion de tyescript para node y express

npm i -D concurrently

npm i -dev webpack webpack-cli webpack-node-externals webpack-shell-plugin => instala webpack que es un empaquetador que permite incluir todos los archivos de js en un unico archivo.

npm i -D eslint jest ts-jest @types/jest supertest =>Instala eslint, que es una herramienta que analiza fuentes de codigo e identifica posibles errores de programacion. Tambien se instala Jest que es una framework de testing de JavaScript diseñada para asegurar que el codigo y este correcto .

npm i -D ts-node=> se instala una extension de typescript para node.

#Scripts

"build": "npx tsc" => Esto es un script para activar el transpilador de Typescript

"start": "node dist/index.js" => La carpeta /dist también contiene todos los archivos necesarios para ejecutar/construir un módulo para usar con otras plataformas.

"dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\""=> Permite inicializar el proyecto de manera local y que los cambios se visualicen de manera inmediata 

"test": "jest" => se encarga de realizar el test unitario con el framework Jest

"serve:coverage":"npm run test && cd coverage/lcov-report && npx serve" => Ejecuta el test unitario con Jest y luego genera un informe en el servidor mostrando los resultados del test