import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

import { colors } from '../../../colors';
import CustomText from '../../_components/CustomText';

interface Props {
  image: any;
  title: string;
  price: string;
  discount?: string;
  color: string;
}

export default function DisplayItem(props: Props) {
  return (
    <View style={styles.wrapper}>
      <View style={[styles.imageWrapper, { backgroundColor: props.color }]}>
        <Image source={props.image} style={styles.image} />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View>
          <CustomText text={props.title} />
          <View style={styles.priceSection}>
            <CustomText text={props.price} />
            <CustomText text={props.discount} style={styles.discount} />
          </View>
        </View>
        <Icon name='dots-three-vertical' type='Entypo' style={styles.dots} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageWrapper: {
    borderRadius: 3,
    marginTop: 16
  },
  wrapper: {
    marginVertical: 16
  },
  discount: {
    color: colors.red,
    marginLeft: 8
  },
  priceSection: {
    flexDirection: 'row'
  },
  dots: {
    fontSize: 18,
    color: colors.grey
  },
  image: {
    height: 220
  }
});
