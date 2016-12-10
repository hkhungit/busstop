import { createReducer } from 'reduxsauce'
import Types             from '../actions/Types'
import Immutable         from 'seamless-immutable'

export const INITIAL_STATE = Immutable({
  arrivals: []
})

const onArrival = (state, action) => {
  const { arrivals } = action
  return {...state, arrivals}
}

const ACTION_HANDLERS = {
  [Types.ON_ARRIVAL]: onArrival
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
