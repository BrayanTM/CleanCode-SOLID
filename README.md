# 🏛️ Principios SOLID y Clean Code

# Clean Code

## Deuda Técnica

**¿Qué es?**
 
 La falta de calidad en el código, que genera una deuda que repercutirá en costos futuros.

**Costos Económicos**

- Tiempo en realizar mantenimientos.
- Tiempo en refactorizar código.
- Tiempo en comprender el código.
- Tiempo adicional en la transferencia del código.

### Esquema de deuda técnica de Martin Fowler

|Imprudente<br>No hay tiempo, sólo copia y pega eso de nuevo|Prudente<br>Tenemos que entregar rápido, ya refactorizaremos|
|:-:|:-:|
|**Inadvertido<br>"¿Qué son patrones de diseños?"**|**"Ahora sabemos cómo lo deberíamos haber hecho"**|

Caer en deuda técnica es normal y a menudo es inevitable, lo que diferencia a un programador normal con un buen programador es que este esta conciente de la deuda técnica y se preocupa por pagar esa deuda técnica.

### ¿Cómo se paga una deuda técnica?

**Refactorización**

Es simplemente un proceso que tiene como objetivo mejorar el código sin alterar su comportamiento para que sea más entendible y tolerante a cambios.

Usualmente para que una refactorización fuerte tenga el objetivo esperado, es impresindible contar con pruebas automáticas.

El no contar con pruebas automáticas usualmente produce el famoso: "Si funciona, no lo toques".

La mala calidad en el software siempre la acaba pagando o asumiendo alguien.
Ya sea el cliente, el proveedor con recursos o el propio desarrollador dedicando tiempo a refactorizar o malgastando tiempo programando sobre un sistema frágil.

## Clean Code

**¿Qué es?**

> "Código Limpio es aquel que se ha escrito con la intención de que otra persona (o tú mismo en el futuro) lo entienda." - Carlos Blé

> "Nuestro código tiene que ser simple y directo, debería leerse con la misma facilidad que un texto bien escrito." - Grady Booch

> "Programar es el arte de decirle a otro humano lo que quieres que la computadora haga." - Donald Knuth

### Nombres pronunciables y expresivos.

```typescript
// Mal
const n = 53;
const tx = 0.15;
const cat = 'T-Shirts';
const ddmmyyyy = new Date('August 15, 1965 00:00:00');

// Bien
const numberOfUnits = 53;
const tax = 0.15;
const category = 'T-Shirts';
const birthDate = new Date('August 15, 1965 00:00:00');
```

**Ausencia de información técnica en nombres**

```typescript
// Mal
class AbstractUser {};
class UserMixin {};
class UserImplementation {};
interface UserInterface {};

// Mejor
class User {};
interface User {};
```

### Nombres según el tipo de dato

**Arreglos - Arrays**

```typescript
// Malo
const fruit = ['manzana', 'platano', 'fresa']

// Regular
const fruitList = ['manzana', 'platano', 'fresa']

// Bueno
const fruits = ['manzana', 'platano', 'fresa']

// Mejor
const fruitNames = ['manzana', 'platano', 'fresa']
```

**Booleanos - Booleans**

```typescript
// Malo
const open = true;
const write = true;
const fruit = true;
const active = false;
const noValues = true;
const noEmpty = true;

// Mejor
const isOpen = true;
const canWrite = true;
const hasFruit = true;
const isActive = false;
const hasValues = true;
const isEmpty = true;
```

**Números - Numbers**

```typescript
// Malo
const fruits = 3;
const cars = 10;

// Mejor
const maxFruits = 5;
const minFruits = 1;
const totalFruits = 3;

const totalOfCars = 5;
```

**Funciones - Functions**

```typescript
// Malo
createUserIfNoExist();
updateUserIfNotEmpty();
sendEmailIfFieldsValid();

// Mejor
createUser();
updateUser();
sendEmail();
```

### Nombres de Clases

```typescript
// Malo
class Manager {};
class Data {};
class Info {};
class Individual {};
class Processor {};
class SpecialMonsterView {};
```

