export interface MovementItemProps {
    entity: string,
    date: string,
    points: number,
    operation: string,
    transactionNo?: string,
    promoCode?: number | string | any,
}