import React from 'react';
import {
  View, Text, StyleSheet, Dimensions,
} from 'react-native';
import { Input, Button } from 'react-native-elements';
import firebase from '../../../utils/initializeFirebase';
import useForm from '../../../utils/formHooks/useForm';
import validate from '../../../utils/formHooks/validationRules';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  form: {
    width: 350,
  },
  validateText: {
    color: 'red',
    marginLeft: 15,
  },
  inputs: {
    marginBottom: 10,
  },
});

const EmailPasswordLoginScreen: React.FC = () => {
  const createUser = () => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const { email, password } = values;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((credentials) => { console.log('create user success'); })
      .catch((error) => { console.log(error); });
  };


  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(createUser, validate);

  // useFormのsetValuesで特定のkeyで入力値を保存したい
  const email = 'email';
  const password = 'password';
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.inputs}>
          <Input
            placeholder="e-mail"
            onChangeText={(t) => handleChange(email, t)}
            value={values.email}
          />
          {errors.email
            ? <Text style={styles.validateText}>{errors.email}</Text>
            : null}
          <Input
            placeholder="password"
            onChangeText={(t) => handleChange(password, t)}
            value={values.password}
          />
          {errors.password
            ? <Text style={styles.validateText}>{errors.password}</Text>
            : null}
        </View>
        <Button
          title="Create Account"
          type="outline"
          raised
          onPress={(e) => handleSubmit(e)}
        />
      </View>
    </View>
  );
};

export default EmailPasswordLoginScreen;
