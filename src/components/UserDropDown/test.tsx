import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import UserDropDown from '.'

describe('<UserDropDown />', () => {
  it('should render the username', () => {
    renderWithTheme(<UserDropDown username="Bernardo" />)

    expect(screen.getByText(/bernardo/i)).toBeInTheDocument()
  })

  it('should render the menu', () => {
    renderWithTheme(<UserDropDown username="Bernardo" />)

    // open menu
    userEvent.click(screen.getByText(/bernardo/i))

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()
  })
})