- El nombre es lo más importante de la clase.
- Formados por un sustantivo o frases de sustantivo.
- No deben ser muy genéricos.
- Usar UpperCamelCase (JS, TS, Python ...)

3 preguntas para determinar/saber si es un buen nombre.

- ¿Qué exactamente hace la clase?
- ¿Cómo exactamente esta clase realiza cierta tarea?
- ¿Hay algo específico sobre su ubicación?

Regla general (no solo para clases): Si aglo no tiene sentido, remuévelo o refactoriza.

**más palabras !== mejor nombre**

```typescript
class SpecialViewingCaseMonsterManagerEventsHandlerActivitySingleton {};
```

### Funciones

> "Sabemos que estamos desarrollando código limpio cuando cada función hace exactamente lo que su nombre indica" - Ward Cunningham

```typescript
// Bien
function sendEmail( toWhom: String ): boolean {
	
	// Verificar correo
	if ( !toWhom.includes('@') ) return false;

	// Construir el cuerpo o mensaje

	// Enviar Correo

	// Si todo sale bien
	return true;
}

// Mal
function sendEmail(): boolean {
	
	// Verificar si el usuario existe

	// Revisar contraseña

	// Crear usuari en base de datos

	// Si todo sale bien
	return true;
}
```

**Parámetros y Argumentos**

Limitar a 3 parámetros posicionales.

```typescript
// Bien
function sendEmail( toWhom: string, from: string, body: string ): boolean {}

// No muy bien
function sendEmail( toWhom: string, from: string, body: string, subject: string, apikey: string ): boolean {}

// No muy bien
function sendEmail( 
	toWhom: string, 
	from: string, 
	body: string, 
	subject: string, 
	apikey: string 
): boolean {}
```

Si necesitamos enviar muchos parametros podemos hacer:

```typescript
// Ejemplo en TypeScript

// Mejor
interface SendEmailOptions {
	toWhom: string;
	from: string;
	body: string; 
	subject: string;
	apikey: string;
}

function sendEmail( { toWhom, from, body, subject, apikey }:SendEmailOptions ): boolean {}
```

**Otras Recomendaciones:**

- Simplicidad es fundamental.
- Funciones de tamaño reducido.
- Funciones de una sola línea sin causar complejidad.
- Menos de 20 líneas.
- Evitar el uso del `else`.
- Priorizar el uso de la condicional ternaria.

## Principio DRY (Don't Repeat Yourself)

> "Si quieres ser un programador productivo esfuérzate en escribir código legible." - Robert C. Martin

- Simplemente es evitar tener duplicidad de código.
- Simplifica las pruebas.
- Ayuda a centralizar los procesos.
- Aplicar el principio DRY, usualmente lleva a refactorizar.

## Estructura de Clases

> "El buen código parece estar escrito por alguien a quien le importa". - Michael Feathers

```typescript
class HtmlElement {

	// Comenzar con lista de propiedades.
	public static domReady: boolean = false;

	private _id: string;
	private type: string;
	private updatedAt: number;
	// ----------------------------------

	// Métodos.
	static createInput( id: string ) {
		return new HtmlElement( id, 'input' );
	}

	constructor( id: string, type: string ) {
		this._id = id;
		this.type = type;
		this.updatedAt = Date.now();
	}

	setType( type: string ) {
		this.type = type;
		this.updatedAt = Date.now();
	}

	get id(): string {
		return this.id;
	}
	// ----------------------------------
}
```

**Comenzar con lista de propiedades:**

1. Propiedades estáticas.
2. Propiedades públicas
3. Propiedades privadas de último.

**Métodos:**

1. Empezando por los constructores estáticos.
2. Luego el constructor.
3. Seguidamente métodos estáticos.
4. Métodos privados después.
5. Resto de métodos de instancia ordenados de mayor a menor importancia.
6. Getters y Setters al final.

## Comentarios

```typescript
// Malos comentarios

const name = 'John Doe';

// Si name es igual a 'John Doe'
if ( name === 'John Doe' ) {
	// entonces...
}
```

