import React from 'react'
import MapView from "react-native-maps"
import { StyleSheet ,Dimensions , Button , View} from 'react-native'
export default ({onPressLeft,textLeft , onPressRight}) => {
    return(
        <View style={styles.panel}>
            <Button style={styles.buttonLeft} onPress={onPressLeft} title={textLeft} />
            <Button title="Ocultar/Mostrar" onPress={onPressRight}/>
        </View>
    )
}
const styles = StyleSheet.create({
panel:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    padding: 20,
},
buttonLeft:{
    marginRight:20,
}
})