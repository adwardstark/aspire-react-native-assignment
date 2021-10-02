import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { colors } from '../resources/Colors'

export default function WeeklySpendings() {
    return (
        <SafeAreaView style={{backgroundColor: colors.background, flexGrow: 1}}>
            <View>
                <Text>Spendings</Text>
            </View>
        </SafeAreaView>
    )
}
