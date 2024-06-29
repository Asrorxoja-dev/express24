import { Outlet } from "react-router-dom"



function MainLayout() {
  return (
    <div>
        <div>
            <div>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default MainLayout