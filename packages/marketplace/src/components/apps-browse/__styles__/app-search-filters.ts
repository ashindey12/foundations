import { css } from '@linaria/core'
import { styled } from '@linaria/react'
import { forDesktopAndAbove, forMobileAndAbove, forTabletAndAbove } from '../../../core/__styles__/media'

export const appsSearchContainer = css`
  width: 100%;

  ${forMobileAndAbove} {
    margin-bottom: 2.5rem;
    width: 50%;
  }

  ${forTabletAndAbove} {
    width: 33.33%;
  }

  ${forDesktopAndAbove} {
    width: 25%;
  }
`

export const appsSearchInputIcon = css`
  border-radius: 0.25rem 0 0 0.25rem;
  padding: 0 0.5rem 0 1.25rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-light);
`

export const appsSearchMobileControls = css`
  display: flex;

  ${forMobileAndAbove} {
    display: none;
  }
`

export const appsSearchDesktopControls = css`
  display: none;

  ${forMobileAndAbove} {
    display: flex;
  }
`

export const appsSearchMobileIconActive = css``

export const appsSearchMobileIcon = css`
  margin-right: 0.5rem;
  height: 2rem;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: var(--color-grey-light);
  border-radius: 0.25rem;

  &:last-child {
    margin-right: 0;
  }

  &.${appsSearchMobileIconActive} {
    color: var(--intent-primary);
  }
`

export const appsSearchMobileFilterControlsActive = css``

export const appsFiltersMobileBrowseBy = css`
  margin-top: 1.25rem;
  min-height: 1.5rem;
`

export const appsFiltersCategories = css`
  width: 100%;
  margin-bottom: 1.25rem;
`

export const AppsSearchInput = styled.input`
  font-family: var(--font-sans-serif);
  font-size: 14px;
  display: flex;
  flex-grow: 1;
  border-radius: 0 0.25rem 0.25rem 0;
  background: var(--component-input-focus-bg);
  height: 2.5rem;
  border: none;
  margin: 0;
  color: black;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: black;
    font-size: 14px;
  }

  ${forTabletAndAbove} {
    width: 25%;
  }
`

export const AppsSearchMobileFilterControls = styled.div`
  display: flex;

  ${forMobileAndAbove} {
    display: none;
  }

  &.${appsSearchMobileFilterControlsActive} {
    padding: 1.25rem 0;
  }
`
