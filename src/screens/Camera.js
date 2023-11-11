import React from 'react';
import {View, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import CustomButton from '../utils/CustomButton';
import RNFS from 'react-native-fs';
import {useNavigation} from '@react-navigation/native';

export default function Camera() {
  const [{cameraRef}, {takePicture}] = useCamera(null);
  const navigation = useNavigation();

  const captureHandle = async () => {
    try {
      const data = await takePicture();
      console.log(data.uri);
      const filePath = data.uri;
      const newFilePath = RNFS.ExternalDirectoryPath + '/MyTest.jpg';
      RNFS.moveFile(filePath, newFilePath)
        .then(() => {
          console.log('IMAGE MOVED', filePath, '-- to --', newFilePath);
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const goToNextScreen = () => {
    navigation.navigate('Info');
  };

  return (
    <View style={styles.body}>
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        style={styles.preview}>
        <CustomButton
          title="Capture"
          color="#1eb900"
          onPressFunction={() => {
            captureHandle();
            goToNextScreen();
          }}
        />
      </RNCamera>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  preview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
