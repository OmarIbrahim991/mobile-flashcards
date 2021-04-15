import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { purple } from '../utils/colors'


const Header = ({ headerStyle, children }) => (
    <Text style={[styles.header, headerStyle]} >
        {children}
    </Text>
)

const styles = StyleSheet.create({
    header: {
        fontSize: 25,
        margin: 6,
        textAlign: "center",
        color: purple,
    }
})

export default Header
