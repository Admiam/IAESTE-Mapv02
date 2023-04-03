import Layout from "src/components/layout";
import FirebaseAuth from "../components/firebaseAuth";
import { GetServerSideProps, NextApiRequest } from "next";
import { loadIdToken } from "src/auth/firebaseAdmin";

export default function Auth() {
  return <Layout main={<FirebaseAuth />}></Layout>;
}
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const uid = await loadIdToken(req as NextApiRequest);

  //redirect to "/" when logged user try "/auth"
  //logged user "/auth" => "/"
  if (uid) {
    res.setHeader("location", "/");
    res.statusCode = 302;
    res.end();
  }

  return { props: {} };
};
