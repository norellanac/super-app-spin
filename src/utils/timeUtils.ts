import { Movement } from "../types/Movements";

export const filterMovementsByMonth = (
  movements: Movement[],
  targetMonth: number,
): Movement[] => {
  const filteredMovements = movements.filter(movement => {
    const movementDate = new Date(movement.date);
    const movementMonth = movementDate.getMonth();
    return movementMonth === targetMonth;
  });
  return filteredMovements;
};
