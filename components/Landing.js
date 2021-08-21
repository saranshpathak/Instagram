import React from 'react'
import {View,Text,StyleSheet, Pressable} from 'react-native';
 const Landing = ({navigation}) => {
    return (
        <View style={styles.landingComponent}>
            <Pressable 
            style={styles.LoginButton}
            onPress={()=>{navigation.navigate('Login')}}>
                <Text>
                    Login
                </Text>
            </Pressable>
            <Pressable 
            style={styles.signUpButton}
            onPress={()=>{navigation.navigate('SignUp')}}>
                <Text>
                    signUpButton
                </Text>
            </Pressable>
            
        </View>
    )
}
  export default Landing;

const styles = StyleSheet.create({
    landingComponent:{
        flex:1,
        // backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'gray'
        
    },
    signUpButton:{
            padding:11,
            margin:10,
            fontSize:20,
            borderRadius:10,
            color:'white',
            backgroundColor:'lightblue'
    },
    LoginButton:{
        padding:11,
        margin:10,
        fontSize:20,
        borderRadius:10,
        color:'white',
        backgroundColor:'lightblue'
    },
})
