import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const { height } = Dimensions.get('window')

export default StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  body: {
    backgroundColor: Colors.white,
    minHeight: height
  },
  fullFlex: {
    flex: 1
  },
  container: {},
  btnContainer: {
    height: 48,
    margin: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark
  },
  highlight: {
    fontWeight: '700'
  },
  loadMoreBtn: {
    backgroundColor: Colors.dark,
    height: 48,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  likeContainer: {
    flexDirection: 'row',
    height: 36,
    marginVertical: 5
  },
  like: {
    flex: 1,
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 8
  },
  tittleText: { marginLeft: 10, fontSize: 12 },
  desciptionText: { marginHorizontal: 10, fontSize: 10 },
  img: { height: 100, width: 100 },
  mb10: { marginBottom: 10 }
})
