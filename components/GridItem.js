import{
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import react from "react";

const GridItem = ({item, onSelected}) => {

    return(
        <View style={styles.gridItem}>
            <TouchableOpacity
                style={{...styles.container}}
                onPress={()=> onSelected(item)}
            >
                <View>
                    <Text style={styles.title}>
                        {item.Nombre}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    gridItem:{
        flex: 1, 
        margin: 15, 
        height: 150
    },
    container:{
        flex: 1, 
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        elevation: 3,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 8
    },
    title:{
        fontFamily: 'OpenSansBold'
    }
});

export default GridItem