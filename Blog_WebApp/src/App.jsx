import './App.css'
import Loading from './components/loading'
import PageContainer from './container/pageContainer'
import RouterConfig from './config/routerConfig'

function App() {

    return (
        <PageContainer>
            <Loading />
            <RouterConfig />
        </PageContainer>
    )
}

export default App