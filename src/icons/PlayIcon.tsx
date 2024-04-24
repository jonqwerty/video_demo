import * as React from 'react';
import {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

interface IPlayIconProps {
  fill?: string;
}

const PlayIcon: FC<IPlayIconProps> = ({fill, ...props}) => {
  return (
    <Svg width={15} height={18} fill="none" {...props}>
      <Path
        fill="#fff"
        d="M14.446 10.697c-.085.087-.405.459-.703.764-1.747 1.925-6.307 5.075-8.693 6.036-.362.155-1.278.482-1.768.503a2.9 2.9 0 0 1-1.343-.327 2.81 2.81 0 0 1-1.192-1.356c-.15-.395-.385-1.575-.385-1.596C.13 13.43 0 11.331 0 9.012c0-2.21.129-4.223.32-5.534.022-.02.256-1.488.511-1.99C1.301.57 2.217 0 3.197 0h.085c.639.022 1.982.593 1.982.614 2.257.963 6.711 3.958 8.501 5.949 0 0 .504.511.724.83.341.46.511 1.028.511 1.596 0 .635-.191 1.226-.554 1.707Z"
      />
    </Svg>
  );
};

export default PlayIcon;
