import React, { useState } from "react";
import { Text, View, Button, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class Home extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    HOME SCREEN
                </Text>
            </View>
        );
    }
}