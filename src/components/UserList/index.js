import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getUsers } from '../../store/slices/userSlice'

const UserList = (props) => {

    const {users, isLoading, error} = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [])


    return (
        <section>
            {isLoading && <div> Loading </div>}
            {error && <div>Error</div>}
            {users && users.map((u) => <article key={u.id}>{JSON.stringify(u)}</article>)}
        </section>
    );
}

export default UserList;

/*

1. Юзер зробив запит і чекає, покі він виконується (спінер)
2. Юзер отримав відповідь - відмалювались юзери, які прийшли
3. Юзер отримав помилку - показали цю помилку


*/
