import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const CustomButton = ({ text, color, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
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
    </TouchableOpacity>
  );
};

const CustomTextInput = ({ placeholder, keyboardType }) => {
  return (
    <TextInput
      placeholder={placeholder}
      keyboardType={keyboardType}
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
  );
};

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Sign Up</Text>
        <View style={styles.form}>
          <CustomTextInput placeholder="Name" keyboardType="default" />
          <CustomTextInput placeholder="Email" keyboardType="email-address" />
          <CustomTextInput placeholder="Password" keyboardType="default" />
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 10 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{ fontSize: 16, textAlign: 'center' }}>Already have an account?</Text>
            </TouchableOpacity>
          </View>
          <CustomButton text="SIGN UP" color="red" onPress={() => {}} />
        </View>
      </View>
      <Text style={{ fontSize: 16, textAlign: 'center' }}>Or sign up with social account</Text>
      <View style={styles.logoRow}>
        <View style={styles.logoContainer}>
          <Image source={require('./assets/facebook.png')} style={styles.logo} />
        </View>
        <View style={styles.logoContainer}>
          <Image source={require('./assets/google.png')} style={styles.logo} />
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;

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
  logoRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  logoContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 10,
    marginHorizontal: 10,
  },
  logo: {
    width: 50,
    height: 50,
  },
});
