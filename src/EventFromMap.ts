import {Event} from './Event'

export type EventFromMap<TM extends object> = {
    [key in keyof TM]: Event<key, TM[key]>
}[keyof TM]
