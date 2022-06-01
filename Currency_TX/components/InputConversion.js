import React from 'react';
import { TouchableOpacity, TextInput, View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    global: {
        backgroundColor:"white",
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 5,
        flexDirection: "row",
    },
    bouton: {
        padding: 15,
        borderRightColor: "#E2E2E2",
        borderRightWidth: 1,
        backgroundColor: "white",
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    texte: {
        fontSize: 18,
        color: "black",
        fontWeight: "bold",
    },
    input: {
        flex: 1,
        padding: 10,
        fontSize: 16,
        color: "black",
    }
});

export const InputConversion = ({ monnaie, valeur, onButtonPress, keyboardType }) => {
    return(
        <View style={styles.global}>
            <TouchableOpacity onPress={onButtonPress} style={styles.bouton}>
                <Text style={styles.texte}>{monnaie}</Text>
            </TouchableOpacity>
            <TextInput style={styles.input}
            monnaie={monnaie}
            valeur={valeur}
            onButtonPress={onButtonPress}
            keyboardType={keyboardType}
            />
        </View> 
    )
}