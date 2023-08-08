export type UserState = {
  user: {
    userId?: number;
    walletID?: number;
    phoneNumber: number | null;
    name?: string;
    lastname?: string;
    secondLastname?: string;
    email?: string;
    password?: string;
    bithdate?: string;
  };
  isAuth: boolean;
};
