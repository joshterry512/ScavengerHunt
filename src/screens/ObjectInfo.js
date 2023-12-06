import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';
import GlobalStyle from '../utils/GlobalStyle';
import CustomButton from '../utils/CustomButton';

export default function ObjectInfo({navigation}) {
  const [randomImage, setRandomImage] = useState(null);
  const [confettiActive, setConfettiActive] = useState(true);

  const images = [
    {
      source: require('C:\\Users\\Terry\\WebstormProjects\\ScavengerHunt\\assets\\dog.png'),
      description: 'Dogs are thought to be as smart as two-year-old children.',
    },
    // {
    //   source: require('C:\\Users\\Terry\\WebstormProjects\\ScavengerHunt\\assets\\table.png'),
    //   description: 'A sturdy table',
    // },
    // {
    //   source: require('C:\\Users\\Terry\\WebstormProjects\\ScavengerHunt\\assets\\Koolaid.png'),
    //   description: 'A refreshing Kool-Aid',
    // },
  ];

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
  };

  useEffect(() => {
    getRandomImage();

    // Disable confetti after 5 seconds
    const confettiTimer = setTimeout(() => {
      setConfettiActive(false);
    }, 5000);

    return () => clearTimeout(confettiTimer);
  }, []);

  return (
    <View style={styles.body}>
      {confettiActive && (
        <ConfettiCannon
          count={200} // Number of confetti
          origin={{x: -10, y: 0}} // Where the confetti originates
          autoStart={true}
        />
      )}
      <Text style={[GlobalStyle.CustomFont, styles.text]}>Did You Know !</Text>
      {randomImage && (
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={randomImage.source}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.description}>{randomImage.description}</Text>
        </View>
      )}
      <CustomButton
        title="End Scavenger Hunt"
        color="#0080ff"
        onPressFunction={() => {
          navigation.navigate('Home');
        }}
      />
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
  container: {
    alignItems: 'center',
    margin: 10,
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
  description: {
    fontSize: 20,
    textAlign: 'center',
  },
});
