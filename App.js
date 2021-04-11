import { startLocationUpdatesAsync } from 'expo-location';
import React , {useState} from 'react';
import { StyleSheet, Text, View, Dimensions , Button } from 'react-native';
import {Map, Modal , Panel , Input , List} from './components';

export default function App() {
  const [puntos, setPuntos] = useState([]);
  const [puntosTemp, setPuntosTemp] = useState({});
  const [nombre, setNombre] = useState('');
  const [visibility, setVisibility] = useState(false);
  const [visibilityFilter, setVisibilityFilter] = useState('new_punto'); // new_punto, all_puntos
  const [pointsFilter, setPointsFilter] = useState(true);
  state= {
    location:null,
    geocode:null,
    errorMessage:""
  }
  const handleLongPress = ({nativeEvent}) => {
    setVisibilityFilter('new_punto');
    setPuntosTemp(nativeEvent.coordinate);
    setVisibility(true);
  }
  const handleChangeText = text =>{
    setNombre(text)
  }
 
  const handleSubmit = () =>{
    const newPunto = 
    { 
      coordinate: puntosTemp ,
      name: nombre,
    };
    setPuntos(puntos.concat(newPunto));
    setVisibility(false);
  }
  const handleLista = () =>{
    setVisibilityFilter('all_puntos');
    setVisibility(true);
  }
  const handleCloseList = () =>{
    setVisibility(false);
  }
  
  const tooglePointsFilter = () => {
    setPointsFilter(!pointsFilter);
  };
    return (
      <View style={styles.container}>
        <Map onLongPress={handleLongPress}  puntos={puntos} pointsFilter={pointsFilter} />
        <Panel onPressLeft={handleLista} textLeft='Lista' onPressRight={tooglePointsFilter}/>
        <Modal style={styles.form} visibility={visibility}>
          {visibilityFilter === 'new_punto' ? 
          <>
          <Input title="Nombre" placeholder="Nombre del punto"
          onChangeText={handleChangeText}/>
          <Button title="Aceptar" onPress={handleSubmit} />
          </> //fragments se usa cuando no queremos usar View
          : <Text>
            <List puntos={puntos} onPressClose={handleCloseList}/>
          </Text>
        }
         </Modal>
      </View>
    );
}


const styles = StyleSheet.create({
  form:{
   padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    
  },
  map:{
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
  },
  modalView:{
    backgroundColor:'#fff',
    borderRadius: 4,
    padding:20,
    shadowColor:'#000',
    shadowOffset:{
      width:0,
      height:3,
    }
  },
  center:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
  }
});