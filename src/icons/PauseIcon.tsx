import * as React from 'react';
import {FC} from 'react';
import Svg, {Rect} from 'react-native-svg';

interface IPauseIconProps {
  fill?: string;
}

const PauseIcon: FC<IPauseIconProps> = ({fill, ...props}) => {
  return (
    <Svg width={14} height={18} fill="none" {...props}>
      <Rect width={5} height={18} x={0.5} fill="#fff" rx={2} />
      <Rect width={5} height={18} x={8.5} fill="#fff" rx={2} />
    </Svg>
  );
};

export default PauseIcon;
