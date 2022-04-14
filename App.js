import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View  } from 'react-native';
import Login from './src/View/Login'

export default function App() {
  return <>
          <StatusBar hidden = {false}/>
           <Login />
          </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
