import {check} from 'typings-tester'
import {EventFromMap} from './EventFromMap'

describe(`EventFromMap`, () => {

    const SymbolKey = Symbol()

    type TypeMap = {
        [SymbolKey]: symbol
        str: 'str'
        num: 1
    }

    type Event = EventFromMap<TypeMap>

    let a: Event = '' as any
    if (a.type === SymbolKey) {
        a.type.valueOf()
    }
    if (a.type === 'str') {
        a.payload.startsWith('')
        // typings:expect-error
        a.payload.toExponential()
    }
    if (a.type === 'num') {
        a.payload.toExponential()
    }

    it(`should have expected type`, () => {
        check([__filename], 'tsconfig.json')
    })
})

