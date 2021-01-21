import { Story, Meta } from '@storybook/react/types-6-0'
import UserDropDown, { UserDropdownProps } from '.'

export default {
  title: 'UserDropDown',
  component: UserDropDown,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<UserDropdownProps> = (args) => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <UserDropDown {...args} />
  </div>
)

Default.args = {
  username: 'Bernardo'
}
