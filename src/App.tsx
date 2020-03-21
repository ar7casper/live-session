import * as React from 'react';
import styled from '@emotion/styled';
import { Global } from '@emotion/core';
import { blownAbsolutePosition } from './ui/styles';
import { Theme } from './ui/theme';

const Background = styled('section')<{ theme: Theme; isActive?: boolean }>(({ theme, isActive }) => ({
  //   ...blownAbsolutePosition,
  //   position: 'absolute',
  //   top: 0,
  //   right: 0,
  //   bottom: 0,
  //   left: 0,
  color: isActive ? theme.palette?.primary : theme.palette?.secondary,
  padding: theme.gutters.base * 2,
  backgroundColor: '#ccc',
  height: '100%',
}));

interface AppProps {}

const Foo = () => {
  const [isActive, setActive] = React.useState<boolean>(false);

  return (
    <Background {...{ isActive }}>
      Hello
      <button {...{ onClick: () => setActive(!isActive) }}>Click Me, PLEASE</button>
    </Background>
  );
};

export const App: React.FunctionComponent<AppProps> = ({}) => {
  return (
    <>
      <Global
        {...{
          styles: {
            'html, body, #root': {
              height: '100%',
            },
          },
        }}
      />
      <div {...{ style: { height: '100%', background: 'blue' } }}>
        <Foo />
      </div>
    </>
  );
};

export default App;
