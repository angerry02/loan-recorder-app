import React, { useState } from "react";
import { Text, View, Button, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { AppLogoPath } from '../../utils/appSettings'

export default class Login extends React.Component{

    render(){

        return(

            <View style={styles.container}>
                
                <Image style={styles.loginAppLogo}
                    source={{uri: AppLogoPath }}
                />

                <Text style={styles.appName}>
                    MyLOAN RECORDED APP
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Enter your email/username..."
                />

                <TextInput
                    style={styles.input}
                    placeholder="Enter your password..."
                />

                <TouchableOpacity style={[{
                    justifyContent: 'center',
                    alignContent: 'center',
                    backgroundColor: '#00008b',
                    width: '80%',
                    height: 40,
                    borderRadius: 50,
                    marginTop: 10
                }]}>
                    <Text style={[{
                        color: '#ffffff',
                        textAlign: 'center'
                    }]}>
                        LOGIN
                    </Text>
                </TouchableOpacity>

                <Text style={[{
                    marginTop: 40
                }]}>
                    No account yet?
                </Text>

                <TouchableOpacity>
                    <Text style={[{
                        marginTop: 10,
                        fontSize: 15
                    }]}>
                        Create an Account
                    </Text>
                </TouchableOpacity>
                
            </View>
        );
    }
}