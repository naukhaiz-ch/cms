import React from 'react'
import { useFocusEffect } from '@react-navigation/native'
import Styles from './styles/homeStyle'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { getPrescriptions } from '../actions/prescriptions'

export default function App() {

	const dispatch = useDispatch()
	const prescriptions = useSelector((state) => state.prescriptions)

	useFocusEffect(
		React.useCallback(() => {
			dispatch(getPrescriptions())
		}, [dispatch])
	)

	return (
		<View style={Styles.container}>
			{prescriptions.map((prescription) => (
				<TouchableOpacity style={Styles.box} key={prescription._id}>
					<Image style={Styles.image} source={{ uri: prescription.selectedFile }} />
					<Text>{prescription.title}</Text>
				</TouchableOpacity>
			))}
		</View>
	)
}