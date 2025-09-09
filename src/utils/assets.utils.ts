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

export const getTabIconSource = (tabName: string): ImageSourcePropType => {
  switch (tabName) {
    case 'homeIcon':
      return require('../assets/images/home/homeIcon.png');
    case 'diagnoseIcon':
      return require('../assets/images/home/diagnoseIcon.png');
    case 'scanIcon':
      return require('../assets/images/home/scanIcon.png');
    case 'gardenIcon':
      return require('../assets/images/home/gardenIcon.png');
    case 'profileIcon':
      return require('../assets/images/home/profileIcon.png');
    default:
      return require('../assets/images/home/homeIcon.png');
  }
};
