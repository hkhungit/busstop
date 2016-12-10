import { take, put, call } from 'redux-saga/effects'
import Types               from '../actions/Types'
import Actions             from '../actions'
import {Api}                from '../api'
import { create } from 'apisauce'

export function* getDetailWatcher() {
  while(true) {
    const { stopPointId } = yield take(Types.ON_DETAIL)
    yield call(getDetail, stopPointId)
  }
}

function* getDetail(stopPointId) {
  const response = yield call(Api.get, `/StopPoint/${stopPointId}/arrivals`)
  const { data } = response
  if (data) {
    yield put(Actions.onArrival(data))
  }
}