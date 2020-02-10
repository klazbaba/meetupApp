import { StyleSheet } from 'react-native';

import { colors } from '../../colors';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.white,
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '30%'
  },
  image: {
    marginTop: 80,
    marginBottom: 16
  },
  button: {
    width: '100%'
  },
  logoWrapper: {
    position: 'absolute',
    left: 40,
    top: 40
  },
  copyright: {
    textAlign: 'center',
    position: 'absolute',
    bottom: '10%'
  }
});
