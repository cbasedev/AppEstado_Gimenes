import { StyleSheet, Text, View } from 'react-native'

import AsistenciaNavigator from './AsistenciaNavigator'
import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'
import ServicioNavigator from './ServicioNavigator'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const BottomsTabs = createBottomTabNavigator()

const TabNavigator = () => {
    
  return (

    <BottomsTabs.Navigator 
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar
        }}
    >
    
        <BottomsTabs.Screen 
            name="ServiciosTab" 
            component={ServicioNavigator}
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.item}>
                        <Ionicons name='md-easel' size={24} color={focused ? 'blue' : 'black'} />
                        <Text style={{ color: focused ? 'blue' : 'black'}}>Servicios</Text>
                    </View>
                )
            }}
        />
        <BottomsTabs.Screen
            name="AsistenciasTab"
            component={AsistenciaNavigator}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.item}>
                        <Ionicons name='md-bandage-outline' size={24} color={focused ? 'blue' : 'black'} />
                        <Text style={{ color: focused ? 'blue' : 'black'}}>Asistencias</Text>
                    </View>
                )
            }}
        />
    </BottomsTabs.Navigator>
  )
}

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: '#7f5df0',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 5,
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90,
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default TabNavigator