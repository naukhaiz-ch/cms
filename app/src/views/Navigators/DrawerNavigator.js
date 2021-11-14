import React from "react"
import { createDrawerNavigator } from '@react-navigation/drawer'
import TabNaviagtor from './TabNavigator'

const Drawer = createDrawerNavigator()

function App() {

	return (
		<Drawer.Navigator >
			<Drawer.Screen name="Doccure" component={TabNaviagtor} />
		</Drawer.Navigator>
	)
}

export default App