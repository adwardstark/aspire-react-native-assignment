import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import AvailableBalanceItem from '../components/AvailableBalanceItem'
import CardItem from '../components/CardItem'
import CardOptionItems from '../components/CardOptionItems'
import SpendingProgressItem from '../components/SpendingProgressItem'
import ToolbarItem from '../components/ToolbarItem'
import { colors } from '../resources/Colors'

export default function DebitCard({navigation}) {
    return (
        <SafeAreaView style={{backgroundColor: colors.background, flexGrow: 1}}>
            <View style={styles.container}>
                <ToolbarItem />
                <Text style={styles.header}>Debit Card</Text>
                <AvailableBalanceItem amount="3,000"/>
                <ScrollView>
                    <View>
                    <View style={styles.backgroundCard} />
                    <CardItem ownerName="Mark Henry" 
                        expiry="Thru: 12/20" 
                        cvv="456"
                        cardNumber="5647341124132020"/>
                    <SpendingProgressItem progressValue={0.3} 
                        spentAmount={345} 
                        totalAmount={5000}/>
                    <CardOptionItems navigation={navigation}/>
                    </View>
                </ScrollView>
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
    },
    backgroundCard: {
        backgroundColor: colors.white,
        height: "100%",
        width: "100%",
        position: "absolute",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        marginTop: 100
    }
}
