import { GetServerSideProps, NextApiRequest } from "next";
import { loadIdToken } from "src/auth/firebaseAdmin";
import PlaceForm from "src/components/PlaceForm";
import Layout from "src/components/layout";

export default function Add() {
  return (
    <Layout
      main={
        <div className="flex justify-center">
          <PlaceForm />
        </div>
      }
    />
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const uid = await loadIdToken(req as NextApiRequest);

  if (!uid) {
    res.setHeader("location", "/auth");
    res.statusCode = 302;
    res.end();
  }

  return { props: {} };
};
