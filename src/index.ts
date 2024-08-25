export type formState = {
  phone: string;
  name: string;
  email: string;
};

export enum PlanType {
  ARCADE = "ARCADE",
  ADVANCE = "ADVANCE",
  PRO = "PRO",
}
export enum PlanOption {
  MOUNTHLY = "MOUNTHLY",
  YEARLY = "YEARLY",
}
export type Plan = {
  option: PlanOption;
  price: number;
  type: PlanType;
};
