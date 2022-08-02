import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "../constants/colors";
import React from "react";

const SolicitudScreen = ({ route }) => {
    
    const servicio = route.params.servicio;

    return (
        <View style={ styles.container }>
            <Text style={styles.title}>{servicio.Numero}</Text>
            <Text>{servicio.Cuenta}</Text>
            <Text>{servicio.Nombre}</Text>
            <Text>{servicio.Equipo}</Text>
            <Text>{servicio.Fecha}</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.accent,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontSize: 20,
        fontFamily: 'OpenSansBold',
        marginBottom: 10
    }

})

export default SolicitudScreen