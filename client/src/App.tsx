import { ConfigProvider } from "antd";

import MainView from "./screens/MainView";

import { colorPallette } from "./tools/consts";

import "./styles/App.scss";

function App() {
	return (
		<ConfigProvider
			theme={{
				token: {
					colorLink: colorPallette.colorPrimary,
					colorPrimary: colorPallette.colorPrimary
				}
			}}
		>
			<div className="App">
				<MainView />
			</div>
		</ConfigProvider>
	);
}

export default App;
