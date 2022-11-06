export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      CarDetails: { car: ICar };
      Scheduling: { car: ICar };
      SchedulingDetails: { car: ICar; dates: string[] };
      SchedulingComplete: undefined;
      MyCars: undefined;
    }
  }
}
