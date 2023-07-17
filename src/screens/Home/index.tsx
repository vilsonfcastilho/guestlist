import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Guest } from '../../components/Guest';

import { styles } from './styles';

export function Home() {
  const [ guests, setGuests ] = useState<string[]>([]);
  const [ guestName, setGuestName ] = useState('');

  function handleAddGuest() {
    if (guests.includes(guestName)) {
      return Alert.alert('Guest already registered.', 'There is already a guest with that name registered.');
    }

    setGuests(prevState => [...prevState, guestName]);
    setGuestName('');
  }

  function handleRemoveGuest(name: string) {
    Alert.alert('Remove guest.', `Are you sure you want to remove ${name} from the list?`, [
      {
        text: 'Yes',
        onPress: () => setGuests(prevState => prevState.filter(guest => guest !== name)),
      },
      {
        text: 'No',
        style: 'cancel',
      }
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventTitle}>Event name</Text>

      <Text style={styles.eventDateText}>
        Friday, 14 of July of 2023.
      </Text>

      <View style={styles.addGuestFormContainer}>
        <TextInput
          style={styles.addGuestInput}
          placeholder='Nome do convidado'
          placeholderTextColor='#6b6b6b'
          onChangeText={setGuestName}
          value={guestName}
        />

        <TouchableOpacity
          style={styles.addGuestButton}
          onPress={handleAddGuest}
        >
          <Text style={styles.addGuestButtonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.guestsTitle}>Guest list</Text>

      <FlatList
        data={guests}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Guest
            key={item}
            name={item}
            onRemove={() => handleRemoveGuest(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>
            No guest has been added. Add guests to your guest list.
          </Text>
        )}
        style={styles.guestList}
      />
    </View>
  );
}
