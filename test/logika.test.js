import test from 'node:test';
import assert from 'node:assert/strict';
import { celsiusKeFahrenheit } from '../logika.js';

test('0 Celsius equals 32 Fahrenheit', () => {
    assert.equal(celsiusKeFahrenheit(0), 32);
});

test('100 Celsius equals 212 Fahrenheit', () => {
    assert.equal(celsiusKeFahrenheit(100), 212);
});

test('-40 Celsius equals -40 Fahrenheit', () => {
    assert.equal(celsiusKeFahrenheit(-40), -40);
});

test('25 Celsius equals 77 Fahrenheit', () => {
    assert.equal(celsiusKeFahrenheit(25), 77);
});