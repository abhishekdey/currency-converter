import * as conversion from '../actions/conversion';


export function reducer(state, action: conversion.ConversionAmountAction) {
    switch(action.type) {
        case conversion.CONVERSIONAMOUNT: 
            return action.payload;
        default:
            return state;
    }
}