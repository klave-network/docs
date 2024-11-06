import type { LucideIcon } from 'lucide-react';
import { TerminalIcon } from 'lucide-react';
import { type HTMLAttributes } from 'react';
import { cn } from '~/lib/utils';

export function IconContainer({
  icon: Icon,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  icon?: LucideIcon;
}): React.ReactElement {
  return (
    <div
      {...props}
      className={cn(
        'rounded-md border bg-gradient-to-b from-muted to-secondary p-0.5 [a[data-active=true]_&]:from-primary/30 [a[data-active=true]_&]:to-primary [a[data-active=true]_&]:text-primary-foreground',
        props.className,
      )}
    >
      {Icon ? <Icon /> : <TerminalIcon />}
    </div>
  );
}
