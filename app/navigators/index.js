import React         from 'react'
import { Navigator, Text } from 'react-native'
import {
  Search,
  Result,
  Detail,
} from '../containers'

export default {
  renderScene(route, navigator) {
    switch(route.name) {
      case 'result':
        return <Result busNumber={route.busNumber} navigator={navigator}/>
      case 'detail':
        return <Detail stopPointId={route.stopPointId} title={route.title} navigator={navigator}/>
      default:
        return <Search navigator={navigator}/>
    }
  },

  redirect(classObj, route, params={}) {
    classObj.props.navigator.push({
      name: route,
      ...params
    })
  }
}