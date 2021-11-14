import React from 'react'
import { useFocusEffect } from '@react-navigation/native'
import Styles from './styles/homeStyle'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { getTests } from '../actions/tests'

export default function App() {

    const dispatch = useDispatch()
    const tests = useSelector((state) => state.tests)

    useFocusEffect(
        React.useCallback(() => {
            dispatch(getTests())
        }, [dispatch])
    )

    return (
        <View style={Styles.container}>
            {tests.map((test) => (
                <TouchableOpacity style={Styles.box} key={test._id}>
                    <Image style={Styles.image} source={{ uri: test.selectedFile }} />
                    <Text>{test.title}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}