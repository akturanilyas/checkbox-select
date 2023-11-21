import { render, RenderResult } from '@testing-library/react';
import { ReactElement } from 'react';

export const renderApp = ({ children }: { children: ReactElement }): RenderResult => render(children);
