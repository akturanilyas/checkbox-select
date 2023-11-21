// For mock functions
const { TextEncoder, TextDecoder } = require('util');
const React = require('react');
require('@testing-library/jest-dom');

Object.assign(global, { TextDecoder, TextEncoder });

Date.now = jest.fn(() => new Date(Date.UTC(2012, 12, 12)).valueOf());

global.React = React;

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: true,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
