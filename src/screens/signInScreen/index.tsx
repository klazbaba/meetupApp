import React, { Component } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

import Logo from '../_components/Logo';
import { styles } from './styles';
import CustomText from '../_components/CustomText';
import AbstractShape from '../_components/AbstractShape';
import CustomInput from '../_components/CustomInput';
import CustomButton from '../_components/CustomButton';

interface Props {
  navigation: any;
}

export default class SignInScreen extends Component<Props> {
  gotoSignUp = () => {
    const { navigate } = this.props.navigation;
    navigate('SignUpScreen');
  };

  render() {
    const { getParam } = this.props.navigation;

    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
        {Logo(this.props)}
        <CustomText
          text={getParam('isAfterRegistering') ? 'Congratulations!' : 'Hello!'}
          isBold
          style={styles.boldText}
        />
        <CustomText text='Please enter your' />
        <CustomText text='details to sign in' style={{ marginBottom: 32 }} />

        <CustomInput label='Phone Number' keyboardType='numeric' />
        <CustomInput label='Pin' style={{ marginTop: 16 }} isPin keyboardType='numeric' />
        <CustomText text='forgot your pin?' style={styles.forgotPin} />

        <CustomButton label='Sign in' style={styles.button} />
        <TouchableOpacity style={styles.noAccountWrapper} onPress={this.gotoSignUp}>
          <CustomText text="Don't have an account?" />
          <CustomText text='Sign up' style={styles.signUpText} />
        </TouchableOpacity>

        <CustomText text={'copyright \u00A9 meetup'} style={{ textAlign: 'center' }} />
        {AbstractShape(this.props)}
      </ScrollView>
    );
  }
}
