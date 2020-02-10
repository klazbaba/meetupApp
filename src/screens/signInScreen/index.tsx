import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import Logo from './_components/logo';
import { styles } from './styles';
import CustomText from '../_components/CustomText';
import AbstractShape from '../_components/AbstractShape';
import CustomInput from '../_components/CustomInput';
import CustomButton from '../_components/CustomButton';

interface Props {
  navigation: any;
}

export default class SignInScreen extends Component<Props> {
  render() {
    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
        {Logo(this.props)}
        <CustomText text='Hello!' isBold style={styles.boldText} />
        <CustomText text='Please enter your' />
        <CustomText text='details to sign in' style={{ marginBottom: 32 }} />

        <CustomInput label='Phone Number' />
        <CustomInput label='Pin' style={{ marginTop: 16 }} isPin />
        <CustomText text='forgot your pin?' style={styles.forgotPin} />

        <CustomButton label='Sign in' style={styles.button} />
        {AbstractShape(this.props)}
      </ScrollView>
    );
  }
}
