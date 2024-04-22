import * as React from 'react';
import {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

interface ILockIconProps {
  fill: string;
}

const LockIcon: FC<ILockIconProps> = ({fill, ...props}) => {
  return (
    <Svg width={20} height={21} fill="none" {...props}>
      <Path
        fill="#FEFEFE"
        fillRule="evenodd"
        d="M3.25 9.055V7a6.75 6.75 0 0 1 13.5 0v2.055c1.115.083 1.84.293 2.371.824C20 10.757 20 12.172 20 15c0 2.828 0 4.243-.879 5.121C18.243 21 16.828 21 14 21H6c-2.828 0-4.243 0-5.121-.879C0 19.243 0 17.828 0 15c0-2.828 0-4.243.879-5.121.53-.53 1.256-.741 2.371-.824ZM4.75 7a5.25 5.25 0 0 1 10.5 0v2.004C14.867 9 14.451 9 14 9H6c-.452 0-.867 0-1.25.004V7ZM12 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default LockIcon;
