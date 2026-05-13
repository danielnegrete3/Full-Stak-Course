import { Platform, Pressable, StyleSheet, TextInput, View } from 'react-native';
import Text from './Text';
import { useFormik } from 'formik';
import theme from '../theme';
import * as yup from 'yup';

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
    width:'90%',
    fontFamily:Platform.select(theme.fonts)
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
  inputError:{
    color:theme.colors.error,
    borderColor:theme.colors.error,
  },
  error:{
    color:theme.colors.error,
  }
})

const SignIn = ({onSubmit}) => {
  const validationSchema = yup.object().shape({
    username:yup.string().required('Username is required'),
    password:yup.string().required('Password is required')
  })

  const formik = useFormik({
    initialValues:{
      username:'',
      password:'',
    },
    validationSchema,
    onSubmit,
  });


  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input,formik.errors.username && styles.inputError]}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        onBlur={formik.handleBlur('username')}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={styles.error}>{formik.errors.username}</Text>
      )}
      <TextInput
        style={[styles.input,formik.errors.password && styles.inputError]}
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={styles.error}>{formik.errors.password}</Text>
      )}
      <Pressable onPress={formik.handleSubmit}>
        <Text style={styles.button}>Submit</Text>
      </Pressable>
    </View>
  )
};

export default SignIn;