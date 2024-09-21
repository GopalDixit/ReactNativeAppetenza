import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import Card from './Components/Card';

const initialData = [
  {
    id: '2',
    image: 'https://captiontools.com/wp-content/uploads/2017/03/testy3-1.png',
    name: 'John Doe',
    details: '25, New York',
  },
  {
    id: '1',
    image: 'https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg',
    name: 'Jane Smith',
    details: '30, San Francisco',
  },
  {
    id: '3',
    image: 'https://img.freepik.com/free-photo/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-space_23-2148767055.jpg',
    name: 'Martha Stewie',
    details: '30, New York',
  },
  {
    id: '4',
    image: 'https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg',
    name: 'Alice Johnson',
    details: '28, Los Angeles',
  },
  {
    id: '5',
    image: 'https://thumbs.dreamstime.com/b/portrait-male-african-american-professional-possibly-business-executive-corporate-ceo-finance-attorney-lawyer-sales-stylish-155546880.jpg',
    name: 'Bob Brown',
    details: '35, Chicago',
  },
  {
    id: '6',
    image: 'https://image.shutterstock.com/image-photo/portrait-smiling-confident-woman-casual-260nw-1196356687.jpg',
    name: 'Emma Wilson',
    details: '27, Houston',
  },
  {
    id: '7',
    image: 'https://image.shutterstock.com/image-photo/portrait-confident-businesswoman-smiling-camera-260nw-1413615680.jpg',
    name: 'Liam White',
    details: '32, Miami',
  },
  {
    id: '8',
    image: 'https://i.pinimg.com/736x/c3/e9/7a/c3e97aa255c604a1123e554cc12eefdc.jpg',
    name: 'Olivia Davis',
    details: '29, Boston',
  },
  {
    id: '9',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/038/974/578/small/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg',
    name: 'Ethan Harris',
    details: '34, Seattle',
  },
  {
    id: '10',
    image: 'https://www.shutterstock.com/shutterstock/photos/2179380689/display_1500/stock-photo-happy-young-asian-saleswoman-looking-at-camera-welcoming-client-smiling-woman-executive-manager-2179380689.jpg',
    name: 'Sophia Martinez',
    details: '26, Denver',
  },
];


const App = () => {
  const [cards, setCards] = useState(initialData);
  const [key, setKey] = useState(Date.now());

  const handleSwipedAllCards = () => {
    console.log('All cards swiped. Resetting stack.');
    setCards([...initialData]);
    setKey(Date.now());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dating App Appetenza</Text>
      <View style={styles.swiperContainer}>
        <Swiper
          key={key}
          cards={cards}
          renderCard={(card) => <Card item={card} />}
          onSwipedRight={() => console.log('Card Swiped Right')}
          onSwipedLeft={() => console.log('Card Swiped Left')}
          onSwipedAll={handleSwipedAllCards}
          stackSize={3}
          backgroundColor="transparent"
          cardVerticalMargin={5}
          cardHorizontalMargin={10}
          overlayLabels={{
            left: {
              title: 'NOPE',
              style: {
                label: {
                  color: 'red',
                  fontSize: 32,
                  fontWeight: 'bold',
                },
                wrapper: {
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  backgroundColor: 'rgba(255, 0, 0, 0.2)',
                },
              },
            },
            right: {
              title: 'LIKE',
              style: {
                label: {
                  color: 'green',
                  fontSize: 32,
                  fontWeight: 'bold',
                },
                wrapper: {
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  backgroundColor: 'rgba(0, 255, 0, 0.5)',
                },
              },
            },
          }}
        />
      </View>
      <Text style={styles.footerText}>Appetenza Technologies</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor:'white'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
    color:'black'
  },
  swiperContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 20,
    color:'black'
  },
});

export default App;
