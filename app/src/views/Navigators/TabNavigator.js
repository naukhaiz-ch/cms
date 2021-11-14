import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'
import { TouchableOpacity, View } from "react-native"

import Appointments from '../Appointments'
import Doctors from "../Doctors"
import Patients from "../Patients"
import Laboratories from "../Laboratories"
import Pharmacies from "../Pharmacies"
import Profile from "../Profile"

import Styles from "../styles/homeStyle"

const Tab = createBottomTabNavigator()

const CustomTabBarButton = ({ children, onPress }) => (
	<TouchableOpacity
		style={{
			top: -30,
			justifyContent: 'center',
			alignItems: 'center',

		}}
		onPress={onPress}
	>
		<View
			style={{
				width: 50,
				height: 50,
				borderRadius: 35,
				backgroundColor: '#F18228'
			}}
		>
			{children}
		</View>
	</TouchableOpacity>
)

function App() {

	return (
		<Tab.Navigator initialRouteName='Home'
			screenOptions={{
				tabBarShowLabel: false,
				tabBarStyle: Styles.tabBar
			}}
		>
			<Tab.Screen name="Laboratories" component={Laboratories} options={{
				tabBarIcon: ({ focused }) => (
					<Icon
						name='apps'
						type='ionicon'
						color={focused ? '#F18228' : '#ffffff'}
					/>
				),
				headerShown: false
			}}
			/>
			<Tab.Screen name="Doctor" component={Doctors}
				options={{
					tabBarIcon: ({ focused }) => (
						<Icon
							name='people-sharp'
							type='ionicon'
							color={focused ? '#F18228' : '#ffffff'}
						/>
					),
					headerShown: false
				}}
			/>
			<Tab.Screen name="Home" component={Patients}
				options={{
					tabBarIcon: ({ focused }) => (
						<Icon
							name='home-sharp'
							type='ionicon'
							color='#ffffff'
						/>
					),
					tabBarButton: (props) => (
						<CustomTabBarButton {...props} />
					),
					headerShown: false
				}}
			/>
			<Tab.Screen name="Pharmacies" component={Pharmacies}
				options={{
					tabBarIcon: ({ focused }) => (
						<Icon
							name='albums'
							type='ionicon'
							color={focused ? '#F18228' : '#ffffff'}
						/>
					),
					headerShown: false
				}}
			/>
			<Tab.Screen name="Profile" component={Profile}
				options={{
					tabBarIcon: ({ focused }) => (
						<Icon
							name='settings-sharp'
							type='ionicon'
							color={focused ? '#F18228' : '#ffffff'}
						/>
					),
					headerShown: false
				}}
			/>
		</Tab.Navigator>
	)
}

export default App