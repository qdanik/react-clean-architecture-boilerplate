import {Container, interfaces} from 'inversify';
import React from 'react';

export const DependencyInjectorContext = React.createContext<interfaces.Container>(new Container());