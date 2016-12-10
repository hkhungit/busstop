import React, { Component } from 'react'
import {
  Text,
  View,
  ListView,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native'
import { connect } from 'react-redux'
import Router from '../navigators'
import Actions from '../actions'
import Icon from 'react-native-vector-icons/FontAwesome'
import Moment from 'moment'

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      stopPointId: null,
      arrivals: []
    }
    this.renderRow = this.renderRow.bind(this)
  }

  componentWillMount() {
    const { stopPointId, name } = this.props
    if (stopPointId) {
      this.props.dispatch(Actions.onDetail(stopPointId)) 
    }
    this.setState({stopPointId, name})
  }

  componentWillReceiveProps(props) {
    const { arrivals } = props
    this.setState({arrivals})
  }

  renderRow(item) {
    const { destinationName, expectedArrival, timeToStation, lineId } = item
    const timeArrival = Moment(expectedArrival).format('HH:mm')
    const duration = Moment.duration(timeToStation, 'seconds').get('minutes')
    return (
      <View style={styles.item}>
        <Text style={styles.busNumber}>{lineId}</Text>
        <View style={styles.itemContent}>
          <Text style={styles.itemTitle}>{destinationName}</Text>
          <Text style={styles.itemDuration}>{duration} min</Text>
        </View>
        <Text style={styles.itemTime}>{timeArrival}</Text>
      </View>
    )
  }

  cloneWithRows(items){
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return ds.cloneWithRows(items)
  }

  render() {
    const { arrivals, name } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View
            style={{flexDirection: 'row', alignItems: 'center', padding: 5}}
          >
            <Icon.Button
              color='#f7b732'
              onPress={() => this.props.navigator.pop()}
              backgroundColor='transparent'
              name="angle-left" size={30} />
            <Text style={{fontSize: 20, flex: 1, textAlign: 'center', color: '#fc4919'}}>{name}</Text>
            <Icon.Button
              color='#f7b732'
              onPress={() => this.props.navigator.resetTo({name: 'search'})}
              backgroundColor='transparent'
              name="home" size={30} />
          </View>
        </View>
        <View style={styles.content}>
        {
          (arrivals && arrivals.length > 0) ?
          <ListView
            style={styles.reversed}
            enableEmptySections
            dataSource={this.cloneWithRows(arrivals)}
            renderRow={this.renderRow}
          />
          :
          <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <ActivityIndicator
                animating={true}
                size="large"
            />
          </View>
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
    flex: 1
  },
  norecord: {
    padding: 40,
    textAlign: 'center'
  },
  item: {
    padding: 10,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#FAFAFA',
    alignItems: 'flex-start'
  },
  busNumber: {
    width: 60,
    paddingLeft: 5,
    paddingRight: 10,
    fontSize: 24,
    textAlign: 'right',
    color: '#fc4919'
  },
  itemTime: {
    width: 70,
    paddingLeft:  5,
    paddingRight: 5,
    fontSize: 18,
    textAlign: 'right',
    color: '#4ebeae'
  },
  itemContent: {
    flex: 1
  },
  itemTitle: {
    fontSize: 20
  },
  itemDuration: {
    color: '#4ebeae'
  }
})

function map(state) {
  return state.Detail
}

export default connect(map)(Detail)