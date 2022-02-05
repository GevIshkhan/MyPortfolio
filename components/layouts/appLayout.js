import Header from "../header/header";
export default function AppLayout({ children }) {
  return (
    <>
      <div className="decor"></div>
      <div className="container">
        <Header />
        {children}
      </div>
    </>
  );
}
