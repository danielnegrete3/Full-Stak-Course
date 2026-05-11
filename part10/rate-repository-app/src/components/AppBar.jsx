import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
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
    'Repositories':'/',
    'Signin':'/signin',
}

const AppBar = () => {
  return (
    <View style={styles.container}>
        {
            Object.entries(pages).map(([Name,Page])=>
                <Link to={Page} key={`bar-${Name}`} ><Text fontWeight='bold' style={styles.items}>{Name}</Text></Link>
            )
        }
    </View>
  );
};

export default AppBar;