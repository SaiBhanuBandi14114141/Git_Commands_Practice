import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  backGroundImage: {
    width: '100%',
    height: '100%',
  },

  outerViewStyles: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: '13%',
    marginRight: '13%',
  },
  touchableButton: {
    backgroundColor: 'white',
    margin: '13%',
    borderRadius: 10,
  },
  touchableText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '6%',
  },
  mainText: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '5%',
    color: 'white',
    marginBottom: '10%',
  },
  subText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: '18%',
    marginRight: '18%',
    color: 'white',
  },
});
