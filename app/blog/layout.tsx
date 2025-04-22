import SideNav from "../ui/blog/side-nav"



export default function Layout({children}: Readonly<{children: React.ReactNode}>){

  return (
    <div className="">
      <div>
        <SideNav />
      </div>
      <div className="mt-5">
        {children}
      </div>
    </div>
  );
}