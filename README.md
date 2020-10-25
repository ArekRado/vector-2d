# vector-2d - [Demo](https://zen-snyder-043613.netlify.com/)

Pure functions to manipulate 2d vectors

```
npm i @arekrado/vector-2d
```

```ts
type Vector2D = [number, number]
```

- vector

```ts
type Vector = (x: number, y: number) => Vector2D
```

```js
vector(5, 10) // [5, 10]
```

- vectorZero

```ts
type VectorZero = () => Vector2D
```

```js
vectorZero() // [0, 00]
```

- vectorUp

```ts
type VectorZero = () => Vector2D
```

```js
vectorUp() // [0, 1]
```

- vectorRight

```ts
type VectorZero = () => Vector2D
```

```js
vectorRight() // [1, 0]
```

- vectorDown

```ts
type VectorZero = () => Vector2D
```

```js
vectorDown() // [0, -1]
```

- vectorLeft

```ts
type VectorZero = () => Vector2D
```

```js
vectorLeft() // [-1, 0]
```

- vectorOne

```ts
type VectorZero = () => Vector2D
```

```js
vectorOne() // [1, 1]
```

- add

```ts
type Add = (v1: Vector2D, v2: Vector2D) => Vector2D
```

```js
add(vector(2, 2), vector(2, 2)) // [4, 4]
add(vector(-5, 10), vector(3, -3)) // [2, 7]
```

- sub

```ts
type Sub = (v1: Vector2D, v2: Vector2D) => Vector2D
```

```js
sub(vector(2, 2), vector(2, 2)) // [0, 0]
sub(vector(-5, 10), vector(3, -3)) // [8, 13]
```

- divide

```ts
type Sub = (v1: Vector2D, v2: Vector2D) => Vector2D
```

```js
divide(vector(2, 2), vector(2, 2)) // [1, 1]
divide(vector(10, 12), vector(2, 2)) // [5, 6]
```

- multiply

```ts
type Sub = (v1: Vector2D, v2: Vector2D) => Vector2D
```

```js
multiply(vector(2, 2), vector(2, 2)) // [4, 4]
multiply(vector(5, 10), vector(3, -3)) // [15, -30]
```

- scale - multiple vector by scalar (number)

```ts
type Scale = (scalar: number, v: Vector2D) => Vector2D
```

```js
scale(0, vector(1, 1)) // [0, 0]
scale(1, vector(1, 1)) // [1, 1]
scale(10, vector(0.3, 0.4)) //  [3, 4]
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
clamp(vector(3, 4), 5) // [3, 4]
clamp(vector(3, 4), 3) // [1.7999999999999998, 2.4]
```

- equals - compares two vectors

```ts
type Equals = (v1: Vector2D, v2: Vector2D) => boolean
```

```js
equals(vector(1, 1), vector(1, 1)) // true
equals(vector(1, 1), vector(2, 1)) // false
```

- dot - https://en.wikipedia.org/wiki/Dot_product - "how parallel the vectors are to each other"

```ts
type Dot = (v1: Vector2D, v2: Vector2D) => number
```

```js
dot(vectorZero(), vectorZero()) // 0
dot(vector(1, 1), vector(1, 1)) // 2
dot(vectorUp(), vectorDown()) // -1
dot(vectorUp(), vectorLeft()) // 0
dot(vectorDown(), vectorRight()) // 0
```

- angle - calculates angle between two vectors and returns result in radians

```ts
type Angle = (v1: Vector2D, v2: Vector2D) => number
```

```js
angle(vectorZero(), vectorZero()) // 1.5707963267948966
angle(vector(1, 1), vector(1, 1)) // 2.1073424255447017e-8
angle(vectorUp(), vectorDown()) // 3.141592653589793
angle(vectorUp(), vectorLeft()) // 1.5707963267948966
angle(vectorDown(), vectorRight()) // 1.5707963267948966
```

- angleDeg - calculates angle between two vectors and returns result in degrees (360)

```ts
type AngleDeg = (v1: Vector2D, v2: Vector2D) => number
```

```js
angleDeg(vectorZero(), vectorZero()) // 90
angleDeg(vector(1, 1), vector(1, 1)) // 0.0000012074182697257333
angleDeg(vectorUp(), vectorDown()) // 180
angleDeg(vectorUp(), vectorLeft()) // 90
angleDeg(vectorDown(), vectorRight()) // 90
```

- limit - clamp vector length between two values if exceeds them

```ts
type Limit = (v: Vector2D, min: number, max: number) => Vector2D
```

```js
limit(vectorZero(), 0, 0) // [3, 4]
limit(vector(3, 4), 0, 2) /// [0, 0]
limit(vector(3, 4), 0, 5) // [1.2, 1.6]
limit(vector(-3, -4), 0, 2) // [-1.2, -1.6]
```

- normalize - returns the same vector but with length equals 1

```ts
type Normalize = (v: Vector2D) => Vector2D
```

```js
normalize(vectorZero()) // [0, 0]
normalize(vector(1, 1))) // [0.7071067811865475, 0.7071067811865475]
normalize(vector(1, 0)) // [1, 0]
```
