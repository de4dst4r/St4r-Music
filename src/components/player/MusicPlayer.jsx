import { Button } from "antd"
import '@/styles/musicPlayer.scss'
const MusicPlayer = () => {
	return (
			<div className="player">
				<div className="record">
					<div className="hole"></div>
				</div>
				<div className="controls">
				<Button type="primary" className="control-button">播放</Button>
				<Button type="default" className="control-button">暂停</Button>
				<Button type="default" className="control-button">下一首</Button>
				</div>
			</div>
	)
}
export default MusicPlayer