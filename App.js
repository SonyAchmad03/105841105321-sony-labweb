import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ImageSlider from 'react-native-image-slider';

export default function App() {
  const images = [
    require('./assets/baju/baju1.jpeg'),
    require('./assets/baju/baju2.jpeg'),
    require('./assets/baju/baju3.jpeg'),
    require('./assets/baju/baju4.jpeg'),
    require('./assets/baju/baju5.jpeg'),
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Gallery</Text>
      <ImageSlider
        images={images}
        autoPlayWithInterval={3000}
        customSlide={({ index, item, style, width }) => (
          <View key={index} style={[style, styles.customSlide]}>
            <Image source={item} style={[styles.customImage, { width: width }]} />
          </View>
        )}
        customButtons={(position, move) => (
          <View style={styles.buttons}>
            {images.map((_, index) => (
              <Text
                key={index}
                onPress={() => move(index)}
                style={index === position ? styles.buttonSelected : styles.button}
              >
                {index + 1}
              </Text>
            ))}
          </View>
        )}
        onPositionChanged={(position) => console.log(`Current position: ${position}`)}
        onPress={(image, index) => alert(`Image ${index + 1} pressed`)}
        style={styles.slider}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  customSlide: {
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  customImage: {
    height: 300,
    resizeMode: 'contain',
  },
  buttons: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: 18,
    color: '#888',
    margin: 5,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    textAlign: 'center',
  },
  buttonSelected: {
    fontSize: 18,
    color: '#fff',
    margin: 5,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    textAlign: 'center',
  },
  slider: {
    width: '100%',  // Pastikan slider mengisi lebar kontainer
    height: 300,    // Sesuaikan tinggi slider jika perlu
  },
});