Evitar usar comentarios, pero...

Cuando usamos librerías de terceros, API's, frameworks, etc. Nos encontramos ante situaciones en las que escribir un comentario será mejor que dejar una solución compleja o un hack sin explicación.

Los comentarios deberían ser la excepción, no la regla.

> "No comentes el código mal escrito, reescríbelo" - Brian W. Kernighan

Recuerda:
Nuestro código debe ser lo suficientemente auto explicativo.

Pero a veces es necesario comentarlo.
Lo que nosotros deberíamos comentar es ¿El por qué? en lugar del ¿qué? o ¿cómo?.

## Uniformidad en el proyecto

Problemas similares, soluciones similares.

```typescript
// Mantiene uniformidad
const createProduct = () => {
	
}

const updateProduct = () => {
	
}

const deleteProduct = () => {
	
}

// No mantiene uniformidad
const createNewUser = () => {
	
}

const modifyUser = () => {
	
}

const removeUser = () => {
	
}

// Corregido
const createUser = () => {
	
}

const updateUser = () => {
	
}

const deleteUser = () => {
	
}
```

Esto no solo se aplica en el código, hay que aplicar esto también en la estructura de nuestro directorio.

```
componenets/
├── product-list/
├── product-item.ts
```

```
componenets/
├── product-list/
│   └── product-list.html
│   └── product-list.ts
├── product-item.ts
```

```
componenets/
├── product-item/
│   └── product-item.ts
├── product-list/
│   └── product-list.html
│   └── product-list.ts
```

**Identación**

```typescript
// Mala Identación
class Usersettings extends User {
constructor(
	public workingDirectory: string,
	public lastFolderOpen: string,
	email: string,
	role: string,
	name: string,
	gender: Gender,
	birthdate: Date,
){
super(
	email,
	role,
	new Date(),
	name,
	gender,
	birthdate
)
}
}
```

```typescript
// Buena Identación
class Usersettings extends User {
	constructor(
		public workingDirectory: string,
		public lastFolderOpen: string,
		email: string,
		role: string,
		name: string,
		gender: Gender,
		birthdate: Date,
	){
		super(
			email,
			role,
			new Date(),
			name,
			gender,
			birthdate
		)
	}
}
```

## Acrónimo STUPID

6 Code Smells que debemos de evitar.

- **S**ingleton: patrón singleton.
- **T**ight Coupling: alto acoplamiento.
- **U**nestability: código no probable (unit test).
- **P**remature optimization: optimizaciones prematuras.
- **I**ndescriptive Naming: nombres poco descriptivos.
- **D**uplication: duplicidad de código, no aplicar el principio DRY.

### Patrón Singleton

**Pros:**

Garantiza una única instancia de la clase a lo largo de toda la aplicación.

**¿Por qué es Code Smell?**

**Contras:**

- Vive en el contexto global.
- Puede ser modificado por cualquiera y en cualquier momento.
- No es rastreable.
- Difícil de testear debido a su ubicación.

### Acoplamiento y Cohesión

Lo ideal es tener bajo acoplamiento y buena cohesión.

**¿Qué significa esto?**

![61297fbd4757d014987a917449ea48a2.png](:/3763038cbb7c4e47b8a472635bdcdf3e)

**Alto acoplamiento**

Desventajas:

- Un cambio en un módulo por lo general provoca un efecto dominó de los cambios en otros módulos.
- El ensamblaje de módulos puede requerir más esfuerzo y/o tiempo debido a la mayor dependencia entre módulos.
- Un módulo en particualr puede ser más difícil de reutilizar y/o probar porque se deben incluir módulos dependientes.

Posibles soluciones:

- "A" tiene un atributo que se refiere a "B".
- "A" llama a los servicios de un objeto "B".
- "A" tiene un método que hace referencia a "B" (a través del tipo de retorno o parámetro).
- "A" es una subclase de (o implementa) la clase "B".

> "Queremos diseñar componentes que sean auto contenidos, auto suficientes e independientes. Con un objetivo y un propósito bien definido." - The Pragmatic Programmer

