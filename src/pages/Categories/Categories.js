import {View, FlatList} from 'react-native';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import {API_URL} from '@env';
import CategoryCard from '../../components/CategoryCard';
import styles from './Categories.style';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Categories = ({navigation}) => {
  const {loading, error, data} = useFetch(`${API_URL}/categories.php`);

  const handleSelectCategory = name => {
    navigation.navigate('MealsPage', {categoryName: name});
  };

  const renderCategory = ({item}) => (
    <CategoryCard
      category={item}
      onSelect={() => handleSelectCategory(item.strCategory)}
    />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <FlatList data={data.categories} renderItem={renderCategory} />
    </View>
  );
};

export default Categories;
