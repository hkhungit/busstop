import React, { Component } from 'react'
import { 
  Text,
  Navigator, 
  ActivityIndicator,
  TouchableHighlight
} from 'react-native'
import Router          from './navigators'
import stores          from './reducers/stores'
import { Provider }    from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={stores()}>
        <Navigator
          initialRoute={{name: 'search'}}
          renderScene={Router.renderScene}
        />
      </Provider>
    )
  }
}

export default App