**Cohesión**

- La cohesión se refiere a lo que la clase (o módulo) puede hacer.
- La baja cohesión significaría que la clase realiza una gran variedad de acciones: es amplia, no se enfoca en lo que debe hacer.
- Alta cohesión significa que la clase se enfoca en lo que debería estar haciendo, es decir, solo métodos relacionados con la intención de la clase.

**Ideal**

![78980ee7079e7534567bb28e80246b29.png](:/2bae2c85a3794a6aa71baeb2755c3868)

**Acoplamiento**

Se refiere a cuán relacionadas o dependientes son dos clases o módulos entre sí.

- En bajo acoplamiento, cambiar algo importante en una clase no debería afectar a otra.
- En alto acoplamiento, dificultaría el cambio y el mantenimiento de su código; dado que las clases están muy unidas, hacer un cambio podría requerir una renovación completa del sistema.

Un buen diseño de software tiene alta cohesión y bajo acoplamiento.

**Evitar**

![03a32c660897877bf28874df107ef312.png](:/3c4bbb190c1d4d848252346bb337302a)

### Código no probable

Código dificilmente testeable.

- Código con alto acoplamiento.
- Código con muchas dependencias no inyectadas.
- Dependencias en el contexto global (Tipo Singleton).

Debemos de tener en mente las pruebas desde la creación del código.

### Optimizaciones prematuras

Mantener abiertas las opciones retrasando la toma de decisiones nos permite darle mayor relevancia a lo que es más importante en una aplicación.

No debemos anticiparnos a los requisitos y desarrollar abstracciones innecesarias que puedan añadir complejidad accidental.

**Complejidad accidental**

Cuando implementamos una solución compleja a la mínima indispensable.

**Complejidad esencial**

La complejidad es inherente al problema.

### Nombres poco descriptivos

- Nombres de variables mal nombradas.
- Nombres de clases genéricas.
- Nombres de funciones mal nombradas.
- Ser muy específico o demasiado genérico.

La única medida de calidad de código es el "WTF" por minuto.

### Duplicidad de Código

No aplicar el principio DRY

|Real|Accidental|
|:--|:--|
|- Código es idéntico y cumple la misma función.<br> - Un cambio implicaría actualizar tod el código idéntico en varios lugares. <br> - Incrementa posibilidades de error humano al olvidar una parte para actualizar.<br> - Mayor cantidad de pruebas innecesarias.|- Código luce similar pero cumple funciones distintas.<br> - Cuando hay un cambio, sólo hay que modificar un solo lugar. <br> - Este tipo de duplicidad se puede trabajar con parámetros u optimizaciones.|

### Otros "Code Smells"

