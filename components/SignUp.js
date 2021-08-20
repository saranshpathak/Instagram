import React, { Component } from 'react'
import { View,StyleSheet,Text ,TextInput,Pressable} from 'react-native'

import firebase from 'firebase';

export default class SignUp extends Component {

    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            name:''
        }
        this.onSignUp = this.onSignUp.bind(this)
    }
    onSignUp(){
            const {name,email,password} =this.state;

            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then((result)=>{
                console.log(result)
            })
            .catch((error) =>{
                console.log(error)
            })
    }
    render() {
        return (
            <View style={styles.signUpComponent}>
                <TextInput
                placeholder="name"
                onChangeText={(name)=> this.setState({name:name})}
                />
                <TextInput
                placeholder="email"
                onChangeText={(email)=> this.setState({email})}
                />
                <TextInput
                placeholder="password"
                onChangeText={(password)=> this.setState({password})}
                />

                <Pressable
                style={styles.signUpButton}
                onPress={()=>this.onSignUp()}
                 >

                    <Text> SignUp</Text>

                </Pressable>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    signUpComponent:{

    },
    signUpButton:{
        
    },
})
