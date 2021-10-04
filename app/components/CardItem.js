import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { colors } from '../resources/Colors'
import { images } from '../resources/Images'

export default function CardItem({ownerName, expiry, cvv, cardNumber}) {
    const [showHideCardDetails, setShowHideCardDetails] = useState(false)
    return (
        <View style={{margin: 20}}>
            <TouchableOpacity style={{alignSelf: "flex-end", position: "absolute"}} onPress={() => {
                setShowHideCardDetails(!showHideCardDetails)
            }}>
                <View style={styles.showHideToggle}>
                    <Image source={showHideCardDetails ? images.eyeShow : images.eyeHide} 
                        style={styles.showHideIcon}/>
                    <Text style={styles.showHideToggleText}>
                        {showHideCardDetails ? "Show card number" : "Hide card number"}
                    </Text>
                </View>
            </TouchableOpacity>
            <View testID="card" style={styles.cardContainer}>
                <Image source={images.aspireLogoWithText} style={styles.aspireLogo}/>
                <Text testID="text-name" style={styles.cardOwnerName}>{ownerName}</Text>
                <View style={{flexDirection: "row", alignItems: "center", height: 50}}>
                {
                    showHideCardDetails ? (
                        <Text style={styles.cardNumberText}>
                            {cardNumber.slice(0,4)}   {cardNumber.slice(4,8)}   {cardNumber.slice(8,12)}
                        </Text>
                    ) : (
                        <Text style={styles.cardHiddenNumberText}>••••   ••••   ••••</Text>
                    )
                }
                <Text style={styles.cardNumberText}>{cardNumber.slice(12,16)}</Text>
                </View>
                <View style={{flexDirection: "row"}}>
                    <Text style={[styles.cardNumberText, {marginTop: 7}]}>{expiry}</Text>
                    <Text style={[styles.cardNumberText, {marginLeft: 30, marginTop: 7}]}>CVV:</Text>
                    {
                    showHideCardDetails ? (
                        <Text style={[styles.cardNumberText, {marginLeft: 5, marginTop: 7}]}>{cvv}</Text>
                    ) : (
                        <Text style={[styles.cardHiddenNumberText, {marginLeft: 5, marginTop: 7}]}>****</Text>
                    )
                }
                </View>
                <Image source={images.visaLogo} style={styles.visaLogo}/>
            </View>
        </View>
    )
}

const styles = {
    showHideToggle: {
        backgroundColor: colors.white,
        flexDirection: "row",
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 7,
        paddingBottom: 17,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        alignItems: "center"
    },
    showHideToggleText: {
        marginLeft: 10,
        color: colors.accent,
        fontSize: 12,
        fontFamily: 'AvenirNextLTPro-DemiBold'
    },
    showHideIcon: {
        height: 16,
        width: 16
    },
    cardContainer: {
        backgroundColor: colors.accent,
        padding: 10,
        borderRadius: 10,
        width: "100%",
        height: 200,
        marginTop: 30
    },
    aspireLogo: {
        width: 100,
        height: 20,
        resizeMode: 'contain',
        alignSelf: 'flex-end',
        marginTop: 10
    },
    visaLogo: {
        alignSelf: "flex-end",
        marginRight: 15,
        marginBottom: 15
    },
    cardOwnerName: {
        fontSize: 22,
        fontFamily: 'AvenirNextLTPro-Bold',
        color: colors.white,
        marginLeft: 12,
        marginTop: 12
    },
    cardNumberText: {
        fontSize: 14,
        fontFamily: 'AvenirNextLTPro-DemiBold',
        color: colors.white,
        marginLeft: 12,
        marginTop: 20
    },
    cardHiddenNumberText: {
        fontSize: 19,
        fontFamily: 'AvenirNextLTPro-DemiBold',
        color: colors.white,
        marginLeft: 12,
        marginTop: 20
    }
}
