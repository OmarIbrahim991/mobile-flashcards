import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { purple, white } from '../utils/colors'


const Button = ({ value, btnStyle, textStyle, ...props }) => (
    <TouchableOpacity style={[styles.btn, btnStyle]} {...props}>
        <Text style={[styles.btnText, textStyle]}>{value}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    btn: {
        minWidth: 200,
        padding: 12,
        margin: 24,
        backgroundColor: purple,
        borderRadius: 10,
    },
    btnText: {
        color: white,
        textAlign: "center",
    },
})

export default Button
