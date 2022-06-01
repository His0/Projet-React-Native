import React from 'react';
import { View, StyleSheet, StatusBar, Text, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { InputConversion } from "./InputConversion";
import { Inversion } from "./Inversion";
import { Entypo } from "@expo/vector-icons";
const styles = StyleSheet.create({
    background: {
        backgroundColor : "#f",
        flex: 1
    },
    logo: {
        backgroundColor: "#3E4044",
        height: 50,
        alignItems:"flex-end",
    },
    conversion: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    footer: {
        marginTop:'auto',
        height: 60,
        backgroundColor: "#3E4044",
    },
    texte: {
        fontSize: 30,
        color: "black",
        fontWeight: "bold",
        textAlign:'right'
    }
})

export default function Acceuil(){
    return(
        <View style={styles.background}>
            <StatusBar barStyle='light-content' backgroundColor="#3E4044"></StatusBar>
            <SafeAreaView style={styles.logo}>
                <TouchableOpacity onPress={() => Navigation.push("Options")}>
                    <Entypo name="menu" size={32} color="white"/>
                </TouchableOpacity>
            </SafeAreaView>
            <View style={styles.conversion}>
                <InputConversion
                    monnaie="USD"
                    valeur="123"
                    onButtonPress={() => alert("A venir")}
                    keyboardType="numeric"
                />
                <InputConversion
                    monnaie="USD"
                    valeur="123"
                    onButtonPress={() => alert("A venir")}
                    keyboardType="numeric"
                />
               <Inversion text="Inversion" onPress={() => alert("A venir")} />
            </View>
                <TouchableOpacity style={styles.footer} onPress={() => alert("A venir")} >
                    <Text style={styles.texte}>A propos</Text>
                </TouchableOpacity>
        </View>     
    )
}