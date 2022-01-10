import React from 'react';
import Button from '../../components/Button';
import { getUsers } from '../../store/features/users/selectors';
import { fetchUsers } from '../../store/features/users/thunks';
import { dispatcher, selector } from '../../store/hooks';
import User from '../../types/user';

export default function DatabaseDemo() {
  const dispatch = dispatcher();
  const users = selector(getUsers);

  let dom;
  if (users.length <= 0) {
    dom = (
      <p>
        No current user. Either fetch them from the database or create some via
        the api
      </p>
    );
  } else {
    dom = users.map((user: User, i) => {
      return (
        <div key={i}>
          <p>{user.name}</p>
        </div>
      );
    });
  }

  return (
    <div>
      <Button onClick={() => dispatch(fetchUsers())}>Fetch Users</Button>
      {dom}
    </div>
  );
}
