import authReducer from '../../reducers/auth';

test('should set login uid state', () => {

    const action = {
        type: 'LOGIN',
        uid: 123
    }
    let state = authReducer(state, action);
    expect(state).toEqual({uid: action.uid});
});

test('should clear state uid', () => {

    const action = {
        type: 'LOGOUT'
    }
    let state = authReducer(state, action);
    expect(state).toEqual({});
});