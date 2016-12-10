import React, { Component } from 'react'
import {
  Text,
  View,
  ListView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { connect }      from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'

import Actions          from '../actions'
import Router from '../navigators'

class Result extends Component {
  constructor(props) {
    super(props)
    this.state = {
      busNumber: null,
      stations: []
    }

    this.renderRow = this.renderRow.bind(this)
  }

  componentWillMount() {
    const { busNumber } = this.props
    this.setState({busNumber})
    this.props.dispatch(Actions.onSearch(busNumber))
  }

  componentWillReceiveProps(props) {
    const { stations } = props
    this.setState({stations})
  }

  cloneWithRows(items){
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return ds.cloneWithRows(items)
  }

  renderRow(item) {
    const { name, id } = item
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => Router.redirect(this, 'detail', {stopPointId: id, title: name})}
      >
        <Text>{name}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const { busNumber, stations } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View
            style={{flexDirection: 'row', alignItems: 'center', padding: 5}}
          >
            <Icon.Button
              color='#000'
              onPress={() => this.props.navigator.pop()}
              backgroundColor='transparent'
              name="angle-left" size={30} />
            <Text style={{fontSize: 20, flex: 1, textAlign: 'center', zIndex: -1, marginLeft: -30}}> Select Stop</Text>
          </View>
        </View>
        <View style={styles.content}>
          <View>
            {busNumber && <Text style={styles.title}>Stops for {busNumber}</Text>}
          </View>
          {
            (stations && stations.length > 0) ?
            <ListView
              style={styles.reversed}
              enableEmptySections
              dataSource={this.cloneWithRows(stations)}
              renderRow={this.renderRow}
            />
            :
            <Text style={styles.norecord}> No Data </Text>
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  header: {
    marginTop: 10
  },
  content: {
    flex: 1,
    padding: 10,
    borderTopWidth: 2,
    borderTopColor: '#fc4919'
  },
  title: {
    fontSize: 30,
    color: '#fc4919',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  norecord: {
    padding: 40,
    textAlign: 'center'
  },
  item: {
    margin: 2,
    padding: 10,
    borderWidth: 2,
    borderColor: '#fafafa'
  }
})

function map(state) {
  return state.Result
}

export default connect(map)(Result)