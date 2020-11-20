export const setLogin = (user) => ({
    type: 'SET_USER',
    payload: user,
});

export const setLogout = () => ({
    type: 'SET_LOGOUT'
});
