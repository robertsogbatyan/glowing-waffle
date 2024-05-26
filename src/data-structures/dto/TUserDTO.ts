type TUserDTO = {
  id: number;
  name: string;
  email: string;
  dateOfBirth?: string;
  address?: {
    city: string;
    street?: string;
    suite?: string;
  };
  picture?: string;
};

type TNewUserDTO = Omit<TUserDTO, 'id'>;

export {type TNewUserDTO, type TUserDTO};
