/*
  #!/usr/local/bin/node
  -*- coding:utf-8 -*-
 
  Copyright 2013 yanghua Inc. All Rights Reserved.
 
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
 
     http://www.apache.org/licenses/LICENSE-2.0
 
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  ---
  Created with Sublime Text 2.
  User: yanghua
  Date: 11/10/13
  Time: 10:30 AM
  Desc: user - the controller of user
 */

var resUtil = require("../libs/resUtil");
var User    = require('../proxy/user');
var config  = require("../config").initConfig();

/**
 * get user info by userId
 * @param  {object}   req  request
 * @param  {object}   res  response
 * @param  {Function} next next handler
 * @return {null}        
 */
exports.getUserById = function (req, res, next){
    console.log("controllers/user/getUserById");
    var userId=req.params.userId;

    User.getUserInfoById(userId, function(err, rows){
        if (err) {
            console.log("ERR FROM:getUserInfoById --" + err);
        }else{
            if (rows < 1) {
                res.send(resUtil.generateRes(rows, config.statusCode.STATUS_NOTFOUND));
            }else{
                res.send(resUtil.generateRes(rows, config.statusCode.SATUS_OK));
            }
           
        }
    });
}