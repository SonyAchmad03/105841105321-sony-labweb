import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image source={require('./assets/profil.jpg')} style={styles.profileImage} />
        <Text style={styles.profileName}>Sony Achmad Djalil</Text>
        <Text style={styles.profileEmail}>sony@mail.com</Text>
      </View>

      <TouchableOpacity style={styles.option} onPress={() => { /* Navigate to orders */ }}>
        <Text style={styles.optionText}>Pesanan saya</Text>
        <Text style={styles.optionSubText}>Sudah memiliki 12 pesanan</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => { /* Navigate to shipping addresses */ }}>
        <Text style={styles.optionText}>Alamat pengiriman</Text>
        <Text style={styles.optionSubText}>3 alamat</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => { /* Navigate to payment methods */ }}>
        <Text style={styles.optionText}>Metode pembayaran</Text>
        <Text style={styles.optionSubText}>Visa ****1234</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => { /* Navigate to promocodes */ }}>
        <Text style={styles.optionText}>Kode promo</Text>
        <Text style={styles.optionSubText}>Anda memiliki kode promo khusus</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => { /* Navigate to reviews */ }}>
        <Text style={styles.optionText}>Ulasan saya</Text>
        <Text style={styles.optionSubText}>Ulasan untuk 4 item</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => { /* Navigate to settings */ }}>
        <Text style={styles.optionText}>Pengaturan</Text>
        <Text style={styles.optionSubText}>Notifikasi, kata sandi</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileHeader: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileEmail: {
    fontSize: 16,
    color: '#777',
    marginTop: 5,
  },
  option: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    fontSize: 18,
    fontWeight: '500',
  },
  optionSubText: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
});

export default ProfileScreen;
