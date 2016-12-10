import Types from './Types'

const onSearch = (busNumber) => (
  {type: Types.ON_SEARCH, busNumber}
)

const onResult = (stations) => (
  {type: Types.ON_RESULT, stations}
)

const onDetail = (stopPointId) => (
  {type: Types.ON_DETAIL, stopPointId}
)

const onArrival = (arrivals) => (
  {type: Types.ON_ARRIVAL, arrivals}
)

export default {
  onSearch,
  onResult,
  onDetail,
  onArrival
}