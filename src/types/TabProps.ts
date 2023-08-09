import { Movement } from "./Movements";

export interface TabContentProps {
    data: { month: number; movements: Movement[] }[];
  }