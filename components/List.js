import React from 'react'
import { StyleSheet ,Text , FlatList , View , Button, Dimensions} from 'react-native'
export default ({puntos, onPressClose}) => {
    return(
        <View style={styles.list}>
        <FlatList 
        data={puntos.map(x => x.name)} 
        renderItem={({item}) => <View style={styles.item}><Text style={{ textAlign:'center'}}>{item}</Text></View>}
        keyExtractor={item => item}
         />
          <Button style={styles.button} title='Cerrar' onPress={onPressClose}/>
         </View>
    )
}
const styles = StyleSheet.create({
item:{
    borderBottomWidth :1,
    borderColor: '#ccc',
    height: 50,
    justifyContent: 'center',
    textAlign:'center',
    padding: 15,
    width: 200,
    flex:1,
},
button:{
    paddingBottom: 30,
},
list:{
    height: Dimensions.get('window').height - 500,
    width: '100%',
}

})