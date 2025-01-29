export function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='mt-20 flex justify-center'>
      <div className='flex justify-center container'>
        <div className='w-2/3'>
          {children}
        </div>
      </div>
    </main>
  );
}
