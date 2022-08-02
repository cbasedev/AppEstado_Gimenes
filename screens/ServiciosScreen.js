import { FlatList } from "react-native";
import GridItem from '../components/GridItem';
import React from "react";
import { SERVICIOS } from '../data/servicios';

const ServiciosScreen = () => {

    const handleSelectedService = (item) => {
        navigation.navigate('Solicitud', {
            servicio: item
        }) 
    }

    const renderGridItem = ({ item }) => {
        <GridItem item={item} onSelected={handleSelectedService} />
    }

    return (

        <FlatList
            data={SERVICIOS}
            keyExtractor={item => item.Numero}
            renderItem={renderGridItem}
            numColumns={2}
        />
    );

}

export default ServiciosScreen