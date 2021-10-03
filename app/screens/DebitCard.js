import React, {useEffect} from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import AvailableBalanceItem from '../components/AvailableBalanceItem'
import CardItem from '../components/CardItem'
import CardOptionItems from '../components/CardOptionItems'
import SpendingProgressItem from '../components/SpendingProgressItem'
import ToolbarItem from '../components/ToolbarItem'
import { colors } from '../resources/Colors'
import { useSelector, useDispatch } from 'react-redux'
import {getCardDetails} from '../redux/actions/card'
import LoadingItem from '../components/LoadingItem'

export default function DebitCard({navigation}) {
    const dispatch = useDispatch();
    const card = useSelector(state => state.card.card);

    useEffect(() => {
        setTimeout(() => {
            dispatch(getCardDetails({
                owner_name: "Mark Henry",
                card_number: "5647341124132020",
                cvv_number: "456",
                expiry_date: "Thru: 12/20",
                balance_amount: "3,000",
                amount_spent: "345",
                spend_limit: "5000"
            }))
        }, 2000)
    }, [])

    return (
        <SafeAreaView style={{backgroundColor: colors.background, flexGrow: 1}}>
            {card === null ? <LoadingItem text={"Syncing Details"}/> : 
            (
                <View style={styles.container}>
                    <ToolbarItem />
                    <Text style={styles.header}>Debit Card</Text>
                    <AvailableBalanceItem amount={card.balance_amount}/>
                    <ScrollView>
                        <View>
                            <View style={styles.backgroundCard} />
                            <CardItem ownerName={card.owner_name}
                                expiry={card.expiry_date} 
                                cvv={card.cvv_number}
                                cardNumber={card.card_number}/>
                            <SpendingProgressItem progressValue={0.3} 
                                spentAmount={card.amount_spent} 
                                totalAmount={card.spend_limit}/>
                            <CardOptionItems onPress={(id) => {
                                id === 2 ? navigation.navigate("WeeklySpendingScreen") : null
                            }}/>
                        </View>
                    </ScrollView>
                </View>
            )}
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
