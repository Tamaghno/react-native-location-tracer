import React from 'react';
import { View, Text, Image, TouchableOpacity, Button, ScrollView, Alert, StyleSheet, TextInput} from 'react-native';
import AnimatedMarkers from './AnimatedMarkers';
import User from './User';

const styles= StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        padding:10
    },
    inputView:{
        width:"100%",
        height:40,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'


    },
    input:{
        flex:1,
        height:50,
        borderColor:'black',
        borderWidth:1,
        

    },
    button:{
        width:80,
        height:40,
        alignItems:'center',
        display:'flex',
        justifyContent:'center',
       
        backgroundColor:'purple'
    },
    buttonText:{
        color:'white'
    }
});


class ContentDrawer extends React.Component{

    constructor(props){
        super(props);
        this.state={
            name:""
        };
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.inputView}>
                    <Text>content custom drawer</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate("user")}>
                        <Text style={styles.buttonText} >User</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate("map")}>
                        <Text style={styles.buttonText} >Google maps</Text>
                </TouchableOpacity>
            </View>

        );
    }
}
export default ContentDrawer;