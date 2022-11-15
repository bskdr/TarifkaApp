import {View, FlatList} from 'react-native';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import {API_URL} from '@env';
import MealCard from '../../components/MealCard/MealCard';
import styles from './Meals.style';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Meals = ({route, navigation}) => {
  const {categoryName} = route.params;
  const {loading, error, data} = useFetch(
    `${API_URL}/filter.php?c=${categoryName}`,
  );

  const handleSelectMeal = id => {
    navigation.navigate('DetailPage', {id: id});
  };

  const renderMeal = ({item}) => (
    <MealCard meal={item} onSelect={() => handleSelectMeal(item.idMeal)} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <FlatList data={data.meals} renderItem={renderMeal} />
    </View>
  );
};

export default Meals;
