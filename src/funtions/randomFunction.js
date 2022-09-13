import {
  WiMeteor,
  WiMoonAltFirstQuarter,
  WiMoonAltNew,
  WiMoonAltWaningCrescent3,
  WiMoonAltWaningCrescent4,
  WiMoonAltWaningCrescent5,
  WiMoonAltWaningCrescent6,
} from "react-icons/wi";

export default function randomFunction(num) {
  if (num === 1) {
    return <WiMeteor size={"100"} />;
  }
  if (num === 2) {
    return <WiMoonAltFirstQuarter size={"100"} />;
  }
  if (num === 3) {
    return <WiMoonAltNew size={"100"} />;
  }
  if (num === 4) {
    return <WiMoonAltWaningCrescent3 size={"100"} />;
  }
  if (num === 5) {
    return <WiMoonAltWaningCrescent4 size={"100"} />;
  }
  if (num === 6) {
    return <WiMoonAltWaningCrescent5 size={"100"} />;
  }
  if (num === 7) {
    return <WiMoonAltWaningCrescent6 size={"100"} />;
  }

  return;
}
