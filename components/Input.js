import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { purple } from '../utils/colors'


const Input = ({ inputStyle, text, setText, ...props }) => {

    return (
        <TextInput style={[styles.textInput, inputStyle]} value={text} onChangeText={setText} {...props} />
    )
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        margin: 12,
        padding: 6,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: purple,
    },
})

export default Input
