import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';
import GlobalStyle from '../utils/GlobalStyle';
import CustomButton from '../utils/CustomButton';
export default function HuntInfo({navigation}) {
  const [randomImage, setRandomImage] = useState(null);

  const getRandomImage = () => {
    const images = [
      require('C:\\Users\\Terry\\WebstormProjects\\ScavengerHunt\\assets\\dog.png'),
      require('C:\\Users\\Terry\\WebstormProjects\\ScavengerHunt\\assets\\table.png'),
      // require('C:\\Users\\Terry\\WebstormProjects\\ScavengerHunt\\assets\\Koolaid.png'),
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
  };
  useEffect(() => {
    getRandomImage();
  }, []);
  return (
    <View style={styles.body}>
      <Text style={[GlobalStyle.CustomFont, styles.text]}>Go Find This !</Text>
      {randomImage && (
        <View style={styles.imageContainer}>
          <Image
            source={randomImage}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      )}
      <CustomButton
        title="Start Scavenger Hunt"
        color="#0080ff"
        onPressFunction={() => {
          navigation.navigate('Camera', {lastSelectedImage: randomImage});
        }}
      />
      <Button title="Get Random Image" onPress={getRandomImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    margin: 10,
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 130,
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#cccccc',
    borderRadius: 5,
    margin: 7,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    margin: 10,
  },
  subtitle: {
    fontSize: 20,
    margin: 10,
    color: '#999999',
  },
  imageContainer: {
    width: 300,
    height: 300,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    margin: 10,
    display: 'flex',
  },
});
