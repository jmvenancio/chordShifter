import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';
import {shiftChord} from './chordsShifter';

export default class ChordsInput extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '', num: 0};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type the chords here"
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput
          style={{height: 40}}
          placeholder="Type the num"
          onChangeText={(num) => this.setState({num})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && shiftChord(word,Number(this.state.num))).join(' ')}
        </Text>
      </View>
    );
  }
}