[Ver Refactoring.guru](https://refactoring.guru/)

- Inflación
	- Funciones y Clases muy largas.
- Obsesión Primitiva
	- Abusar del uso de datos primitivos.
- Lista larga de parámetros.
	- Más de 3 o 4 métodos en un método.

**Acopladores**

Todos los olores de este grupo contribuyen al acoplamiento excesivo entre clases o muestran lo que sucede si el acoplamiento se reemplaza por una delegación excesiva.

- Feature Envy
	- Un métod accede más a los datos de otro método más que a sus propios datos.
- Intimidad Inapropiada
	- Cuando una clase usa campos y metodos internos de otra clase.
- Cadenas de mensajes
	- Cuando tenemos una función "A", que llama a "B", "C", "D" para llegar a "E".
- The Middle Man
	- Si una clase realiza solo una acción y esa acción es delegar el trabajo a otra clase.

# Principios SOLID

Los principios SOLID	nos indican cómo organizar nuestras funciones y estructuras de datos en componenetes y cómo dichos componentes deben estar interconectados.

Los  5 principios S.O.L.I.D. de diseño de software son:

- **S** – Single Responsibility Principle (SRP)
- **O** – Open/Closed Principle (OCP)
- **L** – Liskov Substitution Principle (LSP)
- **I** – Interface Segregation Principle (ISP)
- **D** – Dependency Inversion Principle (DIP)

## SRP - Principio de Responsabilidad Única

> "Nunca debería haber más de un motivo por el cual cambiar una clase o módulo" - Robert C. Martin

"tener una única responsabilidad" !== "hacer una única cosa"

**Detectar violaciones de SRP**

- Nombres de clases y módulos demasiado genéricos.
- Cambios en el código suelen afectar la clase o módulo.
- La clase involucra múltiples capas.
- Número elevado de importaciones.
- Cantidad elevada de métodos públicos.
- Excesivo número de líenas de código.

## OCP - Principio de Abierto y Cerrado

Es un principio que depende mucho del contexto.

Establece que las entidades de sortware (clases, módulos, métodos, etc.) deben estar abiertas para la extensión, pero cerradas para la modificación.

La forma más sencilla de demostrar este principio es considerar un método que hace una cosa.

![193abf58c1c62d0f201638e364856ee8.png](:/6b53500c0aaf4157917596c264672068)

El principio abierto-cerrado también se puede lograr de muchas otras maneras, incluso mediante el uso de la herencia o mediante patrones de diseño de composición como el patrón de estrategia.

**Detectar violaciones de OPC**

- Cambios normalmente afectan nuestra clase o módulo.
- Cuando una clase o módulo afecta muchas capas. (Presentación, almacenamiento, etc.)

## LSP - Principio de Substitución de Liskov

> "Las funciones que utilicen punteros o referencias a clases base deben ser capaces de usar objetos de clases derivadas sin saberlo" - Robert C. Martin

"Siendo U un subtipo de T, cualquier instancia de T debería poder ser sustituida por cualquier instancia de U sin alterar las propiedades del sistema."


## ISP - Principio de Segregación de Interfaz

> "Los clientes no deberían estar obligados a depender de interfaces que no utilicen" - Robert C. Martin

Este principioi establece que los clientes no deberían verse forzados a depender de interfaces que no usan.

**Detectar violaciones de ISP**

- Si las interfaces que diseñamos nos obligan a violar los principios de responsabilidad única y substitución de Liskov.

## DIP - Principio de Inversión de Dependencias

> "Los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones. Las abstracciones no deben depender de concreciones. Los detalles deben depender de abstracciones." - Robert C. Martin

- Los módulos de alto nivel no deberían depender de módulos de bajo nivel.
- Ambos deberían depender de abstracciones.
- Las abstraccines no deberían depender de detalles.
- Los detalles deberían depender de abstracciones.

Los componenetes más importantes son aquellos centrados en resolver el problema subyacente al negocio, es decir, la capa de dominio.

Los menos importantes son los que están próximos a la infraestructura, es decir, aquellos relacionados con la UI, la persistencia, la comunicación con API externas, etc.

**Depender de abstracciones**

Nos estamos refiriendo a clases abstractas o interfaces.

Uno de los motivos más importantes por el cual las reglas de negocio o capa de dominio deben depender de estas y no de concreciones es que aumenta su tolerancia al cambio.

**¿Por qué obtenemos este beneficio?**

Cada cambio en un componente abstracto implica un cambio en su implementación.

Por el contrario, los cambios en implementaciones concretas, la mayoría de las veces, no requieren cambios en las interfaces que implementa.

**Inyección de Dependencias**

Dependencia en programación, significa que un módulo o componenete requiere de otro para poder realizar su trabajo.

En algún momento nuestro programa o aplicación llegará a estar formado por muchos módulos. Cuando esto pase, es cuando debemos usar inyección de dependencias.

Ejemplo:

```typescript
class UseCase {
	constructor() {
		this.externalService = new ExternalService();
	}

	doSomething() {
		this.externalService.doExternalTask();
	}
}

class ExternalService {
	doExternalTak() {
		console.log("Doing task...")
	}
}
```

```typescript
// Aplicando DIP
class UseCase {
	constructor(externalService: ExternalService) {
		this.externalService = externalService;
	}

	doSomething() {
		this.externalService.doExternalTask();
	}
}

class ExternalService {
	doExternalTak() {
		console.log("Doing task...")
	}
}
```