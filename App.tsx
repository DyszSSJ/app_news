import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailScreen from './src/screens/detailScreen';
import HomeScreen from './src/screens/homeScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen
            name="home"
            component={HomeScreen}
            options={{
              title: 'Noticias Mundiales',
              headerStyle: {
                backgroundColor: '#5c6cff',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="detail"
            component={DetailScreen}
            options={{
              title: 'Detalle de Noticia',
              headerStyle: {
                backgroundColor: '#5c6cff',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
