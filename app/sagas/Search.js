import { take, put, call } from 'redux-saga/effects'
import Types               from '../actions/Types'
import Actions             from '../actions'
import {Api}                from '../api'
import { create } from 'apisauce'

export function* getSearchWatcher() {
  while(true) {
    const { busNumber } = yield take(Types.ON_SEARCH)
    yield call(getSearch, busNumber)
  }
}

function* getSearch(busNumber) {
  const response = yield call(Api.get, `/line/${busNumber}/route/sequence/outbound`)
  const { data } = response
  if (data) {
    yield put(Actions.onResult(data))
  }
}