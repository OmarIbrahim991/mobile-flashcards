import React from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import DeckList from '../screens/DeckList'
import NewDeck from '../screens/NewDeck'
import { gray, purple, white } from '../utils/colors'


const Tab = Platform.OS === "ios" ? createBottomTabNavigator() : createMaterialTopTabNavigator()

const tabNavOptions = {
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
        activeTintColor: purple,
        inactiveTintColor: gray,
        indicatorStyle: { backgroundColor: purple },
        style: {
            backgroundColor: white,
            height: 80,
            shadowColor: "rgba(0, 0, 0, 0.24)",
            shadowOffset: { width: 0, height: 3 },
            shadowRadius: 6,
            shadowOpacity: 1,
        },
    },
    initialRouteName: "Decks",
}

const TabNav = () => {
    return (
        <Tab.Navigator {...tabNavOptions}>
            <Tab.Screen name="Decks" component={DeckList} />
            <Tab.Screen name="New Deck" component={NewDeck} />
        </Tab.Navigator>
    )
}

export default TabNav
