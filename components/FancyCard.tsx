import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqA7lKhCgO4l_Hqt1MIelunfhjgX9FLe6hjg&s',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Fewa Lake Pokhara</Text>
          <Text style={styles.cardLabel}>Tourism Capital City</Text>
          <Text style={styles.cardDescription}>
            Phewa Lake or Phewa Tal (Nepali: फेवा ताल, [ˈpʰewa tal]) is a
            freshwater lake in Nepal formerly called Baidam Tal located in the
            south of the Pokhara Valley that includes Pokhara city and parts of
            Sarangkot and Kaskikot.
          </Text>
          <Text style={styles.cardFooter}>12 Mins Away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {},
  cardElevated: {},
  cardImage: {
    height: 180,
  },
  cardBody: {},
  cardTitle: {},
  cardLabel: {},
  cardDescription: {},
  cardFooter: {},
});
