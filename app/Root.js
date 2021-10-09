import React,{Component} from 'react';
import{ StyleSheet,View,Text}from 'react-native';
import Buttons from './components/Buttons';
import Loading from './components/Loading';
import PinEntryScreen from './components/PinEntryScreen';

export default class Root extends Component{
  render(){
    return(
    <View>
      <PinEntryScreen/>
      <Loading Load={this.setState}/>
      <Buttons/>
    </View>
    );
  }
}
//export default Root;