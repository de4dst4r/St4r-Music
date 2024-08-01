import Sidebar from "@/components/common/Sidebar"
import Header from "@/components/common/Header"
import '@/styles/home.scss'
import { Routes, Route,Outlet } from "react-router-dom"
import routes from '@/router/index.jsx'
function HomePage() {
	return (
		<div className="content">
			<Header/>
			<div className="main">
				<Sidebar/>
				<Routes>
					{routes.map((route, index) => (
						<Route key={index} path={route.path} element={route.element} />
					))}
				</Routes>
				<Outlet/>
			</div>
			<div className="footer">
				进度条
			</div>
		</div>
	)
}

export default HomePage