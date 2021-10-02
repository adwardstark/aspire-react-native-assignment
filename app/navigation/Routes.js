import React from 'react';
import {Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EmptyScreen from '../screens/Empty';
import DebitCardScreen from '../screens/DebitCard';
import WeeklySpendingScreen from '../screens/WeeklySpendings';
import {colors} from '../resources/Colors';
import {images} from '../resources/Images';

const BottomTabs = createBottomTabNavigator();
const NavStack = createStackNavigator();

const debitCardNavigator = () => {
    return (
        <NavStack.Navigator screenOptions={{headerShown: false}}>
          <NavStack.Screen name={routes[2]} component={DebitCardScreen} />
          <NavStack.Screen name={routes[3]} component={WeeklySpendingScreen} />
        </NavStack.Navigator>
      );
}

export const routes = [
    "Home",
    "DebitCard",
    "DebitCardScreen",
    "WeeklySpendingScreen",
    "Payments",
    "Credit",
    "Profile"
]

export default function Routes() {
    return (
        <NavigationContainer>
            <StatusBar style="inverted"/>
            <BottomTabs.Navigator
                initialRouteName={routes[1]}
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: colors.accent,
                    tabBarInActiveTintColor: colors.grey,
                    tabBarLabelStyle: styles.tabText
                }}>
                <BottomTabs.Screen
                    name={routes[0]}
                    component={EmptyScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({focused}) => (
                            <Image source={images.aspireLogoGrey}
                                style={focused ? styles.tabActiveIcon: styles.tabInActiveIcon}
                            />
                        )
                    }}
                />
                <BottomTabs.Screen
                    name={routes[1]}
                    component={debitCardNavigator}
                    options={{
                        tabBarLabel: 'Debit Card',
                        tabBarIcon: ({focused}) => (
                            <Image source={images.debitCard}
                                style={focused ? styles.tabActiveIcon: styles.tabInActiveIcon}
                            />
                        ),
                    }}
                    listeners={({navigation}) => ({
                    tabPress: e => {
                        e.preventDefault();
                        navigation.reset({
                            index: 0,
                            routes: [{name: routes[1]}],
                        });
                        },
                    })}
                />
                <BottomTabs.Screen
                    name={routes[4]}
                    component={EmptyScreen}
                    options={{
                        tabBarLabel: 'Payments',
                        tabBarIcon: ({focused}) => (
                            <Image source={images.payments}
                                style={focused ? styles.tabActiveIcon: styles.tabInActiveIcon}
                            />
                        ),
                    }}
                />
                <BottomTabs.Screen
                    name={routes[5]}
                    component={EmptyScreen}
                    options={{
                        tabBarLabel: 'Credit',
                        tabBarIcon: ({focused}) => (
                            <Image source={images.credit}
                                style={focused ? styles.tabActiveIcon: styles.tabInActiveIcon}
                            />
                        ),
                    }}
                />
                <BottomTabs.Screen
                    name={routes[6]}
                    component={EmptyScreen}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({focused}) => (
                            <Image source={images.user}
                                style={focused ? styles.tabActiveIcon: styles.tabInActiveIcon}
                            />
                        ),
                    }}
                />
            </BottomTabs.Navigator>
        </NavigationContainer>
    )
}

const styles = {
    tabActiveIcon: {
        width: 24,
        height: 24,
        tintColor: colors.accent
    },
    tabInActiveIcon: {
        width: 24,
        height: 24,
        tintColor: colors.grey
    },
    tabText: {
        fontFamily: 'AvenirNextLTPro-DemiBold',
        fontSize: 12,
        fontWeight: '900'
    }
}
