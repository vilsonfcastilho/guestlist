import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './styles';

type GuestProps = {
  name: string;
  onRemove: () => void;
}

export function Guest({ name, onRemove }: GuestProps) {
  return (
    <View style={styles.container}>
      <View style={styles.guestNameContainer}>
        <Text style={styles.guestNameText}>
          {name}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.removeGuestButton}
        onPress={onRemove}
      >
        <Text style={styles.removeGuestButtonText}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  );
}
