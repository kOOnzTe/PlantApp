import { ImageSourcePropType } from 'react-native';

export const getIconSource = (iconName: string): ImageSourcePropType => {
  switch (iconName) {
    case 'unlimitedIcon':
      return require('../assets/images/paywall/unlimitedIcon.png');
    case 'fasterIcon':
      return require('../assets/images/paywall/fasterIcon.png');
    case 'leavesIcon':
      return require('../assets/images/paywall/leavesIcon.png');
    default:
      return require('../assets/images/paywall/unlimitedIcon.png');
  }
};
