import React from 'react'
import { StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import MainNav from './navigations'


const App = () => {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<MainNav />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "stretch",
	}
})

export default App
