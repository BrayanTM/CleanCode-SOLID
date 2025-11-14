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

## Nombres pronunciables y expresivos.

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

## Nombres según el tipo de dato

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

## Nombres de Clases

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

## Funciones

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

