import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import Logo from '../_components/Logo';
import { styles } from './styles';
import AbstractShape from '../_components/AbstractShape';
import CustomText from '../_components/CustomText';
import CustomInput from '../_components/CustomInput';

interface Props {
  navigation: any;
}

export default class CongratScreen extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container} style={{ flex: 1 }}>
        {Logo(this.props)}
        <CustomText text='Congratulations!' isBold style={styles.boldText} />
        <CustomText text='You have successfully registered' />
        <CustomText text='your account. You can now sign in' style={{ marginBottom: 32 }} />

        <CustomInput label='Phone Number' keyboardType='numeric' />
        <CustomInput label='Pin' style={{ marginTop: 16 }} isPin keyboardType='numeric' />

        {AbstractShape(this.props)}
      </ScrollView>
    );
  }
}
