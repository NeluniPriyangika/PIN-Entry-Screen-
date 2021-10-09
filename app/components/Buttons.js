import React from "react";
import { Alert, StyleSheet, Text, Touchable, TouchableHighlight, TouchableOpacity, View } from "react-native";

const Buttons = () => {
    const myfucntion = () => {
        alert ('helow');
    }
    return(
        <View >
            <View style={styles.boxcontaner1}>
                <TouchableOpacity onPress = {myfucntion} style ={styles.underlaycolr}>
                        <View style={styles.box}>
                            <Text style={styles.title}>1</Text>
                        </View>
                </TouchableOpacity>

                <TouchableOpacity style ={styles.underlaycolr}>
                    <View style={styles.box}>
                        <Text style={styles.title}>2</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style ={styles.underlaycolr}>
                    <View style={styles.box}>
                        <Text style={styles.title}>3</Text>
                    </View> 
                </TouchableOpacity>   
            </View>

            <View style={styles.boxcontaner}>
                <TouchableOpacity style ={styles.underlaycolr}>
                    <View style={styles.box}>
                        <Text style={styles.title}>4</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style ={styles.underlaycolr}>
                    <View style={styles.box}>
                        <Text style={styles.title}>5</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style ={styles.underlaycolr}>
                    <View style={styles.box}>
                        <Text style={styles.title}>6</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.boxcontaner}>
                <TouchableOpacity style ={styles.underlaycolr}>
                    <View style={styles.box}>
                        <Text style={styles.title}>7</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style ={styles.underlaycolr}>
                    <View style={styles.box}>
                        <Text style={styles.title}>8</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity style ={styles.underlaycolr}>
                    <View style={styles.box}>
                        <Text style={styles.title}>9</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.boxcontaner4}>
                <TouchableOpacity style ={styles.underlaycolr}>
                    <View style={styles.box}>
                        <Text style={styles.title}>0</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style ={styles.underlaycolr}>
                    <View style={styles.box}>
                        <Text style={styles.title}>x</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
 
  title: {
   fontSize:40,
   justifyContent:'center',
   marginTop:5,
   
  },

  box: {
    width:70,
    height:70,
    borderRadius:70,
    borderWidth:1,
    borderColor:'#F2F3F4',
    alignItems:'center',
    backgroundColor:'#F2F3F4'  
  },

  boxcontaner:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginLeft:40,
    marginRight:40,
    marginTop:10,
  },

  boxcontaner1:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginLeft:40,
    marginRight:40,
    marginTop:95,
  },

  boxcontaner4:{
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent:'space-between',
    marginLeft:146,
    marginRight:40,
    marginTop:10,
  },

  underlaycolr:{
    backgroundColor:'#00BFA2',
    borderRadius:70,
  },

  

});

export default Buttons;