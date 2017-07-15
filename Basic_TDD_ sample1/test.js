'use strict'

const User = require('./User');
const chai = require('chai').expect;

describe('User Module',()=>{
    desscribe('up',()=>{
        it('module should export function',()=>{
          expect(User.up).to.be.a('function');
        })
    })
})
