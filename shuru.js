
import React, { Component } from 'react';
import { AppRegistry, TextInput } from 'react-native';
 
class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '输入' };
  }
 
  render() {
    return (
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
}
 
AppRegistry.registerComponent('AwesomeProject', () => UselessTextInput);