import { COLORS } from "../constants/colors";
import { Platform } from "react-native";
import React from "react";
import ServiciosScreen from "../screens/ServiciosScreen";
import SolicitudScreen from "../screens/SolicitudScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ServicioNavigator = () => {

    return(
        <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{
                headerStyle:{
                    backgroundColor: Platform.OS === 'android' ? COLORS.primary : COLORS.accent
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}>
            <Stack.Screen 
                name="Home" 
                component={ServiciosScreen}    
                options={{
                    title: 'Servicios Asignados'            
                }}
            />
            <Stack.Screen 
                name="Solicitud" 
                component={SolicitudScreen}                
                options={({route}) => ({
                    title: 'Servicio '
                })}
            />
        </Stack.Navigator>
    );

}

export default ServicioNavigator;