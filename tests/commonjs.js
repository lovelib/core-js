/* eslint-disable import/no-dynamic-require */
'use strict';
const ok = require('assert').ok;

for (const PATH of ['..', '../ponyfill']) {
  let O;
  ok(require(`${ PATH }/fn/object/assign`)({ q: 1 }, { w: 2 }).w === 2);
  ok(require(`${ PATH }/fn/object/create`)(Array.prototype) instanceof Array);
  ok(require(`${ PATH }/fn/object/define-property`)({}, 'a', { value: 42 }).a === 42);
  ok(require(`${ PATH }/fn/object/define-properties`)({}, { a: { value: 42 } }).a === 42);
  ok(require(`${ PATH }/fn/object/freeze`)({}));
  ok(require(`${ PATH }/fn/object/get-own-property-descriptor`)({ q: 1 }, 'q').enumerable);
  ok(require(`${ PATH }/fn/object/get-own-property-names`)({ q: 42 })[0] === 'q');
  ok(require(`${ PATH }/fn/object/get-own-property-symbols`)({ [Symbol()]: 42 }).length === 1);
  ok(require(`${ PATH }/fn/object/get-prototype-of`)([]) === Array.prototype);
  ok(require(`${ PATH }/fn/object/is`)(NaN, NaN));
  ok(require(`${ PATH }/fn/object/is-extensible`)({}));
  ok(!require(`${ PATH }/fn/object/is-frozen`)({}));
  ok(!require(`${ PATH }/fn/object/is-sealed`)({}));
  ok(require(`${ PATH }/fn/object/keys`)({ q: 0 })[0] === 'q');
  ok(require(`${ PATH }/fn/object/prevent-extensions`)({}));
  ok(require(`${ PATH }/fn/object/seal`)({}));
  ok(require(`${ PATH }/fn/object/set-prototype-of`)({}, []) instanceof Array);
  ok(require(`${ PATH }/fn/object/entries`)({ q: 2 })[0][0] === 'q');
  ok(require(`${ PATH }/fn/object/values`)({ q: 2 })[0] === 2);
  ok(require(`${ PATH }/fn/object/get-own-property-descriptors`)({ q: 1 }).q.enumerable);
  ok(typeof require(`${ PATH }/fn/object/define-getter`) === 'function');
  ok(typeof require(`${ PATH }/fn/object/define-setter`) === 'function');
  ok(typeof require(`${ PATH }/fn/object/lookup-getter`) === 'function');
  ok(typeof require(`${ PATH }/fn/object/lookup-setter`) === 'function');
  ok('values' in require(`${ PATH }/fn/object`));
  ok(require(`${ PATH }/fn/function/bind`)(function (a, b) {
    return this + a + b;
  }, 1, 2)(3) === 6);
  ok(require(`${ PATH }/fn/function/virtual/bind`).call(function (a, b) {
    return this + a + b;
  }, 1, 2)(3) === 6);
  ok(require(`${ PATH }/fn/function/virtual`).bind.call(function (a, b) {
    return this + a + b;
  }, 1, 2)(3) === 6);
  require(`${ PATH }/fn/function/name`);
  require(`${ PATH }/fn/function/has-instance`);
  // eslint-disable-next-line prefer-arrow-callback
  ok(Function[require(`${ PATH }/fn/symbol/has-instance`)](function () { /* empty */ }));
  ok('bind' in require(`${ PATH }/fn/function`));
  ok(require(`${ PATH }/fn/array/is-array`)([]));
  ok(Array.isArray(require(`${ PATH }/fn/array/from`)('qwe')));
  ok(Array.isArray(require(`${ PATH }/fn/array/of`)('q', 'w', 'e')));
  ok(require(`${ PATH }/fn/array/join`)('qwe', 1) === 'q1w1e');
  ok(require(`${ PATH }/fn/array/slice`)('qwe', 1)[1] === 'e');
  ok(require(`${ PATH }/fn/array/sort`)([1, 3, 2])[1] === 2);
  ok(typeof require(`${ PATH }/fn/array/for-each`) === 'function');
  ok(typeof require(`${ PATH }/fn/array/map`) === 'function');
  ok(typeof require(`${ PATH }/fn/array/filter`) === 'function');
  ok(typeof require(`${ PATH }/fn/array/some`) === 'function');
  ok(typeof require(`${ PATH }/fn/array/every`) === 'function');
  ok(typeof require(`${ PATH }/fn/array/reduce`) === 'function');
  ok(typeof require(`${ PATH }/fn/array/reduce-right`) === 'function');
  ok(typeof require(`${ PATH }/fn/array/index-of`) === 'function');
  ok(typeof require(`${ PATH }/fn/array/last-index-of`) === 'function');
  ok(require(`${ PATH }/fn/array/copy-within`)([1, 2, 3, 4, 5], 0, 3)[0] === 4);
  ok('next' in require(`${ PATH }/fn/array/entries`)([]));
  ok(require(`${ PATH }/fn/array/fill`)(Array(5), 2)[0] === 2);
  ok(require(`${ PATH }/fn/array/find`)([2, 3, 4], it => it % 2) === 3);
  ok(require(`${ PATH }/fn/array/find-index`)([2, 3, 4], it => it % 2) === 1);
  ok('next' in require(`${ PATH }/fn/array/keys`)([]));
  ok('next' in require(`${ PATH }/fn/array/values`)([]));
  ok(require(`${ PATH }/fn/array/includes`)([1, 2, 3], 2));
  ok('next' in require(`${ PATH }/fn/array/iterator`)([]));
  ok(require(`${ PATH }/fn/array/virtual/join`).call('qwe', 1) === 'q1w1e');
  ok(require(`${ PATH }/fn/array/virtual/slice`).call('qwe', 1)[1] === 'e');
  ok(require(`${ PATH }/fn/array/virtual/sort`).call([1, 3, 2])[1] === 2);
  ok(typeof require(`${ PATH }/fn/array/virtual/for-each`) === 'function');
  ok(typeof require(`${ PATH }/fn/array/virtual/map`) === 'function');
  ok(typeof require(`${ PATH }/fn/array/virtual/filter`) === 'function');
  ok(typeof require(`${ PATH }/fn/array/virtual/some`) === 'function');
  ok(typeof require(`${ PATH }/fn/array/virtual/every`) === 'function');
  ok(typeof require(`${ PATH }/fn/array/virtual/reduce`) === 'function');
  ok(typeof require(`${ PATH }/fn/array/virtual/reduce-right`) === 'function');
  ok(typeof require(`${ PATH }/fn/array/virtual/index-of`) === 'function');
  ok(typeof require(`${ PATH }/fn/array/virtual/last-index-of`) === 'function');
  ok(require(`${ PATH }/fn/array/virtual/copy-within`).call([1, 2, 3, 4, 5], 0, 3)[0] === 4);
  ok('next' in require(`${ PATH }/fn/array/virtual/entries`).call([]));
  ok(require(`${ PATH }/fn/array/virtual/fill`).call(Array(5), 2)[0] === 2);
  ok(require(`${ PATH }/fn/array/virtual/find`).call([2, 3, 4], it => it % 2) === 3);
  ok(require(`${ PATH }/fn/array/virtual/find-index`).call([2, 3, 4], it => it % 2) === 1);
  ok('next' in require(`${ PATH }/fn/array/virtual/keys`).call([]));
  ok('next' in require(`${ PATH }/fn/array/virtual/values`).call([]));
  ok(require(`${ PATH }/fn/array/virtual/includes`).call([1, 2, 3], 2));
  ok('next' in require(`${ PATH }/fn/array/virtual/iterator`).call([]));
  ok(require(`${ PATH }/fn/array/virtual`).includes.call([1, 2, 3], 2));
  ok('keys' in require(`${ PATH }/fn/array`));
  ok(require(`${ PATH }/fn/array/concat`)([1, 2, 3], [4, 5, 6]).length === 6);
  ok(require(`${ PATH }/fn/array/pop`)([1, 2, 3]) === 3);
  ok(require(`${ PATH }/fn/array/push`)([1, 2, 3], 4) === 4);
  ok(require(`${ PATH }/fn/array/reverse`)([1, 2, 3])[0] === 3);
  ok(require(`${ PATH }/fn/array/shift`)([1, 2, 3]) === 1);
  ok(require(`${ PATH }/fn/array/splice`)([1, 2, 3], 1, 2)[0] === 2);
  ok(require(`${ PATH }/fn/array/unshift`)([1, 2, 3], 0) === 4);
  ok(require(`${ PATH }/fn/math/acosh`)(1) === 0);
  ok(Object.is(require(`${ PATH }/fn/math/asinh`)(-0), -0));
  ok(require(`${ PATH }/fn/math/atanh`)(1) === Infinity);
  ok(require(`${ PATH }/fn/math/cbrt`)(-8) === -2);
  ok(require(`${ PATH }/fn/math/clz32`)(0) === 32);
  ok(require(`${ PATH }/fn/math/cosh`)(0) === 1);
  ok(require(`${ PATH }/fn/math/expm1`)(-Infinity) === -1);
  ok(require(`${ PATH }/fn/math/fround`)(0) === 0);
  ok(require(`${ PATH }/fn/math/hypot`)(3, 4) === 5);
  ok(require(`${ PATH }/fn/math/imul`)(2, 2) === 4);
  ok(require(`${ PATH }/fn/math/log10`)(-0) === -Infinity);
  ok(require(`${ PATH }/fn/math/log1p`)(-1) === -Infinity);
  ok(require(`${ PATH }/fn/math/log2`)(1) === 0);
  ok(require(`${ PATH }/fn/math/sign`)(-2) === -1);
  ok(Object.is(require(`${ PATH }/fn/math/sinh`)(-0), -0));
  ok(require(`${ PATH }/fn/math/tanh`)(Infinity) === 1);
  ok(require(`${ PATH }/fn/math/trunc`)(1.5) === 1);
  ok(require(`${ PATH }/fn/math/clamp`)(6, 2, 4) === 4);
  ok(require(`${ PATH }/fn/math/deg-per-rad`) === Math.PI / 180);
  ok(require(`${ PATH }/fn/math/degrees`)(Math.PI) === 180);
  ok(require(`${ PATH }/fn/math/fscale`)(3, 1, 2, 1, 2) === 3);
  ok(require(`${ PATH }/fn/math/iaddh`)(3, 2, 0xffffffff, 4) === 7);
  ok(require(`${ PATH }/fn/math/isubh`)(3, 4, 0xffffffff, 2) === 1);
  ok(require(`${ PATH }/fn/math/imulh`)(0xffffffff, 7) === -1);
  ok(require(`${ PATH }/fn/math/rad-per-deg`) === 180 / Math.PI);
  ok(require(`${ PATH }/fn/math/radians`)(180) === Math.PI);
  ok(require(`${ PATH }/fn/math/scale`)(3, 1, 2, 1, 2) === 3);
  ok(require(`${ PATH }/fn/math/umulh`)(0xffffffff, 7) === 6);
  ok(require(`${ PATH }/fn/math/signbit`)(-2) === false);
  ok(require(`${ PATH }/fn/number/constructor`)('5') === 5);
  ok(require(`${ PATH }/fn/number/epsilon`) === Math.pow(2, -52));
  ok(require(`${ PATH }/fn/number/is-finite`)(42.5));
  ok(require(`${ PATH }/fn/number/is-integer`)(42.5) === false);
  ok(require(`${ PATH }/fn/number/is-nan`)(NaN));
  ok(require(`${ PATH }/fn/number/is-safe-integer`)(42));
  ok(require(`${ PATH }/fn/number/max-safe-integer`) === 0x1fffffffffffff);
  ok(require(`${ PATH }/fn/number/min-safe-integer`) === -0x1fffffffffffff);
  ok(require(`${ PATH }/fn/number/parse-float`)('1.5') === 1.5);
  ok(require(`${ PATH }/fn/number/parse-int`)('2.1') === 2);
  ok(require(`${ PATH }/fn/number/to-fixed`)(1, 1) === '1.0');
  ok(require(`${ PATH }/fn/number/to-precision`)(1) === '1');
  ok(require(`${ PATH }/fn/parse-float`)('1.5') === 1.5);
  ok(require(`${ PATH }/fn/parse-int`)('2.1') === 2);
  ok(require(`${ PATH }/fn/number/virtual/to-fixed`).call(1, 1) === '1.0');
  ok(require(`${ PATH }/fn/number/virtual/to-precision`).call(1) === '1');
  ok(require(`${ PATH }/fn/number/virtual`).toFixed.call(42, 2) === '42.00');
  ok('isNaN' in require(`${ PATH }/fn/number`));
  ok(require(`${ PATH }/fn/reflect/apply`)((a, b) => a + b, null, [1, 2]) === 3);
  ok(require(`${ PATH }/fn/reflect/construct`)(function () {
    return this.a = 2;
  }, []).a === 2);
  require(`${ PATH }/fn/reflect/define-property`)(O = {}, 'a', { value: 42 });
  ok(O.a === 42);
  ok(require(`${ PATH }/fn/reflect/delete-property`)({ q: 1 }, 'q'));
  ok(require(`${ PATH }/fn/reflect/get`)({ q: 1 }, 'q') === 1);
  ok(require(`${ PATH }/fn/reflect/get-own-property-descriptor`)({ q: 1 }, 'q').enumerable);
  ok(require(`${ PATH }/fn/reflect/get-prototype-of`)([]) === Array.prototype);
  ok(require(`${ PATH }/fn/reflect/has`)({ q: 1 }, 'q'));
  ok(require(`${ PATH }/fn/reflect/is-extensible`)({}));
  ok(require(`${ PATH }/fn/reflect/own-keys`)({ q: 1 })[0] === 'q');
  ok(require(`${ PATH }/fn/reflect/prevent-extensions`)({}));
  ok(require(`${ PATH }/fn/reflect/set`)({}, 'a', 42));
  require(`${ PATH }/fn/reflect/set-prototype-of`)(O = {}, []);
  ok(O instanceof Array);
  ok(typeof require(`${ PATH }/fn/reflect/define-metadata`) === 'function');
  ok(typeof require(`${ PATH }/fn/reflect/delete-metadata`) === 'function');
  ok(typeof require(`${ PATH }/fn/reflect/get-metadata`) === 'function');
  ok(typeof require(`${ PATH }/fn/reflect/get-metadata-keys`) === 'function');
  ok(typeof require(`${ PATH }/fn/reflect/get-own-metadata`) === 'function');
  ok(typeof require(`${ PATH }/fn/reflect/get-own-metadata-keys`) === 'function');
  ok(typeof require(`${ PATH }/fn/reflect/has-metadata`) === 'function');
  ok(typeof require(`${ PATH }/fn/reflect/has-own-metadata`) === 'function');
  ok(typeof require(`${ PATH }/fn/reflect/metadata`) === 'function');
  ok('has' in require(`${ PATH }/fn/reflect`));
  ok(require(`${ PATH }/fn/string/from-code-point`)(97) === 'a');
  ok(require(`${ PATH }/fn/string/raw`)({ raw: 'test' }, 0, 1, 2) === 't0e1s2t');
  ok(require(`${ PATH }/fn/string/code-point-at`)('a', 0) === 97);
  ok(require(`${ PATH }/fn/string/ends-with`)('qwe', 'we'));
  ok(require(`${ PATH }/fn/string/includes`)('qwe', 'w'));
  ok(require(`${ PATH }/fn/string/repeat`)('q', 3) === 'qqq');
  ok(require(`${ PATH }/fn/string/starts-with`)('qwe', 'qw'));
  ok(typeof require(`${ PATH }/fn/string/anchor`) === 'function');
  ok(typeof require(`${ PATH }/fn/string/big`) === 'function');
  ok(typeof require(`${ PATH }/fn/string/blink`) === 'function');
  ok(typeof require(`${ PATH }/fn/string/bold`) === 'function');
  ok(typeof require(`${ PATH }/fn/string/fixed`) === 'function');
  ok(typeof require(`${ PATH }/fn/string/fontcolor`) === 'function');
  ok(typeof require(`${ PATH }/fn/string/fontsize`) === 'function');
  ok(typeof require(`${ PATH }/fn/string/italics`) === 'function');
  ok(typeof require(`${ PATH }/fn/string/link`) === 'function');
  ok(typeof require(`${ PATH }/fn/string/small`) === 'function');
  ok(typeof require(`${ PATH }/fn/string/strike`) === 'function');
  ok(typeof require(`${ PATH }/fn/string/sub`) === 'function');
  ok(typeof require(`${ PATH }/fn/string/sup`) === 'function');
  ok(require(`${ PATH }/fn/string/at`)('a', 0) === 'a');
  ok(require(`${ PATH }/fn/string/pad-start`)('a', 3) === '  a');
  ok(require(`${ PATH }/fn/string/pad-end`)('a', 3) === 'a  ');
  ok(require(`${ PATH }/fn/string/trim-start`)(' a ') === 'a ');
  ok(require(`${ PATH }/fn/string/trim-end`)(' a ') === ' a');
  ok(require(`${ PATH }/fn/string/trim-left`)(' a ') === 'a ');
  ok(require(`${ PATH }/fn/string/trim-right`)(' a ') === ' a');
  ok('next' in require(`${ PATH }/fn/string/match-all`)('a', /./));
  ok('next' in require(`${ PATH }/fn/string/iterator`)('qwe'));
  ok(require(`${ PATH }/fn/string/virtual/code-point-at`).call('a', 0) === 97);
  ok(require(`${ PATH }/fn/string/virtual/ends-with`).call('qwe', 'we'));
  ok(require(`${ PATH }/fn/string/virtual/includes`).call('qwe', 'w'));
  ok(require(`${ PATH }/fn/string/virtual/repeat`).call('q', 3) === 'qqq');
  ok(require(`${ PATH }/fn/string/virtual/starts-with`).call('qwe', 'qw'));
  ok(typeof require(`${ PATH }/fn/string/virtual/anchor`) === 'function');
  ok(typeof require(`${ PATH }/fn/string/virtual/big`) === 'function');
  ok(typeof require(`${ PATH }/fn/string/virtual/blink`) === 'function');
  ok(typeof require(`${ PATH }/fn/string/virtual/bold`) === 'function');
  ok(typeof require(`${ PATH }/fn/string/virtual/fixed`) === 'function');
  ok(typeof require(`${ PATH }/fn/string/virtual/fontcolor`) === 'function');
  ok(typeof require(`${ PATH }/fn/string/virtual/fontsize`) === 'function');
  ok(typeof require(`${ PATH }/fn/string/virtual/italics`) === 'function');
  ok(typeof require(`${ PATH }/fn/string/virtual/link`) === 'function');
  ok(typeof require(`${ PATH }/fn/string/virtual/small`) === 'function');
  ok(typeof require(`${ PATH }/fn/string/virtual/strike`) === 'function');
  ok(typeof require(`${ PATH }/fn/string/virtual/sub`) === 'function');
  ok(typeof require(`${ PATH }/fn/string/virtual/sup`) === 'function');
  ok(require(`${ PATH }/fn/string/virtual/at`).call('a', 0) === 'a');
  ok(require(`${ PATH }/fn/string/virtual/pad-start`).call('a', 3) === '  a');
  ok(require(`${ PATH }/fn/string/virtual/pad-end`).call('a', 3) === 'a  ');
  ok(require(`${ PATH }/fn/string/virtual/trim-start`).call(' a ') === 'a ');
  ok(require(`${ PATH }/fn/string/virtual/trim-end`).call(' a ') === ' a');
  ok(require(`${ PATH }/fn/string/virtual/trim-left`).call(' a ') === 'a ');
  ok(require(`${ PATH }/fn/string/virtual/trim-right`).call(' a ') === ' a');
  ok('next' in require(`${ PATH }/fn/string/virtual/match-all`).call('a', /./));
  ok(require(`${ PATH }/fn/string/virtual`).at.call('a', 0) === 'a');
  ok('next' in require(`${ PATH }/fn/string/virtual/iterator`).call('qwe'));
  ok('raw' in require(`${ PATH }/fn/string`));
  ok(String(require(`${ PATH }/fn/regexp/constructor`)('a', 'g')) === '/a/g');
  ok(require(`${ PATH }/fn/regexp/to-string`)(/./g) === '/./g');
  ok(require(`${ PATH }/fn/regexp/flags`)(/./g) === 'g');
  ok(typeof require(`${ PATH }/fn/regexp/match`) === 'function');
  ok(typeof require(`${ PATH }/fn/regexp/replace`) === 'function');
  ok(typeof require(`${ PATH }/fn/regexp/search`) === 'function');
  ok(typeof require(`${ PATH }/fn/regexp/split`) === 'function');
  require(`${ PATH }/fn/regexp`);
  ok(require(`${ PATH }/fn/json`).stringify([1]) === '[1]');
  ok(require(`${ PATH }/fn/json/stringify`)([1]) === '[1]');
  ok(typeof require(`${ PATH }/fn/date/now`)(new Date()) === 'number');
  ok(typeof require(`${ PATH }/fn/date/to-string`)(new Date()) === 'string');
  ok(typeof require(`${ PATH }/fn/date/to-primitive`)(new Date(), 'number') === 'number');
  ok(typeof require(`${ PATH }/fn/date/to-iso-string`)(new Date()) === 'string');
  ok(require(`${ PATH }/fn/date/to-json`)(Infinity) === null);
  ok(require(`${ PATH }/fn/date`));
  require(`${ PATH }/fn/symbol/description`);
  ok(require(`${ PATH }/fn/symbol/has-instance`));
  ok(require(`${ PATH }/fn/symbol/is-concat-spreadable`));
  ok(require(`${ PATH }/fn/symbol/iterator`));
  ok(require(`${ PATH }/fn/symbol/match`));
  ok(require(`${ PATH }/fn/symbol/replace`));
  ok(require(`${ PATH }/fn/symbol/search`));
  ok(require(`${ PATH }/fn/symbol/species`));
  ok(require(`${ PATH }/fn/symbol/split`));
  ok(require(`${ PATH }/fn/symbol/to-primitive`));
  ok(require(`${ PATH }/fn/symbol/to-string-tag`));
  ok(require(`${ PATH }/fn/symbol/unscopables`));
  ok(require(`${ PATH }/fn/symbol/async-iterator`));
  ok(require(`${ PATH }/fn/symbol/observable`));
  ok(typeof require(`${ PATH }/fn/symbol/for`) === 'function');
  ok(typeof require(`${ PATH }/fn/symbol/key-for`) === 'function');
  ok('iterator' in require(`${ PATH }/fn/symbol`));
  ok(new (require(`${ PATH }/fn/map`))([[1, 2], [3, 4]]).size === 2);
  ok(new (require(`${ PATH }/fn/set`))([1, 2, 3, 2, 1]).size === 3);
  ok(new (require(`${ PATH }/fn/weak-map`))([[O = {}, 42]]).get(O) === 42);
  ok(new (require(`${ PATH }/fn/weak-set`))([O = {}]).has(O));
  ok(require(`${ PATH }/fn/map/of`)([1, 2], [3, 4]) instanceof require(`${ PATH }/fn/map`));
  ok(require(`${ PATH }/fn/set/of`)(1, 2, 3, 2, 1) instanceof require(`${ PATH }/fn/set`));
  ok(require(`${ PATH }/fn/weak-map/of`)([{}, 1], [[], 2]) instanceof require(`${ PATH }/fn/weak-map`));
  ok(require(`${ PATH }/fn/weak-set/of`)({}, []) instanceof require(`${ PATH }/fn/weak-set`));
  ok(require(`${ PATH }/fn/map/from`)([[1, 2], [3, 4]]) instanceof require(`${ PATH }/fn/map`));
  ok(require(`${ PATH }/fn/set/from`)([1, 2, 3, 2, 1]) instanceof require(`${ PATH }/fn/set`));
  ok(require(`${ PATH }/fn/weak-map/from`)([[{}, 1], [[], 2]]) instanceof require(`${ PATH }/fn/weak-map`));
  ok(require(`${ PATH }/fn/weak-set/from`)([{}, []]) instanceof require(`${ PATH }/fn/weak-set`));
  ok(typeof require(`${ PATH }/fn/typed/array-buffer`) === 'function');
  ok(typeof require(`${ PATH }/fn/typed/data-view`) === 'function');
  ok(typeof require(`${ PATH }/fn/typed/int8-array`) === 'function');
  ok(typeof require(`${ PATH }/fn/typed/uint8-array`) === 'function');
  ok(typeof require(`${ PATH }/fn/typed/uint8-clamped-array`) === 'function');
  ok(typeof require(`${ PATH }/fn/typed/int16-array`) === 'function');
  ok(typeof require(`${ PATH }/fn/typed/uint16-array`) === 'function');
  ok(typeof require(`${ PATH }/fn/typed/int32-array`) === 'function');
  ok(typeof require(`${ PATH }/fn/typed/uint32-array`) === 'function');
  ok(typeof require(`${ PATH }/fn/typed/float32-array`) === 'function');
  ok(typeof require(`${ PATH }/fn/typed/float64-array`) === 'function');
  ok(typeof require(`${ PATH }/fn/typed`).Uint32Array === 'function');
  ok('all' in require(`${ PATH }/fn/promise`));
  ok(require(`${ PATH }/fn/promise/try`)(() => 42) instanceof require(`${ PATH }/fn/promise`));
  ok('from' in require(`${ PATH }/fn/observable`));
  ok(require(`${ PATH }/fn/global`).Math === Math);
  ok(typeof require(`${ PATH }/fn/dom-collections`).iterator === 'function');
  ok(typeof require(`${ PATH }/fn/dom-collections/iterator`) === 'function');
  ok(typeof require(`${ PATH }/fn/set-timeout`) === 'function');
  ok(typeof require(`${ PATH }/fn/set-interval`) === 'function');
  ok(typeof require(`${ PATH }/fn/set-immediate`) === 'function');
  ok(typeof require(`${ PATH }/fn/clear-immediate`) === 'function');
  ok(typeof require(`${ PATH }/fn/asap`) === 'function');
  ok(require(`${ PATH }/fn/is-iterable`)([]));
  ok(typeof require(`${ PATH }/fn/get-iterator-method`)([]) === 'function');
  ok('next' in require(`${ PATH }/fn/get-iterator`)([]));
  ok('map' in require(`${ PATH }/es/array`));
  require(`${ PATH }/es/function`);
  ok(typeof require(`${ PATH }/es/map`) === 'function');
  ok(typeof require(`${ PATH }/es/set`) === 'function');
  ok(typeof require(`${ PATH }/es/weak-map`) === 'function');
  ok(typeof require(`${ PATH }/es/weak-set`) === 'function');
  ok('hypot' in require(`${ PATH }/es/math`));
  ok('MAX_SAFE_INTEGER' in require(`${ PATH }/es/number`));
  ok(require(`${ PATH }/es/parse-float`)('1.5') === 1.5);
  ok(require(`${ PATH }/es/parse-int`)('2.1') === 2);
  ok('assign' in require(`${ PATH }/es/object`));
  ok(typeof require(`${ PATH }/es/promise`) === 'function');
  ok('ownKeys' in require(`${ PATH }/es/reflect`));
  require(`${ PATH }/es/regexp`);
  ok('raw' in require(`${ PATH }/es/string`));
  ok(require(`${ PATH }/es/date`));
  ok(typeof require(`${ PATH }/es/symbol`) === 'function');
  ok(typeof require(`${ PATH }/es/typed`).Uint32Array === 'function');
  ok('Map' in require(`${ PATH }/es`));
  ok('setTimeout' in require(`${ PATH }/web/timers`));
  ok('setImmediate' in require(`${ PATH }/web/immediate`));
  require(`${ PATH }/web/dom-collections`);
  ok('setImmediate' in require(`${ PATH }/web`));
  ok(require(`${ PATH }/stage/4`));
  ok(require(`${ PATH }/stage/3`));
  ok(require(`${ PATH }/stage/2`));
  ok(require(`${ PATH }/stage/1`));
  ok(require(`${ PATH }/stage/0`));
  ok(require(`${ PATH }/stage/pre`));
  ok(require(`${ PATH }/stage`));
}

// eslint-disable-next-line no-console
console.log('CommonJS - OK');
