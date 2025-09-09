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
