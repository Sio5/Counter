/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
/*-------------------------
Counter App by SIO5
--------------------------*/
import React from 'react';
import { Button } from 'react-native-elements';
import { Text, StyleSheet, View, TouchableNativeFeedback, } from 'react-native';
//import react features

export default class App extends React.Component {

  state = { counter: 0};
  //set the Counter to 0
  

  render() {
  const currentCounter = this.state.counter;
  //if fu to scale font size if num is greater as 100
  if (currentCounter >= 100){
    var fontscale;
    fontscale = 190;
  }else{
    fontscale = 230;
  };
  //if fu to set limit to 999, to stop count at 999
  if (currentCounter == 999){
    var countlimit;
    countlimit = +0;
  }else{
    countlimit = +1;
  };

    return (

      <View style={styles.container}>
      <TouchableNativeFeedback style={{flex:1, width:300,}} //onLongPress after 2s the counter will be set to 0
      delayLongPress={2000}
      onLongPress ={()=>{
        this.setState({ counter: 0 }) 
        }}
         >
      <Text 
      style={{fontSize: fontscale,fontWeight:'bold',color: "#000"}}>{currentCounter}</Text>
      </TouchableNativeFeedback>
      <View style={{width: 300,marginBottom:10,}}>
      <Button large title="+" buttonStyle={{backgroundColor: '#000', height: 100,}} titleStyle={{fontSize:60,}} onPress={() => this.setState({ counter: currentCounter + countlimit })}/>
      </View>
      <View style={{width: 300,}}>
      <Button large title="-" buttonStyle={{backgroundColor: '#000', height: 60,}} titleStyle={{fontSize:60,}} onPress={() => this.setState({ counter: currentCounter -1 })}/>
      </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
