import { Action, ActionWithPayload } from './actions'

function actionCreator<T extends string>(type: T): Action<T>
function actionCreator<T extends string, U>(type: T, payload: U): ActionWithPayload<T, U>
function actionCreator<T extends string, U>(type: T, payload?: U): Action<T> | ActionWithPayload<T, U>{
  return payload === undefined
    ? { type: type as typeof type }
    : { type: type as typeof type , payload }
}

export {
  actionCreator
}