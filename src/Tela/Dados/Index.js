import React, {Component} from "react";
import { View,Text, StyleSheet } from "react-native";

export default class Dados extends Component{
    render(){
        return(
            <View style={estilos.container}>
                <Text>
                    ID: {this.props.data.id}
                </Text>
                <Text>
                    Title: {this.props.data.title}
                </Text>
            </View>
        )
    }
}
const estilos = StyleSheet.create({
    container:{
        marginHorizontal: 5,
        borderWidth: 1
    }
})
