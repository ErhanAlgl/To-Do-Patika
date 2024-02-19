import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  inner_container: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
  },
  info_container: {
    flexDirection: 'row',
    flex: 1,
  },
  artist: {},
  year: {
    marginLeft: 15,
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 12,
  },
  soldout_container: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 3,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  soldout_title: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 12,
  },
  content_container: {
    flexDirection: 'row',
  },
  album: {
    flex: 1,
    fontSize: 12,
    fontStyle: 'italic',
    color: 'gray',
  },
  album_container: {
    paddingTop: 5,
    flexDirection: 'row',
  },
});
