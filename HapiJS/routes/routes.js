'use strict';
// joi 
var joi = require('joi');
module.exports = function(){

    var store= [
        {
            name : 'Pendrive', price : '500'
        },
        { 
            name : 'Keyboard', price : '1200'   
        }
    ];

    return [
        {
            method: 'GET',
            path : '/store',
            config : {
                handler : (req,reply)=>{
                    reply({'store' : store, responseCode :0});
                }
            }
        },
        {
            method: 'GET',
            path : '/store/{id}',
            config : {
                handler : (req,reply)=>{
                    if(store.length <= req.params.id){
                        return reply({message : 'product does not exists', responseCode : 1}).code(404);
                    }
                    reply({'store': store[req.params.id], 'responseCode':0});
                },
                validate :{
                    params :{
                        id: joi.number()
                    }
                }
            }
        }
    ];
}();