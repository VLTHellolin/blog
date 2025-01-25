export function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='mt-20 flex justify-center'>
      <div className='grid grid-cols-5 gap-2 container'>
        {children}
      </div>
    </main>
  );
}

export function ContainerSide({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='col-span-1'>
      <div className='sticky top-20 flex flex-col gap-2'>
        {children}
      </div>
    </div>
  );
}

export function ContainerMain({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='col-span-4'>
      {children}
    </div>
  );
}
