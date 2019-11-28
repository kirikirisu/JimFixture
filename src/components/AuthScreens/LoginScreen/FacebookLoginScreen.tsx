import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import * as Facebook from 'expo-facebook';
import { Button } from 'react-native-elements';
import firebase from '../../../utils/initializeFirebase';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const FacebookLoginScreen: React.FC = () => {
  const loginWithFaceBook = async () => {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      '567552277140467',
      { permissions: ['public_profile'] },
    );

    if (type === 'success') {
      // Build Firebase credential with the Facebook access token.
      const credential = firebase.auth.FacebookAuthProvider.credential(token);
      // Sign in with credential from the Facebook user.
      firebase.auth().signInWithCredential(credential).catch((error) => {
        // Handle Errors here.
      });
    }
  };

  // パブリックメソッド
  // https://firebase.google.com/docs/reference/android/com/google/firebase/auth/FirebaseAuth.AuthStateListener
  firebase.auth().onAuthStateChanged((user) => {
    console.log(user);
    if (user != null) {
      console.log('We are authenticated now!');
    } else {
      console.log('please login');
    }
  });

  return (
    <View style={styles.container}>
      <Button
        title="Login With Facebook"
        type="outline"
        onPress={() => loginWithFaceBook()}
      />
    </View>
  );
};

export default FacebookLoginScreen;