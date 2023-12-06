import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import CustomButton from '../utils/CustomButton';
import RNFS from 'react-native-fs';
import {useNavigation} from '@react-navigation/native';

export default function Camera() {
  const [{cameraRef}, {takePicture}] = useCamera(null);
  const navigation = useNavigation();
  const [capturedImage, setCapturedImage] = useState(null);

  const captureHandle = async () => {
    try {
      const data = await takePicture();
      console.log(data.uri);
      setCapturedImage(data.uri);
    } catch (error) {
      console.log(error);
    }
  };

  const retakePhoto = () => {
    setCapturedImage(null);
  };

  const savePhoto = () => {
    const filePath = capturedImage;
    const newFilePath = RNFS.ExternalDirectoryPath + '/MyTest.jpg';
    RNFS.moveFile(filePath, newFilePath)
      .then(() => {
        console.log('IMAGE MOVED', filePath, '-- to --', newFilePath);
        goToNextScreen();
      })
      .catch(error => {
        console.log(error);
      });
  };

  const goToNextScreen = () => {
    navigation.navigate('Info');
  };

  return (
    <View style={styles.body}>
      {capturedImage ? (
        <View style={styles.preview}>
          <Image
            source={{uri: capturedImage}}
            style={styles.previewImage}
            resizeMode="contain"
          />
          <View style={styles.buttonContainer}>
            <CustomButton
              title="Retake"
              color="#e74c3c"
              onPressFunction={retakePhoto}
              style={styles.button}
            />
            <CustomButton
              title="Save"
              color="#1eb900"
              onPressFunction={savePhoto}
              style={styles.button}
            />
          </View>
        </View>
      ) : (
        <RNCamera
          ref={cameraRef}
          type={RNCamera.Constants.Type.back}
          style={styles.camera}>
          <CustomButton
            title="Capture"
            color="#1eb900"
            onPressFunction={captureHandle}
          />
        </RNCamera>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  preview: {
    flex: 1,
    position: 'relative',
  },
  previewImage: {
    flex: 1,
    marginBottom: 80, // Adjust the margin as needed
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    marginHorizontal: 10, // Add margin for separation
  },
});
