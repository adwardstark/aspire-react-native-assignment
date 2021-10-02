import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import AvailableBalanceItem from '../components/AvailableBalanceItem'
import CardItem from '../components/CardItem'
import ToolbarItem from '../components/ToolbarItem'
import { colors } from '../resources/Colors'

export default function DebitCard() {
    return (
        <SafeAreaView style={{backgroundColor: colors.background, flexGrow: 1}}>
            <View style={styles.container}>
                <ToolbarItem />
                <Text style={styles.header}>Debit Card</Text>
                <AvailableBalanceItem amount="3,000"/>
                <CardItem ownerName="Mark Henry" 
                    expiry="Thru: 12/20" 
                    cvv="456"
                    cardNumber="5647341124132020"/>
            </View>
        </SafeAreaView>
    )
}

const styles = {
    container: {
        height: "100%",
        width: "100%"
    },
    header: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 24,
        fontFamily: 'AvenirNextLTPro-Bold',
        color: colors.white
    }
}
