import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import TabNav from './TabNav'
import DeckDetails from '../screens/DeckDetails'
import NewCard from '../screens/NewCard'
import Quiz from '../screens/Quiz'


const Stack = createStackNavigator()

const MainNav = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={TabNav} options={{ headerShown: false }}/>
                <Stack.Screen name="Deck Details" component={DeckDetails} />
                <Stack.Screen name="New Card" component={NewCard} />
                <Stack.Screen name="Quiz" component={Quiz} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNav
