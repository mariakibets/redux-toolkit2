import React, { useState } from 'react';

const UserList = (props) => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    return (
        <section>
            {isLoading && <div> Loading </div>}
            {error && <div>Error</div>}
            {users && users.map((u) => <article>{JSON.stringify(u)}</article>)}
        </section>
    );
}

export default UserList;

/*

1. Юзер зробив запит і чекає, покі він виконується (спінер)
2. Юзер отримав відповідь - відмалювались юзери, які прийшли
3. Юзер отримав помилку - показали цю помилку


*/
