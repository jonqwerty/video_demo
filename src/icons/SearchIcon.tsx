import * as React from 'react';
import {FC} from 'react';
import Svg, {Rect, Circle, Path} from 'react-native-svg';

interface ISearchIconProps {
  fill?: string;
}

const SearchIcon: FC<ISearchIconProps> = ({fill, ...props}) => {
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
        width={18.95}
        height={18.95}
        x={1.525}
        y={1.525}
        stroke="#56ACDC"
        strokeOpacity={0.48}
        strokeWidth={0.05}
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
      <Circle
        cx={9.985}
        cy={9.987}
        r={7}
        stroke="#F5F5F5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        transform="rotate(-45 9.985 9.987)"
      />
      <Path
        fill="#F5F5F5"
        d="M14.14 15.722a1.125 1.125 0 0 1 1.58-1.58l4.363 3.445a1.778 1.778 0 1 1-2.498 2.498l-3.445-4.363Z"
      />
    </Svg>
  );
};

export default SearchIcon;
