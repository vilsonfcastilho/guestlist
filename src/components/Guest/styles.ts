import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },

  guestNameContainer: {
    flex: 1,
    height: 56,
    backgroundColor: '#1f1e25',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 16,
  },

  guestNameText: {
    color: '#fff',
    fontSize: 16,
  },

  removeGuestButtonText: {
    color: '#fff',
    fontSize: 24,
  },

  removeGuestButton: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#e23c44',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
