import { Icon } from '@iconify/react';
import { Callout } from '@radix-ui/themes';

export interface AlertProps {
  children: React.ReactNode;
  variant?: 'info' | 'important' | 'warning' | 'danger';
}

export const Alert = ({ children, variant }: AlertProps) => {
  const icon = {
    info: 'ri:information-line',
    important: 'ri:error-warning-line',
    warning: 'ri:alert-line',
    danger: 'ri:alarm-warning-line',
  }[variant ?? 'info'];
  const color = (
    {
      info: 'indigo',
      important: 'violet',
      warning: 'amber',
      danger: 'red',
    } as const
  )[variant ?? 'info'];

  return (
    <Callout.Root color={color} className='alert'>
      <Callout.Icon>
        <Icon icon={icon} width={20} />
      </Callout.Icon>
      {/* <div className='alert-bigicon'>
        <Icon icon={icon} width={80} />
      </div> */}
      <div className='alert-text'>{children}</div>
    </Callout.Root>
  );
};
