import {View, Text, Image, Linking, Alert} from 'react-native';
import React from 'react';
import styles from './DetailCard.style';
import Button from '../Button';

const DetailCard = ({mealDetail}) => {
  const handleOpenYoutube = url => {
    try {
      Linking.openURL(url);
    } catch (error) {
      Alert.alert('There is no video with this meal');
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: mealDetail.strMealThumb}} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{mealDetail.strMeal}</Text>
        <Text style={styles.city}>{mealDetail.strArea}</Text>
        <Text style={styles.description}>{mealDetail.strInstructions}</Text>
      </View>
      <View style={styles.button_container}>
        <Button
          title="Watch on Youtube"
          onPress={() => handleOpenYoutube(mealDetail.strYoutube)}
        />
      </View>
    </View>
  );
};

export default DetailCard;
