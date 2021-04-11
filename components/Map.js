import React from 'react'
import MapView , {Marker} from "react-native-maps"
import { StyleSheet ,Dimensions} from 'react-native'
export default ({onLongPress , puntos , pointsFilter}) => {
    return(
        <MapView 
        style={styles.map}
        onLongPress={onLongPress}>
            {pointsFilter == true && puntos.map(x =>
                <Marker
                coordinate={x.coordinate}
                key={x.title}
                />
                )}
        </MapView>
    )
}
const styles = StyleSheet.create({
    map:{
        height:Dimensions.get('window').height - 150,
        width: Dimensions.get('window').width,
      }
})