import {describe, test, expect} from 'bun:test'
import * as _ from '.'

describe('typed module', () => {
  describe('isArray function', () => {
    test('returns false for null', () => {
      const result = _.isArray(null)
      expect(result).toBe(false)
    })
    test('returns false for undefined', () => {
      const result = _.isArray(undefined)
      expect(result).toBe(false)
    })
    test('returns false for boolean', () => {
      const result = _.isArray(false)
      expect(result).toBe(false)
    })
    test('returns false for object', () => {
      const result = _.isArray({})
      expect(result).toBe(false)
    })
    test('returns false for class instance', () => {
      class Data {}
      const result = _.isArray(new Data())
      expect(result).toBe(false)
    })
    test('returns false for number', () => {
      const result = _.isArray(22)
      expect(result).toBe(false)
    })
    test('returns false for string', () => {
      const result = _.isArray('abc')
      expect(result).toBe(false)
    })
    test('returns true for array', () => {
      const result = _.isArray([1, 2, 3])
      expect(result).toBeTrue()
    })
    test('returns true for empty array', () => {
      const result = _.isArray([])
      expect(result).toBeTrue()
    })
  })

  describe('isObject function', () => {
    test('returns false for null', () => {
      const result = _.isObject(null)
      expect(result).toBe(false)
    })
    test('returns false for undefined', () => {
      const result = _.isObject(undefined)
      expect(result).toBe(false)
    })
    test('returns false for boolean', () => {
      const result = _.isObject(false)
      expect(result).toBe(false)
    })
    test('returns false for class instance', () => {
      class Data {}
      const result = _.isObject(new Data())
      expect(result).toBe(false)
    })
    test('returns false for number', () => {
      const result = _.isObject(22)
      expect(result).toBe(false)
    })
    test('returns false for string', () => {
      const result = _.isObject('abc')
      expect(result).toBe(false)
    })
    test('returns false for array', () => {
      const result = _.isObject([1, 2, 3])
      expect(result).toBe(false)
    })
    test('returns true for object', () => {
      const result = _.isObject({})
      expect(result).toBeTrue()
    })
  })

  describe('isPrimitive function', () => {
    test('returns true for all the primitives', () => {
      const arr = [
        1.1,
        'How you doin?',
        false,
        Symbol('key'),
        BigInt('1'),
        undefined,
        null
      ]

      for (const elm of arr) {
        expect(_.isPrimitive(elm)).toBeTrue()
      }
    }),
      test('returns false for non-primitives', () => {
        const arr = [new Date(), Number, {}, Object({}), () => 0, [1, 2]]

        for (const elm of arr) {
          expect(_.isPrimitive(elm)).toBeFalse()
        }
      })
  })

  describe('isFunction function', () => {
    test('returns false for null', () => {
      const result = _.isFunction(null)
      expect(result).toBe(false)
    })
    test('returns false for undefined', () => {
      const result = _.isFunction(undefined)
      expect(result).toBe(false)
    })
    test('returns false for boolean', () => {
      const result = _.isFunction(false)
      expect(result).toBe(false)
    })
    test('returns false for class instance', () => {
      class Data {}
      const result = _.isFunction(new Data())
      expect(result).toBe(false)
    })
    test('returns false for number', () => {
      const result = _.isFunction(22)
      expect(result).toBe(false)
    })
    test('returns false for string', () => {
      const result = _.isFunction('abc')
      expect(result).toBe(false)
    })
    test('returns false for array', () => {
      const result = _.isFunction([1, 2, 3])
      expect(result).toBe(false)
    })
    test('returns false for object', () => {
      const result = _.isFunction({})
      expect(result).toBe(false)
    })
    test('returns true for anonymous function', () => {
      const result = _.isFunction(function () {
        return 'hello'
      })
      expect(result).toBeTrue()
    })
    test('returns true for arrow function', () => {
      const result = _.isFunction(() => {
        return 'hello'
      })
      expect(result).toBeTrue()
    })
    test('returns true for named function', () => {
      function sayHello() {
        return 'hello'
      }
      const result = _.isFunction(sayHello)
      expect(result).toBeTrue()
    })
  })

  describe('isString function', () => {
    test('returns false for null', () => {
      const result = _.isString(null)
      expect(result).toBe(false)
    })
    test('returns false for undefined', () => {
      const result = _.isString(undefined)
      expect(result).toBe(false)
    })
    test('returns false for boolean', () => {
      const result = _.isString(false)
      expect(result).toBe(false)
    })
    test('returns false for class instance', () => {
      class Data {}
      const result = _.isString(new Data())
      expect(result).toBe(false)
    })
    test('returns false for number', () => {
      const result = _.isString(22)
      expect(result).toBe(false)
    })
    test('returns false for array', () => {
      const result = _.isString([1, 2, 3])
      expect(result).toBe(false)
    })
    test('returns false for object', () => {
      const result = _.isString({})
      expect(result).toBe(false)
    })
    test('returns true for string', () => {
      const result = _.isString('abc')
      expect(result).toBeTrue()
    })
    test('returns true for string class', () => {
      const result = _.isString(String('abc'))
      expect(result).toBeTrue()
    })
  })

  describe('isNumber function', () => {
    test('returns false for null', () => {
      const result = _.isNumber(null)
      expect(result).toBe(false)
    })
    test('returns false for undefined', () => {
      const result = _.isNumber(undefined)
      expect(result).toBe(false)
    })
    test('returns false for boolean', () => {
      const result = _.isNumber(false)
      expect(result).toBe(false)
    })
    test('returns false for class instance', () => {
      class Data {}
      const result = _.isNumber(new Data())
      expect(result).toBe(false)
    })
    test('returns true for int', () => {
      const result = _.isNumber(22)
      expect(result).toBeTrue()
    })
    test('returns true for float', () => {
      const result = _.isNumber(22.0567)
      expect(result).toBeTrue()
    })
    test('returns false for NaN', () => {
      const result = _.isNumber(NaN)
      expect(result).toBe(false)
    })
    test('returns false for array', () => {
      const result = _.isNumber([1, 2, 3])
      expect(result).toBe(false)
    })
    test('returns false for object', () => {
      const result = _.isNumber({})
      expect(result).toBe(false)
    })
    test('returns false for string', () => {
      const result = _.isNumber('abc')
      expect(result).toBe(false)
    })
    test('returns false for string class', () => {
      const result = _.isNumber(String('abc'))
      expect(result).toBe(false)
    })
  })

  describe('isInt function', () => {
    class Data {}
    test('returns false for non-number values', () => {
      expect(_.isInt(undefined)).toBeFalse()
      expect(_.isInt(null)).toBeFalse()
      expect(_.isInt(false)).toBeFalse()
      expect(_.isInt(new Data())).toBeFalse()
      expect(_.isInt(NaN)).toBeFalse()
      expect(_.isInt([1, 2, 3])).toBeFalse()
      expect(_.isInt({})).toBeFalse()
      expect(_.isInt('abc')).toBeFalse()
      expect(_.isInt(String('abc'))).toBeFalse()
    })
    test('returns true for int', () => {
      const result = _.isInt(22)
      expect(result).toBeTrue()
    })
    test('returns false for float', () => {
      const result = _.isInt(22.0567)
      expect(result).toBe(false)
    })
  })

  describe('isFloat function', () => {
    class Data {}
    test('returns false for non-number values', () => {
      expect(_.isFloat(undefined)).toBeFalse()
      expect(_.isFloat(null)).toBeFalse()
      expect(_.isFloat(false)).toBeFalse()
      expect(_.isFloat(new Data())).toBeFalse()
      expect(_.isFloat(NaN)).toBeFalse()
      expect(_.isFloat([1, 2, 3])).toBeFalse()
      expect(_.isFloat({})).toBeFalse()
      expect(_.isFloat('abc')).toBeFalse()
      expect(_.isFloat(String('abc'))).toBeFalse()
    })
    test('returns false for int', () => {
      const result = _.isFloat(22)
      expect(result).toBe(false)
    })
    test('returns true for float', () => {
      const result = _.isFloat(22.0567)
      expect(result).toBeTrue()
    })
  })

  describe('isEmpty function', () => {
    class Data {}
    class Person {
      name: string = 'ray'
    }
    test('returns true for empty values', () => {
      expect(_.isEmpty(null)).toBeTrue()
      expect(_.isEmpty(undefined)).toBeTrue()
      expect(_.isEmpty(new Data())).toBeTrue()
      expect(_.isEmpty(0)).toBeTrue()
      expect(_.isEmpty(true)).toBeTrue()
      expect(_.isEmpty([])).toBeTrue()
      expect(_.isEmpty(false)).toBeTrue()
      expect(_.isEmpty({})).toBeTrue()
      expect(_.isEmpty('')).toBeTrue()
      expect(_.isEmpty(String())).toBeTrue()
      expect(_.isEmpty(new Map())).toBeTrue()
      expect(_.isEmpty(new Date('invalid value'))).toBeTrue()
    })
    test('returns false for non-empty values', () => {
      expect(_.isEmpty(new Date())).toBeFalse()
      expect(_.isEmpty(new Date('2022-09-01T02:19:55.976Z'))).toBeFalse()
      expect(_.isEmpty(22)).toBeFalse()
      expect(_.isEmpty(new Person())).toBeFalse()
      expect(_.isEmpty({ name: 'x' })).toBeFalse()
      expect(_.isEmpty('abc')).toBeFalse()
      expect(_.isEmpty(String('abc'))).toBeFalse()
      expect(_.isEmpty([1, 2, 3])).toBeFalse()
      expect(_.isEmpty(function work() {})).toBeFalse()
      expect(_.isEmpty(() => {})).toBeFalse()
      expect(_.isEmpty(Symbol(''))).toBeFalse()
      expect(_.isEmpty(Symbol('hello'))).toBeFalse()
      const map = new Map()
      map.set('a', 1)
      expect(_.isEmpty(map)).toBeFalse()
    })
  })

  describe('isDate function', () => {
    test('return true for Date values', () => {
      expect(_.isDate(new Date())).toBeTrue()
      expect(_.isDate(new Date('2022-09-01T02:19:55.976Z'))).toBeTrue()
      expect(_.isDate(new Date('invalid value'))).toBeTrue()
    })
    test('return false for non-Date values', () => {
      expect(_.isDate(22)).toBeFalse()
      expect(_.isDate({ name: 'x' })).toBeFalse()
      expect(_.isDate('abc')).toBeFalse()
      expect(_.isDate(String('abc'))).toBeFalse()
      expect(_.isDate([1, 2, 3])).toBeFalse()
      expect(_.isDate(function work() {})).toBeFalse()
      expect(_.isDate(() => {})).toBeFalse()
      expect(_.isDate(Symbol(''))).toBeFalse()
      expect(_.isDate(Symbol('hello'))).toBeFalse()
    })
  })

  describe('isPromise function', () => {
    test('return true for Promise values', () => {
      expect(_.isPromise(new Promise(res => res(0)))).toBeTrue()
      expect(_.isPromise(new Promise(res => res('')))).toBeTrue()
      expect(_.isPromise((async () => {})())).toBeTrue()
    })
    test('return false for non-Date values', () => {
      expect(_.isPromise(22)).toBeFalse()
      expect(_.isPromise({ name: 'x' })).toBeFalse()
      expect(_.isPromise('abc')).toBeFalse()
      expect(_.isPromise(String('abc'))).toBeFalse()
      expect(_.isPromise([1, 2, 3])).toBeFalse()
      expect(_.isPromise(function work() {})).toBeFalse()
      expect(_.isPromise(() => {})).toBeFalse()
      expect(_.isPromise(Symbol(''))).toBeFalse()
      expect(_.isPromise(Symbol('hello'))).toBeFalse()
      expect(_.isPromise({ then: 2 })).toBeFalse()
    })
  })

  describe('isSymbol function', () => {
    test('returns false for null', () => {
      const input = null
      const result = _.isSymbol(input)
      expect(result).toBe(false)
    })
    test('returns false for undefined', () => {
      const input = undefined
      const result = _.isSymbol(input)
      expect(result).toBe(false)
    })
    test('returns false for empty class instance', () => {
      class Data {}
      const input = new Data()
      const result = _.isSymbol(input)
      expect(result).toBe(false)
    })
    test('returns false for class instance with properties', () => {
      class Data {
        name: string = 'ray'
      }
      const input = new Data()
      const result = _.isSymbol(input)
      expect(result).toBe(false)
    })
    test('returns false for number greater than 0', () => {
      const input = 22
      const result = _.isSymbol(input)
      expect(result).toBe(false)
    })
    test('returns false for number 0', () => {
      const input = 0
      const result = _.isSymbol(input)
      expect(result).toBe(false)
    })
    test('returns false for array with values', () => {
      const input = [1, 2, 3]
      const result = _.isSymbol(input)
      expect(result).toBe(false)
    })
    test('returns false for empty array', () => {
      const input: unknown[] = []
      const result = _.isSymbol(input)
      expect(result).toBe(false)
    })
    test('returns false for true', () => {
      const input = true
      const result = _.isSymbol(input)
      expect(result).toBe(false)
    })
    test('returns false for false', () => {
      const input = false
      const result = _.isSymbol(input)
      expect(result).toBe(false)
    })
    test('returns false for empty object', () => {
      const input = {}
      const result = _.isSymbol(input)
      expect(result).toBe(false)
    })
    test('returns false for object with values', () => {
      const input = { name: 'x' }
      const result = _.isSymbol(input)
      expect(result).toBe(false)
    })
    test('returns false for string with chars', () => {
      const input = 'abc'
      const result = _.isSymbol(input)
      expect(result).toBe(false)
    })
    test('returns false for empty string', () => {
      const input = ''
      const result = _.isSymbol(input)
      expect(result).toBe(false)
    })
    test('returns false for empty string class', () => {
      const input = ''
      const result = _.isSymbol(input)
      expect(result).toBe(false)
    })
    test('returns false for string class with chars', () => {
      const input = 'abc'
      const result = _.isSymbol(input)
      expect(result).toBe(false)
    })
    test('returns false for empty Map', () => {
      const input = new Map()
      const result = _.isSymbol(input)
      expect(result).toBe(false)
    })
    test('returns true for empty Symbol', () => {
      const input = Symbol('')
      const result = _.isSymbol(input)
      expect(result).toBeTrue()
    })
    test('returns true for Symbol instance', () => {
      const input = Symbol('hello')
      const result = _.isSymbol(input)
      expect(result).toBeTrue()
    })
    test('returns false for Map with values', () => {
      const input = new Map()
      input.set('a', 1)
      input.set('b', 2)
      input.set('c', 3)
      const result = _.isSymbol(input)
      expect(result).toBe(false)
    })
  })

  describe('isEqual function', () => {
    class Person {
      name: string
      friends: Person[] = []
      self?: Person
      constructor(name: string) {
        this.name = name
      }
    }
    const jake = new Person('jake')
    jake.self = jake
    jake.friends = [jake, jake]
    const symbolKey = Symbol('symkey')
    const complex = {
      num: 0,
      str: '',
      boolean: true,
      unf: void 0,
      nul: null,
      obj: { name: 'object', id: 1, chilren: [0, 1, 2] },
      arr: [0, 1, 2],
      func() {
        console.log('function')
      },
      loop: null as any,
      person: jake,
      date: new Date(0),
      reg: new RegExp('/regexp/ig'),
      [symbolKey]: 'symbol'
    }
    complex.loop = complex
    test('returns true for equal things', () => {
      expect(_.isEqual(0, 0)).toBeTrue()
      expect(_.isEqual('a', 'a')).toBeTrue()
      const hello = Symbol('hello')
      expect(_.isEqual(hello, hello)).toBeTrue()
      expect(_.isEqual({}, {})).toBeTrue()
      expect(_.isEqual(true, true)).toBeTrue()
      expect(_.isEqual(new RegExp(/a*s/), new RegExp(/a*s/))).toBeTrue()
      const now = new Date()
      expect(_.isEqual(now, now)).toBeTrue()
      expect(_.isEqual([], [])).toBeTrue()
      expect(_.isEqual(complex, { ...complex })).toBeTrue()
      expect(
        _.isEqual([complex, complex], [{ ...complex }, { ...complex }])
      ).toBeTrue()
    })
    test('returns false for non-equal things', () => {
      expect(_.isEqual(0, 1)).toBeFalse()
      expect(_.isEqual('a', 'b')).toBeFalse()
      expect(_.isEqual(new RegExp(/^http:/), new RegExp(/https/))).toBeFalse()
      expect(_.isEqual(Symbol('hello'), Symbol('goodbye'))).toBeFalse()
      expect(_.isEqual({ z: 23 }, { a: 1 })).toBeFalse()
      expect(_.isEqual(true, false)).toBeFalse()
      expect(
        _.isEqual(new Date(), new Date('2022-09-01T03:25:12.750Z'))
      ).toBeFalse()
      expect(_.isEqual([], [1])).toBeFalse()
      expect(_.isEqual(complex, { ...complex, num: 222 })).toBeFalse()
      expect(_.isEqual([complex], [{ ...complex, num: 222 }])).toBeFalse()
    })
  })
})
