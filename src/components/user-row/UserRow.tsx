import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {TUserDTO} from '../../data-structures';
import {Button} from '../../shared-components';
import {selectUserById} from '../../store';
import {Utils} from '../../utils';

type TUserRowProps = {
  id: string;
};

const UserRow: React.FC<TUserRowProps> = ({id}) => {
  const user: TUserDTO | undefined = useSelector(selectUserById(id));

  if (!user) {
    return null;
  }

  return (
    <tr key={user.id}>
      <td>
        <Link to={user.id}>{user.name}</Link>
      </td>
      <td>{user.email}</td>
      <td>{user.dateOfBirth ? Utils.getAge(user.dateOfBirth) : '-'}</td>
      <td>
        <Button>Delete</Button>
      </td>
    </tr>
  );
};

export {UserRow};
