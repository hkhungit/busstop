import React, { Component } from 'react'
import {
  Text,
  View,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import Router from '../navigators'

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: ''
    }
    this.onSearch = this.onSearch.bind(this)
  }

  onSearch() {
    const  { number } =  this.state
    if (number == '') {
      return null
    }
    
    Router.redirect(this, 'result')
  }

  render() {
    const  { number } =  this.state
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Enter bus number</Text>
        <View style={{borderBottomWidth: 3}}>
          <TextInput 
            value={number}
            keyboardType='numeric'
            style={styles.textInput}
            onChange={(number) => this.setState({number})}
          />
        </View>
        <TouchableOpacity
          onPress={this.onSearch}
          style={styles.touchSearch}
          >
          <Text style={styles.label}>SEACH</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  },
  title: {
    fontSize: 24
  },
  textInput: {
    height: 100,
    minWidth: 200,
    padding: 5,
    fontSize: 90,
    color: '#f7b732',
    textAlign: 'center'
  },
  label: {
    fontSize: 30,
    color: '#fc4919'
  },
  touchSearch: {
    padding: 10,
    marginTop: 40,
    minWidth: 200,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#fc4919',
    alignItems: 'center',
    justifyContent: 'center'
  }
})