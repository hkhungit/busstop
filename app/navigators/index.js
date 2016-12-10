import React         from 'react'
import { Navigator, Text } from 'react-native'
import {
  Search,
  Result,
  Detail,
} from '../containers'

export default {
  renderScene(route, navigator) {
    console.log(route)
    switch(route.name) {
      case 'result':
        return <Result busNumber={route.number} navigator={navigator}/>
      case 'detail':
        return <Detail busNumber={route.number} stopPointId={route.stopPointId} navigator={navigator}/>
      default:
        return <Search navigator={navigator}/>
    }
  },

  redirect(classObj, route, params={}){
    classObj.props.navigator.push({
      name: route,
      ...params
    })
  }
}