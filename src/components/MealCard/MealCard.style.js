import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    height: deviceSize.height / 4,
    borderRadius: 10,
  },
  text_container: {
    width: deviceSize.width - 20,
    height: 40,
    justifyContent: 'center',
    backgroundColor: '#333333c0',
    position: 'absolute',
    top: 160,
    left: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 15,
  },
  text: {
    color: '#fff',
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
