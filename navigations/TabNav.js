import React from 'react'
import { Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import DecksList from '../screens/DecksList'
import CreateDeck from '../screens/CreateDeck'

const Tab = Platform.OS === "ios" ? createBottomTabNavigator() : createMaterialTopTabNavigator()

const navOptions = {
    screenOptions: ({ route }) => (
        {
            tabBarIcon: ({ focused, size, color }) => {
                const iconName = (() => {
                    let result = ""
                    switch(route.name) {
                        case "Decks List":
                            result = Platform.OS === "ios" ? "ios-albums" : "cards"
                            break
                        case "Create Deck":
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
}

const TabNav = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator {...navOptions}>
                <Tab.Screen name="Decks List" component={DecksList} />
                <Tab.Screen name="Create Deck" component={CreateDeck} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNav
