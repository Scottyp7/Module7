import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import Rates from "./Rates"
import About from "./About"
import Home from "./Home"
import PageNotFound from "./PageNotFound"
import { DashboardMessages, DashboardTasks, DashboardPage } from "./DashboardPage"
import { PostList, PostsPage } from "./pages/PostPage"
import LoginForm from "./LoginForm"
import ProtectedRoute from "./ProtectedRoutes"
export default function AppRoutes(props)

{
    return(
        <Routes>
            <Route index element={<Home {...props}></Home>}></Route>

            <Route path="Rates" element={
            <ProtectedRoute><Rates></Rates> </ProtectedRoute>}></Route>    


            <Route path="about" element={<About></About>}></Route>

            <Route path="*" element={<PageNotFound></PageNotFound>}></Route>

            <Route path="dash" element={
                <ProtectedRoute>
                    <DashboardPage {...props} />
                </ProtectedRoute>}
            >
                        <Route path="messages" element={<DashboardMessages />} />
                        <Route path="tasks" element={<DashboardTasks />} />
            </Route>

            <Route path='/posts' element={<ProtectedRoute>
                <PostsPage {...props} /></ProtectedRoute>} >
                <Route index element={<PostList />} />

            </Route>

            <Route path="/login" element={<LoginForm></LoginForm>}></Route>
        </Routes>
    )
}
