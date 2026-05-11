import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import Text from './Text';

const styles = StyleSheet.create({
  scroller: {
    width:'100%',
    backgroundColor:'#3d3d3d',
    padding:0,
    margin:0,
    height:'10%',
    maxHeight:'10%'
  },
  container: {
    paddingTop: '4%',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'start',
    gap:10,
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
    
    <ScrollView horizontal style={styles.scroller}>
        <View style={styles.container}>
        {
            Object.entries(pages).map(([Name,Page])=>
                <Link to={Page} key={`bar-${Name}`} ><Text fontWeight='bold' style={styles.items}>{Name}</Text></Link>
            )
        }
      </View>
    </ScrollView>
  );
};

export default AppBar;