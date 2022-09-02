/* eslint-disable @typescript-eslint/ban-ts-comment */
import 'reflect-metadata';
// @ts-ignore
global.document = {};
// @ts-ignore
global.window = { document: { cookie: '' } };
// override another methods here
// render
export * from '@testing-library/react';
