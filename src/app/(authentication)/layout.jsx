import Logo from "@/components/logo";

export default function AuthenticationLayout({ children }) {
  return (
    <>
      <div className="container mx-auto my-12">
        <Logo />
      </div>
      {children}
    </>
  );
}
