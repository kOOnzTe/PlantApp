# PlantApp

This is a bare React Native app that replicates [PlantApp](https://plantapp.app/).

## Prerequisites

- **Node.js** >= 20
- **React Native CLI** - Follow the [React Native environment setup guide](https://reactnative.dev/docs/set-up-your-environment)
- **iOS**: Xcode and CocoaPods
- **Android**: Android Studio and SDK

> **Note**: This project was created with React Native 0.81.1

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. iOS Setup

Install CocoaPods dependencies:

```bash
# Install bundler (first time only)
bundle install

# Install pods
cd ios && pod install
```

### 3. Run the App

#### Start Metro

```bash
npm start
```

#### Run on Android

```bash
npx react-native run-android
```

#### Run on iOS

```bash
npx react-native run-ios
```

### 4. Run Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

## Overview
https://github.com/user-attachments/assets/046059ee-5d0b-43d2-8b9f-d3f45f3d6e44



## App Structure

- **TypeScript** - Type-safe development
- **Clean Code** - Well-organized and maintainable codebase
- **Well-Structured** - Modular architecture with clear separation of concerns

The app follows a clean architecture pattern with:

- **Component-based UI** - Reusable and modular components
- **Centralized State Management** - Redux Toolkit for predictable state updates
- **Type Safety** - Full TypeScript implementation
- **Navigation Structure** - Stack and tab-based navigation
- **Persistent Storage** - Redux Persist with AsyncStorage
- **Modern Design** - Figma-implemented responsive desing

## Folder Structure

```
PlantApp/
├── __tests__/              
│   ├── onboardingSlice.test.ts
│   └── store.test.ts
├── android/                
├── ios/                    
├── src/                    
│   ├── assets/             
│   │   ├── fonts/          
│   │   └── images/         
│   │       ├── home/       
│   │       ├── onboarding/ 
│   │       └── paywall/    
│   ├── components/         
│   │   ├── home/           
│   │   ├── onboarding/     
│   │   ├── paywall/
│   │   ├── common/
│   ├── hooks/              
│   ├── navigation/         
│   ├── screens/            
│   │   ├── home/           
│   │   ├── onboarding/     
│   │   └── paywall/        
│   ├── store/              
│   │   ├── api/            
│   │   ├── slices/         
│   │   └── store.ts        
│   ├── types/               
│   └── utils/                
├── App.tsx                 
├── index.js               
└── package.json           
```

## Technical Stack

### Core Technologies

- **Framework**: React Native v0.81.1
- **Language**: TypeScript v5.8.3
- **State Management**: Redux & Redux Toolkit with Redux Persist
  - `@reduxjs/toolkit` v2.9.0
  - `react-redux` v9.2.0
  - `redux-persist` v6.0.0
  - `@react-native-async-storage/async-storage` v2.2.0
- **API Management**: RTK Query for data fetching and caching
- **Navigation**: React Navigation v7
  - `@react-navigation/native` v7.1.17
  - `@react-navigation/stack` v7.4.8
  - `@react-navigation/bottom-tabs` v7.4.7
- **Lists**: `@shopify/flash-list` v2.0.3
- **UI Components**:
  - `react-native-linear-gradient` v2.8.3
  - `react-native-safe-area-context` v5.5.2
  - `react-native-gesture-handler` v2.28.0
- **QA / Testing**:
  - `jest` v29.6.3


### Development Tools

- **Type Checking**: TypeScript
- **Code Quality**: ESLint v8.19.0
- **Code Formatting**: Prettier v2.8.8
- **Testing**: Jest v29.6.3

## Design & API Resources

### Design
- **Figma Design**: [PlantApp](https://www.figma.com/design/EBocQLQi7YnoZxpSBTfAy8/iOS-Case?node-id=0-1&p=f&t=j80DBTMAYOkc6OKY-0)

### API Endpoints
- **Categories API**: `https://dummy-api-jtg6bessta-ey.a.run.app/getCategories`
- **Questions API**: `https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions`
