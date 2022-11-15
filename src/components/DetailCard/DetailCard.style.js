import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
  },
  body_container: {
    paddingHorizontal: 10,
  },
  title: {
    color: '#A52A2A',
    fontSize: 27,
    fontWeight: 'bold',
  },
  city: {
    color: '#A52A2A',
    fontWeight: 'bold',
    fontSize: 19,
  },
  description: {
    color: '#000',
    textAlign: 'justify',
    borderTopWidth: 1,
    borderTopColor: '#BCAAA4',
    marginTop: 5,
    paddingVertical: 5,
  },
  button_container: {
    margin: 10,
  }
});
