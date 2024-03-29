/* eslint-disable @next/next/no-img-element */
import { FunctionComponent, ReactNode } from "react";
import Link from "next/link";
import { useAuth } from "../auth/useAuth";

interface IProps {
  main: ReactNode;
}

const Layout: FunctionComponent<IProps> = ({ main }) => {
  //   const authenticated = false;
  //   const logout = () => null;
  const { logout, authenticated } = useAuth();

  return (
    <div className="bg-white max-w-screen-2xl mx-auto text-slate-500 ">
      <div className="w-full border-b-4 border-slate-100">
        <nav className=" 	" style={{ height: "64px" }}>
          <div className="px-6 flex items-center justify-between h-16">
            <Link href="/">
              <img
                src="/next.svg"
                alt="next image"
                className="inline w-6"
              ></img>
            </Link>
            {authenticated ? (
              <>
                <Link href="/add">Add place</Link>
                <button onClick={logout}>Logout</button>
              </>
            ) : (
              <Link href="/auth">LogIn / SignUp</Link>
            )}
          </div>
        </nav>
      </div>
      <main style={{ minHeight: "calc(100vh - 64px" }}>{main}</main>
    </div>
  );
};
export default Layout;
