import { DetallesScreenParams } from "./DetallesScreenParams";

export type RootStackParamList = {
  'BeneficiosScreen': DetallesScreenParams;
  'MovimientosScreen': {entity: string, date: string, points: string, operation: string, transactionNo: number, imageSource: any};
  'DetallesScreen': undefined;
  'exchangeScreen': undefined;
  'BalanceScreen': { merchantName: string | any };
  'TicketScreen': { name: string | any, amount: number | any };
};