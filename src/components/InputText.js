import React from 'react';
import { Dimensions, StyleSheet, TextInput } from 'react-native';

const width  = Dimensions.get('window').width / 1.1
const height = Dimensions.get('window').height / 17

const inputText = ({ placeholder, onChangeText, placeholderTextColor }) => {
    return <TextInput 
            style={styles.input}
            placeholder={placeholder}
            onChangeText={onChangeText}
            placeholderTextColor={placeholderTextColor}
            autoCapitalize='none'
            />
};

const styles = StyleSheet.create({
    input: {
        width: width,
        height: height,
        borderRadius: 15,
        borderColor: '#000',
        borderWidth: 0.5,
        marginTop: 20,
        paddingHorizontal: 20,
        fontSize: 15
    }
});

export default inputText;