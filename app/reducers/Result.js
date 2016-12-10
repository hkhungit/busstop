import { createReducer } from 'reduxsauce'
import Types             from '../actions/Types'
import Immutable         from 'seamless-immutable'

export const INITIAL_STATE = Immutable({
  stations: []
})

const onResult = (state, action) => {
  const { stations } = action
  return {...state, stations}
}

const ACTION_HANDLERS = {
  [Types.ON_RESULT]: onResult
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
