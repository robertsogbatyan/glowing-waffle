type TUserDTO = {
  id: string;
  dateOfCreation: string;
  name: string;
  avatar: string;
  email: string;
  dateOfBirth?: string;
  address: {
    city: string;
    street: string;
  };
};

type TNewUserDTO = Omit<TUserDTO, 'id'>;

export {type TNewUserDTO, type TUserDTO};
