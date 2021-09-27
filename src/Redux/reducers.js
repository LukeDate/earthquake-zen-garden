import appData from '../data.json'

export const initialState = {
  ...appData
}

export const rootReducer = (state = initialState) => {
  return state
}
