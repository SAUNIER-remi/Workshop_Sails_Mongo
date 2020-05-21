/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  'GET /helloword': {
    controller: 'HelloWorldController',
    action: 'helloWorld'
  },
  'GET /posts': {
    controller: 'POstController',
    action: 'getAllPost'
  },
  'GET /users': {
    controller: 'UserController',
    action: 'getAllUsers'
  },
  'GET /user/:id': {
    controller: 'UserController',
    action: 'getUser'
  },
  'POST /user': {
    controller: 'UserController',
    action: 'create'
  },
  'POST /post': {
    controller: 'PostController',
    action: 'create'
  },
  'DELETE /post/:id': {
    controller: 'PostController',
    action: 'create'
  },
  'POST /auth/token': {
    controller: 'UserController',
    action: 'token'
  },
  'GET /myposts': {
    controller: 'PostController',
    action: 'myPost'
  }
  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
