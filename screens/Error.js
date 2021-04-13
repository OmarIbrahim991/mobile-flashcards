import React from 'react'
import { View, Platform, StyleSheet } from 'react-native'
import { Entypo, Ionicons } from 'react-native-vector-icons'
import Header from '../components/Header'


const Error = ({ message }) => (
    <View style={styles.center}>
        {
            Platform.OS === "ios" ?
            <Ionicons name="warning" size={50} /> :
            <Entypo name="warning" size={50} />
        }
        <Header>{message}</Header>
    </View>
)

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default Error
