import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text, View, Button, TextInput, Alert} from 'react-native';
import {Formik, Form} from 'formik';
// import SignupSchema from './validations';
import FormField from '../layouts/FormField';
import {styles} from '../../../css/styles';

const LoginForm = ({navigation}) => {
  const goToDashboard = () => navigation.navigate('Dashboard');

  // if (isAuthenticated) goToDashboard();

  const onSubmitHandle = async values => {};

  const isValidForm = (isValid, touched) => {
    return isValid && Object.keys(touched).length !== 0;
  };

  return (
    <>
      <View style={styles.container}>
        <Formik
          initialValues={{username: '', password: ''}}
          // validationSchema={SignupSchema}
          onSubmit={onSubmitHandle}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <>
              <FormField
                label="Username"
                field="username"
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
                errors={errors}
                touched={touched}
              />
              <FormField
                label="Password"
                field="password"
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
                errors={errors}
                touched={touched}
              />

              <Button onPress={handleSubmit} title="Login" />
            </>
          )}
        </Formik>
      </View>
    </>
  );
};

export default LoginForm;
