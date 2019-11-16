import {
  vector,
  vectorZero,
  vectorUp,
  vectorRight,
  vectorDown,
  vectorLeft,
  vectorOne,
  add,
  sub,
  divide,
  multiply,
  scale,
  magnitude,
  distance,
  clamp,
  equals,
  fromArray,
  toArray,
  // dot,
  // angle,
  // angleDeg,
  // limit,
  normalize,
} from './index'

describe('vector', () => {
  it('should return object', () => {
    expect(typeof vector(0, 0)).toBe('object')
  })

  it('should return vector structure with correct values', () => {
    expect(vector(0, 0)).toEqual({ x: 0, y: 0 })
    expect(vector(1, 1)).toEqual({ x: 1, y: 1 })
    expect(vector(-1, 0)).toEqual({ x: -1, y: 0 })
  })
})

describe('vectorZero', () => {
  it('should return object', () => {
    expect(typeof vectorZero()).toBe('object')
  })

  it('should return vector structure with correct values', () => {
    expect(vectorZero()).toEqual({ x: 0, y: 0 })
  })
})

describe('vectorUp', () => {
  it('should return object', () => {
    expect(typeof vectorUp()).toBe('object')
  })

  it('should return vector structure with correct values', () => {
    expect(vectorUp()).toEqual({ x: 0, y: 1 })
  })
})

describe('vectorRight', () => {
  it('should return object', () => {
    expect(typeof vectorRight()).toBe('object')
  })

  it('should return vector structure with correct values', () => {
    expect(vectorRight()).toEqual({ x: 1, y: 0 })
  })
})

describe('vectorDown', () => {
  it('should return object', () => {
    expect(typeof vectorDown()).toBe('object')
  })

  it('should return vector structure with correct values', () => {
    expect(vectorDown()).toEqual({ x: 0, y: -1 })
  })
})

describe('vectorLeft', () => {
  it('should return object', () => {
    expect(typeof vectorLeft()).toBe('object')
  })

  it('should return vector structure with correct values', () => {
    expect(vectorLeft()).toEqual({ x: -1, y: 0 })
  })
})

describe('vectorOne', () => {
  it('should return object', () => {
    expect(typeof vectorOne()).toBe('object')
  })

  it('should return vector structure with correct values', () => {
    expect(vectorOne()).toEqual({ x: 1, y: 1 })
  })
})

describe('add', () => {
  it('should add two vectors', () => {
    expect(add(vectorZero(), vectorZero())).toEqual(vectorZero())
    expect(add(vector(1, 1), vectorZero())).toEqual(vector(1, 1))
    expect(add(vector(1, 1), vector(1, 1))).toEqual(vector(2, 2))
    expect(add(vector(1, 1), vector(-1, -1))).toEqual(vectorZero())
  })
})

describe('sub', () => {
  it('should sub two vectors', () => {
    expect(sub(vectorZero(), vectorZero())).toEqual(vectorZero())
    expect(sub(vector(1, 1), vectorZero())).toEqual(vector(1, 1))
    expect(sub(vector(1, 1), vector(1, 1))).toEqual(vectorZero())
    expect(sub(vector(1, 1), vector(-1, -1))).toEqual(vector(2, 2))
  })
})

describe('divide', () => {
  it('should divide two vectors', () => {
    // expect(divide(vectorZero(), vectorZero())).toEqual(vectorZero())
    // expect(divide(vector(1, 1), vectorZero())).toEqual(vector(1, 1))
    expect(divide(vector(1, 1), vector(1, 1))).toEqual(vector(1, 1))
    expect(divide(vector(2, 2), vector(1, 1))).toEqual(vector(2, 2))
    expect(divide(vector(4, 4), vector(2, 2))).toEqual(vector(2, 2))
    expect(divide(vector(1, 1), vector(-1, -1))).toEqual(vector(-1, -1))
  })
})

describe('multiply', () => {
  it('should multiply two vectors', () => {
    expect(multiply(vectorZero(), vectorZero())).toEqual(vectorZero())
    expect(multiply(vector(1, 1), vectorZero())).toEqual(vectorZero())
    expect(multiply(vector(1, 1), vector(1, 1))).toEqual(vector(1, 1))
    expect(multiply(vector(2, 2), vector(1, 1))).toEqual(vector(2, 2))
    expect(multiply(vector(4, 4), vector(2, 2))).toEqual(vector(8, 8))
    expect(multiply(vector(1, 1), vector(-1, -1))).toEqual(vector(-1, -1))
    expect(multiply(vector(-1, -1), vector(1, 1))).toEqual(vector(-1, -1))
  })
})

