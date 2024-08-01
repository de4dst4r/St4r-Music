import {Menu} from 'antd'
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
	const navigate = useNavigate()

	const menuItems = [
		{label: '首页', key: '1', path: '/'},
		{label: '当前', key: '2', path: '/music'},
		{label: '播放列表', key: '3'},
		{label: '我的音乐', key: '4', path: '/my-music'},
	]

	const handleMenuClick = (({key}) => {
		const selectedItem = menuItems.find(item => item.key === key)
		if(selectedItem) {
			navigate(selectedItem.path)
		}
	})
	return (
		<div className="siderbar">
			<Menu mode='inline' items={menuItems} onClick={handleMenuClick}></Menu>
		</div>
	)
}

export default Sidebar