import React from 'react'
import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants'


const CustomStatusBar = ({ backgroundColor, ...props }) => (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
)

export default CustomStatusBar
