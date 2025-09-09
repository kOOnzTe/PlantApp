export interface PlaceholderScreenProps {
  title: string;
  subtitle: string;
}

export interface PrimaryButtonProps {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
}

export interface Feature {
  text: string;
  subtext: string;
  icon: string;
}

export interface CloseButtonProps {
  onPress: () => void;
  size?: number;
  color?: string;
}

export interface FeatureCardProps {
  text: string;
  subtext: string;
  icon: string; // 'unlimitedIcon' | 'fasterIcon' | 'leavesIcon'
}

export interface SelectableButtonProps {
  isSelected: boolean;
  mainText: string;
  subText: string;
  onPress: () => void;
  badgeText?: string;
}

export interface TabIconProps {
  iconName: string;
  focused: boolean;
}
export interface ScanIconProps {
  focused: boolean;
}
export interface HomeHeaderProps {
  greeting: string;
  searchValue?: string;
  onSearchChange?: (text: string) => void;
  searchPlaceholder?: string;
}

export interface CategoryCardProps {
  item: import('./api.types').Category;
  index: number;
  onPress?: (category: import('./api.types').Category) => void;
}

export interface PremiumBannerProps {
  onPress?: () => void;
  title?: string;
  subtitle?: string;
  notificationCount?: number;
}

export interface QuestionCardProps {
  item: import('./api.types').Question;
  onPress?: (question: import('./api.types').Question) => void;
}
