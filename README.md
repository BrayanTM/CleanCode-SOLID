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
