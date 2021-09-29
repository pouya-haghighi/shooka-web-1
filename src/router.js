import {createRouter, createWebHistory} from 'vue-router';
import LoginPage from "./pages/LoginPage";
import MeetingsSchedule from "./pages/MeetingsSchedules";
const router = createRouter({
    history : createWebHistory(),
    routes : [
        {
            path : '/',
            redirect : '/login'
        },
        {
            path : '/login',
            component : LoginPage
        },
        {
            path : '/schedule',
            component : MeetingsSchedule
        }
    ]
})

export default router;