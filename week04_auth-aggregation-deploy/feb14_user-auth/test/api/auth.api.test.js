const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;

const app = require('../../lib/app');
const mongoose = require('mongoose');

describe.only('auth', () => {

    before(() => mongoose.connection.dropDatabase());

    const user = {
        username: 'user',
        password: 'abc'
    };

    const request = chai.request(app);

    describe('user management', () => {

        const badRequest = (url, data, error) => 
            request
                .post(url)
                .send(data)
                .then(
                    () => { throw new Error('status should not be okay'); },
                    res => {
                        assert.equal(res.status, 400);
                        assert.equal(res.response.body.error, error);
                    }
                );
        
        it('signup requires username', () => 
            badRequest('/auth/signup', { password: 'abc' }, 'username and password must be supplied')
        );		
        
        it('signup requires password', () =>
            badRequest('/auth/signup', { username: 'abc' }, 'username and password must be supplied')
        );

        let token = '';

        it('signup', () => 
            request
                .post('/auth/signup')
                .send(user)
                .then(res => assert.ok(token = res.body.token))
        );

        it('can\'t use same username', () => 
            badRequest('/auth/signup', user, 'username user already exists')
        );

                
        it('signin requires username', () => 
            badRequest('/auth/signin', { password: 'abc' }, 'username and password must be supplied')
        );		
        
        it('signin requires password', () =>
            badRequest('/auth/signin', { username: 'abc' }, 'username and password must be supplied')
        );

        it('signin with wrong user', () =>
            badRequest('/auth/signin', { username: 'bad user', password: user.password }, 'invalid username or password')
        );

        it('signin with wrong password', () =>
            badRequest('/auth/signin', { username: user.username, password: 'bad' }, 'invalid username or password')
        );

        it('signin', () => 
            request
                .post('/auth/signin')
                .send(user)
                .then(res => assert.ok(res.body.token))
        );

        // it('token is valid', () =>
        //     request
        //         .get('/actors')
        //         .set('Authorization', `Bearer ${token}`)
        //         .then(res => assert.ok(res.body))
        // );


    });

    // describe('unauthorized', () => {

    //     it('400 with no token', () => 
    //         request
    //             .get('/api/actors')
    //             .then(res => done('status should not be 200'))
    //             .catch(res => {
    //                 assert.equal(res.status, 400);
    //                 assert.equal(res.response.body.error, 'unauthorized, no token provided');
    //             })
    //     );

    //     it('403 with invalid token', () => 
    //         request
    //             .get('/api/actors')
    //             .set('Authorization', 'Bearer badtoken')
    //             .then(res => done('status should not be 200'))
    //             .catch(res => {
    //                 assert.equal(res.status, 403);
    //                 assert.equal(res.response.body.error, 'unauthorized, invalid token');  
    //             })
    //     );

    // });

    
});