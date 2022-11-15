import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './CategoryCard.style';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const CategoryCard = ({category, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: category.strCategoryThumb}} />
        <View style={styles.title_container}>
          <Text style={styles.category}>{category.strCategory}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryCard;
