import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'

const ServiceItem = ({ item, onSelected }) => {
    return (
        <TouchableOpacity onPress={() => onSelected(item)}>
            <View style={styles.serviceItem}>
                <View>
                    <Text style={styles.title}>{item.Nombre}</Text>
                </View>
                <View>
                    <Text style={styles.details}>{item.Numero}</Text>
                    <Text style={styles.details}>{item.Equipo}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    serviceItem: {
        padding: 20,
        margin: 10,
        borderRadius: 3,
        backgroundColor: '#ccc',
    },
    title: {
        fontFamily: 'OpenSansBold',
        fontSize: 20,
    },
    details: {
        fontSize: 18
    }
})

export default ServiceItem