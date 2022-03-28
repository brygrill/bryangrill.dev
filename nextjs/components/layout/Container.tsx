interface ContainerProps {
  children: React.ReactNode;
}

/** Render `main` component across app */
export const Container = ({ children }: ContainerProps) => {
  return (
    <main className="container container-extended p-4 md:px-8 lg:px-20">
      {children}
    </main>
  );
};
