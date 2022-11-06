import Speed from "../assets/speed.svg";
import Acceleration from "../assets/acceleration.svg";
import Force from "../assets/force.svg";
import Gasoline from "../assets/gasoline.svg";
import Machine from "../assets/machine.svg";
import Peaple from "../assets/peaple.svg";
import Hybrid from "../assets/hybrid.svg";
import Energy from "../assets/energy.svg";
import Car from "../assets/car.svg";

export const getAccessoryIcon = (type: string) => {
  switch (type) {
    case "speed":
      return Speed;
    case "acceleration":
      return Acceleration;
    case "turning_diameter":
      return Force;
    case "electric_motor":
      return Energy;
    case "gasoline_motor":
      return Gasoline;
    case "hybrid_motor":
      return Hybrid;
    case "exchange":
      return Machine;
    case "seats":
      return Peaple;
    default:
      return Car;
  }
};
