import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import styles from './MealCard.style';

const MealCard = ({meal, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: meal.strMealThumb}} />
        <View style={styles.text_container}>
          <Text numberOfLines={1} style={styles.text}>
            {meal.strMeal}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealCard;
