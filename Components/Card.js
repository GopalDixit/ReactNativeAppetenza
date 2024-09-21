// Card.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.details}>{item.details}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    paddingBottom: 10,  
  },
  image: {
    width: '100%',
    height: '70%', 
    borderRadius: 15,
  },
  info: {
    padding: 10,
    alignItems: 'center',
  },
  name: {
    fontSize: 20, 
    fontWeight: 'bold',
    color:'black'
  },
  details: {
    fontSize: 14,
    color: 'black',
  },
});

export default Card;
