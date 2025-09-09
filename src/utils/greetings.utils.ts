export const getTimeBasedGreeting = (): string => {
  const hour = new Date().getHours();
  switch (true) {
    case hour >= 5 && hour < 12:
      return 'Good Morning!';
    case hour >= 12 && hour < 17:
      return 'Good Afternoon!';
    case hour >= 17 && hour < 21:
      return 'Good Evening!';
    default:
      return 'Good Night!';
  }
};
