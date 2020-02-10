import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';

import Image from '../../images/image';
import Logo from '../_components/Logo';
import { styles } from './styles';
import AbstractShape from '../_components/AbstractShape';
import CustomText from '../_components/CustomText';
import CustomButton from '../_components/CustomButton';

interface Props {
  navigation: any;
}

export default class GuideScreen extends Component<Props> {
  gotoHome = () => {
    const { navigate } = this.props.navigation;
    navigate('HomeScreen');
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container} style={{ flex: 1 }}>
        <View style={styles.logoWrapper}>{Logo(this.props)}</View>
        <Image style={styles.image} />
        <CustomText text='Connect with your business partners' />
        <CustomText text='and associates using the new platform' style={{ marginBottom: 32 }} />

        <CustomButton label='Skip Introduction' style={styles.button} onPress={this.gotoHome} />
        <CustomText text={'copyright \u00A9 meetup'} style={styles.copyright} />
        {AbstractShape(this.props)}
      </ScrollView>
    );
  }
}
