import * as React from 'react';
import {
  Image,
  TouchableHighlight
} from 'react-native';

import {NavigationContainer}  from '@react-navigation/native';  // naviagtion
import {createStackNavigator} from '@react-navigation/stack';   // stack navigation
import { Provider as PaperProvider } from 'react-native-paper'; // UI
import Orientation from 'react-native-orientation';             // Screen orientation
import page1 from 'E:/dev/sai_kt/VM_01/src/screens/page1.js';   // screen1 paths
import page2 from 'E:/dev/sai_kt/VM_01/src/screens/page2';      // screen2 paths


const Stack = createStackNavigator();

/* Homeicon -oreintation button*/
function LogoTitle() {
  return (
    <TouchableHighlight 
      onPress={() => Orientation.lockToLandscape()}
      onLongPress={() => Orientation.lockToPortrait()}
    >
      <Image
        style={{ width: 50, height: 50 }}
        source={require('E:/dev/sai_kt/VM_01/src/assets/home.png')}
      />
    </TouchableHighlight>
  );
}

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Page1" 
            component={page1} 
            options={{ 
             title: 'Page1',
             headerRight: (props) => <LogoTitle {...props} />,
             headerStyle: {backgroundColor: '#303d97'} ,
             headerTintColor: '#ffffff',
             headerTitleStyle: {fontWeight: '900'},
          }}/>
          <Stack.Screen 
             name="page2"
             component={page2}
             options={{ 
               title: 'page2',
               headerStyle: {backgroundColor: '#000000'} ,
               headerTintColor: '#ffffff',
               headerTitleStyle: {fontWeight: '900'},
           }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;