//Este vendria siendo un componente para hacerlo más modular, no pude implementarlo

import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import Constants from 'expo-constants';
import { 
  StyleSheet, 
  Text, View, 
  Image, /*Pressable*/ 
  ScrollView, 
 } from 'react-native';
import { getLastesGames } from '../lib/metacritic';
import { getUsers } from '../lib/apiUsuarios';

//const icon = require('./assets/icon.png');

export function Main() {
  const [games, setGames] = useState([]);

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  {/*useEffect(() => {
    getLastesGames().then(games => {
      setGames(games);
    });
  }, [])*/}



  useEffect(() => {
    getUsers()
    .then(data =>{
      setUsers(data);
      setLoading(false);
    })
    .catch(() => {
      setError('Error al cargar usuarios');
      setLoading(false);
    });
  }, []);

  return (
    <View style={{ paddingTop: SafeAreaInsetsContext.top, paddingBottom: insets.bottom}}>
      {/*Esto es un comentario
      <Image source={{ uri: "https://i.imgur.com/Ow1eOQS.png" }}
        style={{ width: 200, height:100 }}
      />
      */}

      
      {/* Usando las imagenes por default de assets como prueba
      <Image source={icon} style={{ 
        width: 100, 
        height: 100,
        resizeMode: 'center'
        
      }}/>
      <Text>Open up App.js to start working on your app!</Text>
      <h2>Hola mundo</h2>
      <p><strong>Huevos Peludos!!!</strong></p>*/}

      {/* <button 
        title="Pulsa aqui" 
        onPress={() => alert('Hola')} 
        color='blue'
      /> */}


      {/*<TouchableHighlight
        underlayColor={"green"}
        onPress={() => alert('Hola Mundo!')}
        style={{ width:50, height: 50, backgroundColor: 'red', borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text style={{ color: 'white' }}>Pulsa aquí</Text>

      </TouchableHighlight>*/}

       {/* Prueba de usando Preseable para los botones, ya que button y headerHighlight ya no se usan mucho 
      <Pressable
        onPress={() => {
          
        }}

        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255' : 'white',
          },
          styles.wrapperCustom,
        ]}
      >

        {({ pressed }) => (
          <Text style={{
            fontSize: pressed ? 32 : 16
          }}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
        )}
      </Pressable>
      */}

      <StatusBar style="auto" />
      
      <Text style={styles.header}>Usuarios</Text>

      {loading && <Text style={styles.info}>Cargando...</Text>}
      {error ? <Text style={styles.error}>{error}</Text> : null}

      {!loading && users.length === 0 && (
        <Text style={styles.warning}>NO HAY USUARIOS</Text>
      )}


    {/*Scroll estatico*/}
      <ScrollView>
        {users.map(u => (
          <View key={u.id} style={styles.card}>
            <Text style={styles.name}>{u.name}</Text>
            <Text><Text style={styles.label}>Email: </Text>{u.email}</Text>
            <Text><Text style={styles.label}>Tel: </Text>{u.phone}</Text>
            <Text><Text style={styles.label}>Web: </Text>{u.website}</Text>
          </View>
        ))}

      </ScrollView>

    <View/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#40E0D0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 12,
  },
  /*header: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff"
  },
  info: {
    color: "#000",
    fontSize: 18,
    marginBottom: 10,
  }, 
  error: {
    color: "red",
    fontSize: 18,
    marginBottom: 10,
  }, 
  warning: {
    color: "orange",
    fontSize: 18,
    marginBottom: 10,
  }, 
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
    elevation: 2, // sombra en Android
    shadowColor: "#000", // sombra en iOS
    shadowOpacity: 0.2,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 4,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  label: {
    fontWeight: "bold",
  }*/}
  
);
