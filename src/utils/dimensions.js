import { Dimensions } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default {
  status: Dimensions.get('window'),
  setPixel: { wp, hp }
}
