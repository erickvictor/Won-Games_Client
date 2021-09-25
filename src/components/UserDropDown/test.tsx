import { render, screen } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import UserDropDown from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

useRouter.mockImplementation(() => ({
  query: {}
}))

describe('<UserDropDown />', () => {
  it('should render the username', () => {
    render(<UserDropDown username="Bernardo" />)

    expect(screen.getByText(/bernardo/i)).toBeInTheDocument()
  })

  it('should render the menu', () => {
    render(<UserDropDown username="Bernardo" />)

    // open menu
    userEvent.click(screen.getByText(/bernardo/i))

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /sign out/i })
    ).toBeInTheDocument()
  })
})
