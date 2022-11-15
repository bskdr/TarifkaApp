import {FlatList} from 'react-native';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import {API_URL} from '@env';
import DetailCard from '../../components/DetailCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Detail = ({route}) => {
  const {id} = route.params;
  const {loading, error, data} = useFetch(`${API_URL}/lookup.php?i=${id}`);

  const renderMealDetail = ({item}) => <DetailCard mealDetail={item} />;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return <FlatList data={data.meals} renderItem={renderMealDetail} />;
};

export default Detail;
