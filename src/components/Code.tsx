export function Code({ children, ...props }: React.ComponentPropsWithRef<'code'>) {
  return (
    <code className='rounded-md bg-background/75' {...props}>
      {children}
    </code>
  );
};
