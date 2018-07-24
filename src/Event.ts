import {EventID} from './EventID'

export type Event<T = any, P = any> = {
    type: T
    payload: P
    id: EventID
    causation: EventID
    correlation: EventID
}

