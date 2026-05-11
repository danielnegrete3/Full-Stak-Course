import { StyleSheet } from 'react-native';
import Main from './src/components/Main';
import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';

export default function App() {
  return (
  <>
    <StatusBar style="dark" />
    <NativeRouter>
      <Main />
    </NativeRouter>
  </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
