export interface Action<T> { type: T }

export interface ActionWithPayload<T, U> {
  type: T
  payload: U
}