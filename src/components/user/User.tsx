import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import {TUserDTO} from '../../data-structures';
import {
  Avatar,
  Button,
  DataList,
  ErrorScreen,
  LoadingScreen,
  TDataListEntry,
} from '../../shared-components';
import {
  AppDispatch,
  getUser,
  selectUserById,
  selectUserError,
  selectUserLoading,
} from '../../store';
import {Utils} from '../../utils';

type TUserProps = {
  id: string | undefined;
};

// TODO: styles
const User: React.FC<TUserProps> = ({id}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const user: TUserDTO | undefined = useSelector(selectUserById(id as string));
  const isLoading: boolean = useSelector(selectUserLoading);
  const error: string | undefined = useSelector(selectUserError);

  useEffect(() => {
    if (id) {
      dispatch(getUser(id as string));
    }
  }, [id]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (error) {
    return (
      <ErrorScreen
        title={'Error'}
        message={'User not found'}
        action={
          <Link to={'/users'}>
            <Button type={'primary'}>Go to users page</Button>
          </Link>
        }
      />
    );
  }

  if (!user) {
    return null;
  }

  const dataListEntries: TDataListEntry[] = [
    {
      term: 'Name',
      description: user.name,
    },
    {
      term: 'Email',
      description: user.email,
    },
    {
      term: 'Age',
      description: user.dateOfBirth ? Utils.getAge(user.dateOfBirth) : '-',
    },
    {
      term: 'Address',
      description: `${user.address.street}, ${user.address.city}`,
    },
  ];

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div>
        <Button onClick={goBack}>Back</Button>
      </div>
      <div>
        <Avatar src={user.avatar} title={user.name} />
      </div>

      <div>
        <DataList entries={dataListEntries} />
      </div>
    </div>
  );
};

export {User};
