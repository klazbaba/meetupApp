import { StyleSheet } from 'react-native';

import { colors } from '../../colors';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.white,
    padding: 16
  },
  headerLeftIcon: {
    marginLeft: 16
  },
  headerRight: {
    marginRight: 16,
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-between'
  },
  topCompartment: {
    flexDirection: 'row'
  },
  picker: {
    borderWidth: 0.5,
    flex: 1,
    borderColor: colors.grey
  },
  commitsWrapper: {
    borderWidth: 0.5,
    flexDirection: 'row',
    marginLeft: 8,
    alignItems: 'center',
    borderColor: colors.grey
  },
  varietiesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16
  },
  selectedVariety: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    padding: 8
  },
  focusedText: {
    color: colors.white,
    marginHorizontal: 16,
    fontWeight: 'bold'
  },
  itemsSection: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