describe('scale', () => {
  it('should change vector length', () => {
    expect(scale(0, vectorZero())).toEqual(vectorZero())
    expect(scale(1, vectorZero())).toEqual(vectorZero())
    expect(scale(0, vector(1, 1))).toEqual(vectorZero())
    expect(scale(1, vector(1, 1))).toEqual(vector(1, 1))
    expect(scale(1, vector(1, 1))).toEqual(vector(1, 1))
    expect(scale(10, vector(0.3, 0.4))).toEqual(vector(3, 4))
    expect(scale(-10, vector(0.3, 0.4))).toEqual(vector(-3, -4))
  })
})

describe('magnitude', () => {
  it('should return vector length', () => {
    expect(magnitude(vectorZero())).toEqual(0)
    expect(magnitude(vector(3, 4))).toEqual(5)
    expect(magnitude(vector(-3, -4))).toEqual(5)
    expect(magnitude(vector(3, -4))).toEqual(5)
    expect(magnitude(vector(-3, 4))).toEqual(5)
    expect(magnitude(vector(1, 1))).toEqual(1.4142135623730951)
    expect(magnitude(vector(2, 2))).toEqual(2.8284271247461903)
  })
})

describe('distance', () => {
  it('should return relative distance between two vectors', () => {
    expect(distance(vectorZero(), vectorZero())).toEqual(0)
    expect(distance(vector(3, 4), vector(3, 4))).toEqual(0)
    expect(distance(vector(1, 1), vector(2, 1))).toEqual(1)
    expect(distance(vector(-1, -1), vector(-2, -1))).toEqual(1)
  })
})

describe('clamp', () => {
  it('should cut vector lenght to max value', () => {
    // expect(clamp(vectorZero(), 1)).toEqual(vectorZero())
    expect(clamp(vector(1, 1), 1)).toEqual(
      vector(0.7071067811865475, 0.7071067811865475),
    )

    expect(clamp(vector(3, 4), 5)).toEqual(vector(3, 4))
    expect(clamp(vector(-3, -4), 5)).toEqual(vector(-3, -4))
    expect(clamp(vector(-3, -4), -5)).toEqual(vector(3, 4))

    expect(clamp(vector(3, 4), 3)).toEqual(vector(1.7999999999999998, 2.4))
    expect(clamp(vector(3, 4), -3)).toEqual(vector(-1.7999999999999998, -2.4))
    expect(clamp(vector(-3, -4), -3)).toEqual(vector(1.7999999999999998, 2.4))
  })
})

describe('equals', () => {
  it('should check vectors equality', () => {
    expect(equals(vector(1, 1), vector(1, 1))).toBe(true)
    expect(equals(vectorZero(), vectorZero())).toBe(true)

    expect(equals(vectorZero(), vector(1, 1))).toBe(false)
    expect(equals(vector(1, 1), vector(2, 1))).toBe(false)
    expect(equals(vector(-1, -1), vector(1, 1))).toBe(false)
  })
})

describe('fromArray', () => {
  it('should parse array to vector', () => {
    expect(fromArray([0, 0])).toEqual(vectorZero())
    expect(fromArray([1, 1])).toEqual(vector(1, 1))
    expect(fromArray([1, 2])).toEqual(vector(1, 2))
    expect(fromArray([] as any)).toEqual(vector(0, 0))
    expect(fromArray([1] as any)).toEqual(vector(1, 0))
  })
})

describe('toArray', () => {
  it('should parse vector to array', () => {
    expect(toArray(vectorZero())).toEqual([0, 0])
    expect(toArray(vector(1, 1))).toEqual([1, 1])
    expect(toArray(vector(1, 2))).toEqual([1, 2])
    expect(toArray(vector(0, 0))).toEqual([0, 0])
    expect(toArray(vector(1, 0))).toEqual([1, 0])
  })
})

describe('normalize', () => {
  it('should the same vector with length equals 1', () => {
    // expect(normalize(vectorZero())).toEqual(vector(0, 0))
    expect(normalize(vector(1, 1))).toEqual(
      vector(0.7071067811865475, 0.7071067811865475),
    )

    expect(normalize(vector(1, 2))).toEqual(
      vector(0.4472135954999579, 0.8944271909999159),
    )
    expect(normalize(vector(1, 0))).toEqual(vector(1, 0))
    expect(normalize(vector(-1, 0))).toEqual(vector(-1, 0))

    expect(magnitude(normalize(vector(1, 1)))).toBe(0.9999999999999999)
    expect(magnitude(normalize(vector(1, 2)))).toBe(0.9999999999999999)
    expect(magnitude(normalize(vector(1, 0)))).toBe(1)
    expect(magnitude(normalize(vector(-1, 0)))).toBe(1)
  })
})
