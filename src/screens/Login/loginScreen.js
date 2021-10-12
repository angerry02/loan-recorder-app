import React, { useState } from "react";
import { Text, View, Button, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import { AppLogoPath } from '../../utils/appSettings'
import {AuthContext} from '../../components/context';

export default function Login({navigation}){
    
    const { signIn } = React.useContext(AuthContext);

    loginHandler = () => {

            const userData = [
                {
                    userName: 'GERRY AN', 
                    isSigned: true,
                    userToken: 'HJASHJAS'
                },
            ];

            signIn(userData);
        }

    return(
        <View style={styles.container}>
            <Image style={styles.loginAppLogo}
                source={{uri: AppLogoPath }}
            />
            <Text style={styles.appName}>
                ToDO RECORDER APP
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your email/username..."
            />
            <TextInput
                style={styles.input}
                placeholder="Enter your password..."
                secureTextEntry={true}
            />
            <TouchableOpacity style={[{
                justifyContent: 'center',
                alignContent: 'center',
                backgroundColor: '#00008b',
                width: '80%',
                height: 40,
                borderRadius: 50,
                marginTop: 10
            }]}
                onPress={loginHandler}
            >
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
            <TouchableOpacity
                onPress={()=> navigation.navigate('RegisterScreen')}>
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