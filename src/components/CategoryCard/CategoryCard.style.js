import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 76,
    margin: 5,
    borderBottomLeftRadius: 38,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 38,
    borderTopRightRadius: 5,
    borderWidth: 1,
    borderColor: '#BCAAA4'
  },
  title_container: {
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginHorizontal: 5,
    borderRadius: 30
  },
  category: {
    color: '#000',
    fontSize: 20,
  },
});
