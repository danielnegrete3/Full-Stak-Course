import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'start',
    gap:10,
    backgroundColor:'#3d3d3d',
    // ...
  },
  items:{
    color:'#EEEEEE',
    fontSize:20,
  }
  // ...
});

const pages = {
    'Repositories':'',
}

const AppBar = () => {
  return (
    <View style={styles.container}>
        {
            Object.entries(pages).map(([Name,Page])=>
                <Text fontWeight='bold'  key={`bar-${Name}`} style={styles.items}>{Name}</Text>
            )
        }
    </View>
  );
};

export default AppBar;