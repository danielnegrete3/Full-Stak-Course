import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import Text from './Text';
import { useFormik } from 'formik';
import theme from '../theme';

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    gap:8,
    marginVertical:'10%'
  },
  input:{
    borderRadius:10,
    padding:10,
    borderColor:theme.colors.textPrimary,
    borderWidth:2,
    width:'90%'
  },
  button:{
    minWidth:'40%',
    backgroundColor:theme.colors.primary,
    color:theme.colors.contrast,
    fontSize:theme.fontSizes.subheading,
    fontWeight:theme.fontWeights.bold,
    padding:'3%',
    borderRadius:10,
    textAlign:'center',
  },
})

const SignIn = ({onSubmit}) => {
  const formik = useFormik({
    initialValues:{
      username:'',
      password:'',
    },
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />
      <Pressable onPress={formik.handleSubmit}>
        <Text style={styles.button}>Submit</Text>
      </Pressable>
    </View>
  )
};

export default SignIn;