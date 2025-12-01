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
            Phewa Lake or Phewa Tal is a freshwater lake in Nepal formerly
            called Baidam Tal located in the south of the Pokhara Valley that
            includes Pokhara city and parts of Sarangkot and Kaskikot.
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
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    color: '#000000',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: { color: '#000000', fontSize: 14, marginBottom: 6 },
  cardDescription: {
    color: '#242B2E',
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1,
  },
  cardFooter: { color: '#000000' },
});
