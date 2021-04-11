import React from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import DeckList from '../screens/DeckList'
import NewDeck from '../screens/NewDeck'


const Tab = Platform.OS === "ios" ? createBottomTabNavigator() : createMaterialTopTabNavigator()

const navOptions = {
    screenOptions: ({ route }) => (
        {
            tabBarIcon: ({ focused, size, color }) => {
                const iconName = (() => {
                    let result = ""
                    switch(route.name) {
                        case "Decks":
                            result = Platform.OS === "ios" ? "ios-albums" : "cards"
                            break
                        case "New Deck":
                            result = Platform.OS === "ios" ? "ios-add-circle" : "plus-box"
                            break
                    }
                    return focused ? result : result + "-outline"
                })()
                return Platform.OS === "ios" ?
                    <Ionicons name={iconName} size={size} color={color} /> :
                    <MaterialCommunityIcons name={iconName} size={size} color={color} />
            },
        }
    ),
    tabBarOptions: {
        header: null,
        showIcon: true,
        activeTintColor: "black",
        inactiveTintColor: "gray",
        indicatorStyle: { backgroundColor: "blue" },
    },
    initialRouteName: "Decks",
}

const TabNav = () => {
    return (
        <Tab.Navigator {...navOptions}>
            <Tab.Screen name="Decks" component={DeckList} />
            <Tab.Screen name="New Deck" component={NewDeck} />
        </Tab.Navigator>
    )
}

export default TabNav
