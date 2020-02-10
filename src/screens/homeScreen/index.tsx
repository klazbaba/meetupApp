import React, { Component } from 'react';
import { ScrollView, Image, View, TouchableOpacity } from 'react-native';
import { Picker, Icon } from 'native-base';

import { styles } from './styles';
import CustomText from '../_components/CustomText';
import DisplayItem from './_components/DisplayItem';

export default class HomeScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Meetup',
    headerLeft: () => <Icon name='menu' style={styles.headerLeftIcon} />,
    headerRight: () => (
      <View style={styles.headerRight}>
        <Image source={require('../../images/search.png')} />
        <Image source={require('../../images/bell.png')} />
        <Image source={require('../../images/Shape.png')} />
      </View>
    )
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container} style={{ flex: 1 }}>
        <View style={styles.topCompartment}>
          <View style={styles.picker}>
            <Picker selectedValue='Casual Dress' mode='dropdown'>
              <Picker.Item label='Casual Dress' value={0} />
            </Picker>
          </View>

          <View style={styles.commitsWrapper}>
            <Image source={require('../../images/commit.png')} />
            <Image source={require('../../images/commit.png')} />
            <Image source={require('../../images/commit.png')} />
          </View>
        </View>

        <View style={styles.varietiesRow}>
          <TouchableOpacity style={styles.selectedVariety}>
            <CustomText text='Dress' style={styles.focusedText} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.selectedVariety, { backgroundColor: 'transparent' }]}>
            <CustomText text='Pants' style={[styles.focusedText, { color: null }]} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.selectedVariety, { backgroundColor: 'transparent' }]}>
            <CustomText text='Blazers' style={[styles.focusedText, { color: null }]} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.selectedVariety, { backgroundColor: 'transparent' }]}>
            <CustomText text='Jackets' style={[styles.focusedText, { color: null }]} />
          </TouchableOpacity>
        </View>

        <View style={styles.itemsSection}>
          <DisplayItem
            image={require('../../images/image0.png')}
            title='Fit and Flare'
            color='#EBD0B7'
            price='$120.99'
            discount='10% Off'
          />
          <DisplayItem
            image={require('../../images/image1.png')}
            title='Empire Dress'
            color='transparent'
            price='$120.99'
            discount='10% Off'
          />
          <DisplayItem
            image={require('../../images/image2.png')}
            title='Summer Vibes'
            color='transparent'
            price='$120.99'
            discount='10% Off'
          />
          <DisplayItem
            image={require('../../images/image3.png')}
            title='Flora Fun'
            color='transparent'
            price='$120.99'
            discount='10% Off'
          />
          <DisplayItem
            image={require('../../images/image4.png')}
            title='Fit and Flare'
            color='transparent'
            price='$120.99'
            discount='10% Off'
          />
          <DisplayItem
            image={require('../../images/image5.png')}
            title='Empire Dress'
            color='transparent'
            price='$120.99'
            discount='10% Off'
          />
        </View>
      </ScrollView>
    );
  }
}
