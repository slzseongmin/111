import Airport from "./airport";
import Test from "./src/components/Test";

export default function Home() {
  return (
    <div style={{ flex: 1, display: "flex", height: "100vh", width: "100vw" }}>
      <Airport />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};