import { Outlet } from "react-router"

const AdminLayout = () => {
    return(
        <div className="admin-layout">
side bar
<aside className="w-full max-w-[270px] hidden lg:block">
sidee
</aside>
<aside className="children">
    <Outlet/>
</aside>
        </div>
    )
}

export default AdminLayout
