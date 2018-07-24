import {check} from 'typings-tester'
import {createEvent} from './createEvent'

describe(`${createEvent.name}`, () => {
    const correlation = createEvent('a', 'b')
    const causation = createEvent('c', 'd', correlation)
    const result = createEvent('e', 'f', causation)

    it(`should mark event without cause to have a cause of itself`, () => {
        expect(correlation.correlation).toEqual(correlation.id)
        expect(correlation.causation).toEqual(correlation.id)
    })

    it(`should have correct causation relation`, () => {
        expect(causation.causation).toEqual(correlation.id)
        expect(causation.correlation).toEqual(correlation.id)
    })

    it(`should discriminate causation and correlation`, () => {
        expect(result.causation).toEqual(causation.id)
        expect(result.correlation).toEqual(correlation.id)
    })

    it(`should have expected type`, () => {
        // typings:expect-error
        const t: 'f' = result.type
        check([__filename], 'tsconfig.json')
    })
})
