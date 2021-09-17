import {ReactElement} from 'react';

export function ifTrue(
  trueCondition: boolean,
  element: ReactElement,
): ReactElement | null {
  if (trueCondition) {
    return element;
  } else {
    return null;
  }
}

const ReactRender = {
  ifTrue,
};

export default ReactRender;
