import React from 'react'
import { useFocusEffect } from '@react-navigation/native'
import Styles from './styles/homeStyle'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { getMedicines } from '../actions/medicines'

export default function App() {

	const dispatch = useDispatch()
	const medicines = useSelector((state) => state.medicines)

	useFocusEffect(
		React.useCallback(() => {
			dispatch(getMedicines())
		}, [dispatch])
	)

	return (
		<View style={Styles.container}>
			{medicines.map((medicine) => (
				<TouchableOpacity style={Styles.box} key={medicine._id}>
					<Image style={Styles.image} source={{ uri: medicine.selectedFile }} />
					<Text>{medicine.name}</Text>
				</TouchableOpacity>
			))}
		</View>
	)
}