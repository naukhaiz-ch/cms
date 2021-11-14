import React from 'react'
import { useFocusEffect } from '@react-navigation/native'
import Styles from './styles/homeStyle'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { getAppointments } from '../actions/appointments'

export default function App() {

	const dispatch = useDispatch()
	const appointments = useSelector((state) => state.appointments)

	useFocusEffect(
		React.useCallback(() => {
			dispatch(getAppointments())
		}, [dispatch])
	)

	return (
		<View style={Styles.container}>
			{appointments.map((appointment) => (
				<TouchableOpacity style={Styles.box} key={appointment._id}>
					<Image style={Styles.image} source={{ uri: appointment.selectedFile }} />
					<Text>{appointment.name}</Text>
				</TouchableOpacity>
			))}
		</View>
	)
}