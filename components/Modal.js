import React from 'react'
import { StyleSheet , Modal, Text , View, Dimensions} from 'react-native'
export default ({children,visibility}) => {
    return(
        <Modal
        animationType="slide"
        transparent={true}
        visible={visibility}>
        <View style={styles.center}>
        <View style={styles.modalView}>
          {children}
        </View>
        </View>
      </Modal>
    )
}
const styles = StyleSheet.create({
    modalView:{
        backgroundColor:'#fff',
        borderRadius: 4,
        padding:0,
        shadowColor:'#000',
        shadowOffset:{
          width:0,
          height:3,
        },
        minWidth: Dimensions.get('window').width - 200,
        alignItems: 'center',
      },
      center:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
      }
})