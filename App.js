import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'


const App = () => {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Text>Hello, World!</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	}
})

export default App
