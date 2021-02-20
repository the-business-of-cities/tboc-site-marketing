import React from 'react'
import { ThemeProvider } from 'styled-components'
import { mount as _mount, shallow as _shallow } from 'enzyme'
import theme from '../styles/themes/theme';

const ThemeProviderWrapper = ({ children }) => <ThemeProvider theme={theme}>
    { children }
  </ThemeProvider>

export const shallow = tree => _shallow(tree, {
  wrappingComponent: ThemeProviderWrapper
})

// Use mount is you are relying on the theme in styles
export const mount = tree => _mount(tree, {
  wrappingComponent: ThemeProviderWrapper
})