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
