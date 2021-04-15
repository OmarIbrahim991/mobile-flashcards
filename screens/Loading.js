import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'


const Loading = (props) => (
    <View style={styles.center}>
        <ActivityIndicator size="large" color="blue" {...props} />
    </View>
)

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default Loading
