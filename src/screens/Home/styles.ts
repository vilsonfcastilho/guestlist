import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },

  eventTitle: {
    marginTop: 24,
    color: '#fff',
    fontSize: 24,
  },

  eventDateText: {
    color: '#6b6b6b',
  },

  addGuestFormContainer: {
    marginTop: 16,
    width: '100%',
    flexDirection: 'row',
    gap: 8,
  },

  addGuestInput: {
    flex: 1,
    height: 56,
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    color: '#fff',
    padding: 16,
    fontSize: 16,
  },

  addGuestButtonText: {
    color: '#fff',
    fontSize: 24,
  },

  addGuestButton: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31cf67',
    alignItems: 'center',
    justifyContent: 'center',
  },

  guestsTitle: {
    marginTop: 24,
    color: '#fff',
    fontSize: 24,
  },

  guestList: {
    marginTop: 16,
  },

  emptyListText: {
    color: '#fff'
  }
})
