# vector-2d

Pure functions to manipulate 2d vectors

```
npm i @arekrado/vector-2d
```

```ts
type Vector2D = {
  x: number
  y: number
}
```

- vector

```ts
type Vector = (x: number, y: number) => Vector2D
```

```js
vector(5, 10) // { x: 5, y: 10 }
```

- vectorZero

```ts
type VectorZero = () => Vector2D
```

```js
vectorZero() // { x: 0, y: 00 }
```

- vectorUp

```ts
type VectorZero = () => Vector2D
```

```js
vectorUp() // { x: 0, y: 1 }
```

- vectorRight

```ts
type VectorZero = () => Vector2D
```

```js
vectorRight() // { x: 1, y: 0 }
```

- vectorDown

```ts
type VectorZero = () => Vector2D
```

```js
vectorDown() // { x: 0, y: -1 }
```

- vectorLeft

```ts
type VectorZero = () => Vector2D
```

```js
vectorLeft() // { x: -1, y: 0 }
```

- vectorOne

```ts
type VectorZero = () => Vector2D
```

```js
vectorOne() // { x: 1, y: 1 }
```

- add

```ts
type Add = (v1: Vector2D, v2: Vector2D) => Vector2D
```

```js
add(vector(2, 2), vector(2, 2)) // { x: 4, y: 4 }
add(vector(-5, 10), vector(3, -3)) // { x: 2, y: 7 }
```

- sub

```ts
type Sub = (v1: Vector2D, v2: Vector2D) => Vector2D
```

```js
sub(vector(2, 2), vector(2, 2)) // { x: 0, y: 0 }
sub(vector(-5, 10), vector(3, -3)) // { x: 8, y: 13 }
```

- divide

```ts
type Sub = (v1: Vector2D, v2: Vector2D) => Vector2D
```

```js
divide(vector(2, 2), vector(2, 2)) // { x: 1, y: 1 }
divide(vector(10, 12), vector(2, 2)) // { x: 5, y: 6 }
```

- multiply

```ts
type Sub = (v1: Vector2D, v2: Vector2D) => Vector2D
```

```js
multiply(vector(2, 2), vector(2, 2)) // { x: 4, y: 4 }
multiply(vector(5, 10), vector(3, -3)) // { x: 15, y: -30 }
```

- scale - multiple vector by scalar (number)

```ts
type Scale = (scalar: number, v: Vector2D) => Vector2D
```

```js
scale(0, vector(1, 1)) // { x: 0, y: 0 }
scale(1, vector(1, 1)) // { x: 1, y: 1 }
scale(10, vector(0.3, 0.4)) //  { x: 3, y: 4 }
```

- magnitude - returns vector length

```ts
type Magnitude = (v: Vector2D) => number
```

```js
magnitude(vectorZero()) // 0
magnitude(vector(3, 4)) // 5
magnitude(vector(-3, -4)) // 5
magnitude(vector(1, 1)) // 1.4142135623730951
magnitude(vector(2, 2)) // 2.8284271247461903
```

- distance - returns distance between two vectors

```ts
type Distance = (v1: Vector2D, v2: Vector2D) => number
```

```js
distance(vectorZero(), vectorZero()) // 0
distance(vector(3, 4), vector(3, 4)) // 0
distance(vector(1, 1), vector(2, 1)) // 1
distance(vector(-1, -1), vector(-2, -1)) // 1
```

- clamp - set vector length

```ts
type Clamp = (v: Vector2D, vMagnitude: number) => Vector2D
```

```js
clamp(vector(3, 4), 5) // { x: 3, y: 4 }
clamp(vector(3, 4), 3) // { x: 1.7999999999999998, y: 2.4 }
```

- equals - compares two vectors

```ts
type Equals = (v1: Vector2D, v2: Vector2D) => boolean
```

```js
equals(vector(1, 1), vector(1, 1)) // true
equals(vector(1, 1), vector(2, 1)) // false
```

- fromArray - parse array to vector

```ts
type FromArray = (arrayOfVectors: [number, number]) => Vector2D
```

```js
fromArray([0, 0]) // { x: 0, y: 0 }
fromArray([1, 1]) // { x: 1, y: 1 }
fromArray([1, 2]) // { x: 1, y: 2 }
fromArray([]) // { x: 0, y: 0 }
fromArray([1]) // { x: 1, y: 0 }
```

- toArray - parse vector to array

```ts
type ToArray = (v: Vector2D) => [number, number]
```

```js
toArray(vectorZero()) // [0, 0]
toArray(vector(1, 1)) // [1, 1]
toArray(vector(1, 2)) // [1, 2]
toArray(vector(0, 0)) // [0, 0]
toArray(vector(1, 0)) // [1, 0]
```

- dot

```ts
type Dot = (v1: Vector2D, v2: Vector2D) => number
```

```js
```

- angle

```ts
type Angle = (v1: Vector2D, v2: Vector2D) => number
```

```js
```

- angleDeg

```ts
type AngleDeg = (v1: Vector2D, v2: Vector2D) => number
```

```js
```

- limit

```ts
type Limit = (v1: Vector2D, v2: Vector2D) => number
```

```js
```

- normalize - returns the same vector but with length equals 1

```ts
type Normalize = (v: Vector2D) => Vector2D
```

```js
normalize(vector(1, 1))) // { x: 0.7071067811865475, y: 0.7071067811865475 }
normalize(vector(1, 0)) // { x: 1, y: 0 }
```
