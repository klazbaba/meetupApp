import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import { CheckBox } from 'native-base';

import AbstractShape from '../_components/AbstractShape';
import { styles } from './styles';
import Logo from '../_components/Logo';
import CustomText from '../_components/CustomText';
import CustomInput from '../_components/CustomInput';
import { colors } from '../../colors';
import CustomButton from '../_components/CustomButton';

interface Props {
  navigation: any;
}

export default class SignUpScreen extends Component<Props> {
  gotoSignIn = () => {
    const { navigate } = this.props.navigation;
    navigate('SignInScreen');
  };

  register = () => {
    const { navigate } = this.props.navigation;
    navigate('SignInScreen', { isAfterRegistering: true });
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container} style={{ flex: 1 }}>
        {Logo(this.props)}
        <CustomText text='Register' isBold style={styles.boldText} />

        <CustomInput label='Full Names' />
        <CustomInput label='Phone Number' keyboardType='numeric' style={{ marginTop: 16 }} />
        <CustomInput label='Pin' style={{ marginTop: 16 }} isPin keyboardType='numeric' />
        <CustomInput label='Repeat Pin' style={{ marginTop: 16 }} isPin keyboardType='numeric' />

        <View style={styles.checkRow}>
          <CheckBox checked style={styles.checkBox} color={colors.red} />
          <CustomText text='I agree to the terms & conditions' />
        </View>

        <CustomButton label='Register' style={styles.button} onPress={this.register} />
        <View style={{ flex: 1 }}></View>

        <TouchableOpacity style={styles.bottomComponent} onPress={this.gotoSignIn}>
          <CustomText text='Already have an account?' />
          <CustomText text='Sign in' style={styles.signInText} />
        </TouchableOpacity>

        {AbstractShape(this.props)}
      </ScrollView>
    );
  }
}
