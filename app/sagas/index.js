import { fork } from 'redux-saga/effects'
import { getSearchWatcher } from './Search'
import { getDetailWatcher } from './Detail'

export default function* root() {
  yield fork(getSearchWatcher)
  yield fork(getDetailWatcher)
}
