import React from 'react';
import {Text, View, TextInput} from 'react-native';
import {styles} from '../../../css/styles';

const FormField = ({
  label,
  field,
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
}) => {
  return (
    <>
      <View style={styles.formGroup}>
        <Text style={styles.labelName}>{label}</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleChange(field)}
          onBlur={handleBlur(field)}
          value={values[field]}
        />
        {errors[field] && touched[field] ? (
          <View style={styles.errorsContainer}>
            <Text style={styles.errorsText}>{errors[field]}</Text>
          </View>
        ) : null}
      </View>
    </>
  );
};

export default FormField;
