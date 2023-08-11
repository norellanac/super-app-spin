export interface Movement {
    id: number;
    entity: string;
    date: string;
    points: number;
    operation: string;
    transactionNo?: string;
    promoCode?: string | number;
  }