import { createReducer } from 'reduxsauce'
import Types             from '../actions/Types'
import Immutable         from 'seamless-immutable'

export const INITIAL_STATE = Immutable({

})

const SearchResult = (state, action) => {
  return {...state}
}

const ACTION_HANDLERS = {
  [Types.SEARCH_RESULT]: SearchResult,
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
