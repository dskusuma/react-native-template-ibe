import React from 'react';
import {
  StackActions,
  CommonActions,
  NavigationContainerRef,
  ParamListBase,
} from '@react-navigation/native';

// @ts-ignore
export const navigationRef = React.createRef<NavigationContainerRef>();

// TODO: Check convention
type NavigationProps = {
  name: string;
  params?: ParamListBase;
};

export function navigate({name, params}: NavigationProps) {
  console.log('navigate', name, params);
  navigationRef.current?.navigate(name, params);
}

function popAction() {
  let pop = StackActions.pop(1);
  navigationRef.current?.dispatch(pop);
}

function replace({name, params}: NavigationProps) {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}

function resetAction({name, params}: NavigationProps) {
  CommonActions.reset({
    index: 1,
    routes: [{name: name, params}],
  });
}

export default {
  navigate,
  popAction,
  resetAction,
  replace,
};
