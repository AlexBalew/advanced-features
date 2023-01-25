import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/route-config/routeConfig'

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>} >
            <Routes>
                {Object.values(routeConfig).map(({ path, element }) => (
                    <Route key={path} path={path} element={(
                        <div className='content-wrapper'>
                            {element}
                        </div>
                    )} />
                ))}
            </Routes>
        </Suspense>
    )
}

export default AppRouter