import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import App from './Login';
// import  { useNavigation } from '@react-navigation/native';

const ButtonCustom = ({ text, color }) => {
  return (
      <View style={{
        backgroundColor: color,
        width: '100%',
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        marginTop: 20,
      }}>
        <Text style={{
          textAlign: 'center',
          color: 'white',
          fontSize: 18,
          fontWeight: 'bold',
        }}>
          {text}
        </Text>
      </View>
    
  )
}

const TextInputCustom = ({ placeholder, typekeyboard }) => {
  return (
    <TextInput
      placeholder={placeholder}
      keyboardType={typekeyboard}
      style={{
        width: '100%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        paddingLeft: 10,
        fontSize: 18,
      }}
    />
  )
}

const ForgotPassword = () => {
// const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Forgot password</Text>
        <View style={styles.form}>
          <Text style={styles.description}>Please enter your email address. You will receive a link to create a new password via email.</Text>
          <TextInputCustom placeholder="Email" typekeyboard="email-address" />
          <ButtonCustom text="SEND" color="red" />
        </View>
      </View>
    </View>
  )
}

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
  description: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 10,
  },
});
