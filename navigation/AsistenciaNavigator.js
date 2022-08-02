import AsistenciaScreen from '../screens/AsistenciaScreen';
import { COLORS } from '../constants/colors'
import { Platform } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AsistenciaNavigator = () => {

    return (
    
        <Stack.Navigator
            initialRouteName="Asistencia"
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? COLORS.primary : COLORS.accent,
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen 
                name="Asistencia"
                component={AsistenciaScreen}
                options={{ title: 'Asistencias Tecnicas' }}
            />
        </Stack.Navigator>
    )   
}

export default AsistenciaNavigator;