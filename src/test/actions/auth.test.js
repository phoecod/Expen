import {login,logout} from '../../actions/auth';



test('should generate login action Object ', () => {
    const action = login('123');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: '123'
    });
})

test('should generate login action Object ', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});

