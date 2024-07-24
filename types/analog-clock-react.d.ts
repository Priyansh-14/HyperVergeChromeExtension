declare module "analog-clock-react" {
  import React from "react";

  interface ClockProps {
    width?: string;
    theme?: {
      background?: string;
      border?: string;
      center?: string;
      handColors?: {
        second?: string;
        minute?: string;
        hour?: string;
      };
    };
    showNumbers?: boolean;
  }

  const AnalogClock: React.FC<ClockProps>;

  export default AnalogClock;
}
