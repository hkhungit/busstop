import { createReducer } from 'reduxsauce'
import Types             from '../actions/Types'
import Immutable         from 'seamless-immutable'

export const INITIAL_STATE = Immutable({
  stations: []
})

const onResult = (state, action) => {
  const { sequences } = action
  const { stopPointSequences } = sequences

  const stopPoints = stopPointSequences.reduce((obj, stops) => {
    stops.stopPoint.forEach(stop => {
      obj[stop.stationId] = stop.id
    })
    return obj
  }, {})
  
  const stations = sequences.stations.map(station => {
    return {...station, stopPointId: stopPoints[station.stationId]}
  })
  return {...state, stations}
}

const ACTION_HANDLERS = {
  [Types.ON_RESULT]: onResult
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
