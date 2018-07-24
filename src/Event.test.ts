import {check} from 'typings-tester'
import {Event} from './Event'
import {EventID} from './EventID'

describe(`Event`, () => {
    const a: Event<'a', 'b'> = '' as any
    const eventID: EventID = a.id
    const correlation: EventID = a.correlation
    const causation: EventID = a.causation
    const type: 'a' = a.type
    const payload: 'b' = a.payload
    // typings:expect-error
    const wrongType: 'c' = a.type

    it(`should have expected type`, () => {
        check([__filename], 'tsconfig.json')
    })
})
