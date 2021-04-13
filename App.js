import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import MainNav from './navigations'
import CustomStatusBar from './components/CustomStatusBar'
import reducer from './reducers'
import middleware from './middlewares'


const store = createStore(reducer, middleware)

const App = () => {
	return (
		<Provider store={store}>
			<View style={styles.container}>
				<CustomStatusBar backgroundColor="#336" style="light" />
				<MainNav />
			</View>
		</Provider>
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
