import {Event} from './Event'
import uuid = require('uuid')

export function createEvent<T, P>(type: T, payload: P, cause?: Event<any, any>): Event<T, P> {
    const id = uuid()
    const causation = (cause && cause.id) || id
    const correlation = (cause && cause.correlation) || id
    return {id, correlation, causation, type, payload}
}
