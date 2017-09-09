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
        },

        {
            method :'POST',
            path : '/store',
            config : {
                handler : (req,reply)=>{
                    console.log(req.payload);
                    store.push({ name : req.payload.name, price: req.payload.price});
                    reply ({  message : 'Successfully added the data', responseCode : 0});
                },
                validate : {
                    payload :{
                        name : joi.string(),
                        price : joi.number()
                    }
                }
            }
        },
        {
            method :'DELETE',
            path : '/store/{id}',
            config : {
                handler : (req,reply)=>{
                    
                    if(store.length <= req.params.id){
                        return reply({message : 'product does not exists', responseCode : 1}).code(404);
                    }
                    store.splice(req.params.id,1);
                    reply ({  message : 'Successfully deleted the data', responseCode : 0});
                },
                validate : {
                    params : {
                        id: joi.number()
                    }
                }
            }        
        }

    ];
}();