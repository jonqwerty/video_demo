import * as React from 'react';
import {FC} from 'react';
import Svg, {Rect, Circle, Path} from 'react-native-svg';

interface IDeleteIconProps {
  fill?: string;
}

const DeleteIcon: FC<IDeleteIconProps> = ({fill, ...props}) => {
  return (
    <Svg width={22} height={22} fill="none" {...props}>
      <Rect
        width={17.95}
        height={19.95}
        x={2.025}
        y={1.025}
        stroke="#56ACDC"
        strokeOpacity={0.48}
        strokeWidth={0.05}
        rx={0.975}
      />
      <Rect
        width={19.95}
        height={17.95}
        x={1.025}
        y={2.025}
        stroke="#56ACDC"
        strokeOpacity={0.48}
        strokeWidth={0.05}
        rx={0.975}
      />
      <Rect
        width={19.95}
        height={20.95}
        x={1.025}
        y={0.525}
        stroke="#56ACDC"
        strokeOpacity={0.48}
        strokeWidth={0.05}
        opacity={0.2}
        rx={0.975}
      />
      <Rect
        width={20.95}
        height={17.95}
        x={0.525}
        y={2.025}
        stroke="#56ACDC"
        strokeOpacity={0.48}
        strokeWidth={0.05}
        opacity={0.2}
        rx={0.975}
      />
      <Rect
        width={16.95}
        height={16.95}
        x={2.525}
        y={2.525}
        stroke="#56ACDC"
        strokeOpacity={0.48}
        strokeWidth={0.05}
        opacity={0.6}
        rx={0.975}
      />
      <Circle
        cx={11}
        cy={11}
        r={9.975}
        stroke="#56ACDC"
        strokeOpacity={0.48}
        strokeWidth={0.05}
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m2.75 2.75 8 8m8 8-8-8m0 0-8 8 16-16"
      />
    </Svg>
  );
};

export default DeleteIcon;
