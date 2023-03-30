import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Home_V1.0.vue'
import ShopView from '../views/shop/Shop_V1.0.vue'
import MapView from '../views/Map_V1.0.vue'
import PlanningView from '../views/Planning_V1.0.vue'
import LogSignView from '../views/LogSign_V1.0.vue'
import AccountView from '../views/Account_V1.0.vue'

import GuestBookView from '../views/Account/GuestBook_V1.0.vue'
import GraphView from '../views/Account/Graph_V1.0.vue'

import VisitContractorView from '../views/VisitContractor_V1.0.vue'
import AddTimeSlotView from '../views/AddTimeSlot_V1.0.vue'

import PendingContractors from '../views/PendingContractors_V1.0.vue'
import ContractorsGraph from '../views/ContractorsGraph.vue'

import ChatView from '@/views/ChatView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/shop',
        name: 'shop',
        component: ShopView
    },
    {
        path: '/map',
        name: 'map',
        component: MapView
    },
    {
        path: '/planning',
        name: 'planning',
        component: PlanningView
    },
    {
        path: '/log-sign',
        name: 'log-sign',
        component: LogSignView
    },
    {
        path: '/account',
        name: 'account',
        component: AccountView
    },

    {
        path: '/contractor/guest-book',
        name: 'guest-book',
        component: GuestBookView
    },
    {
        path: '/contractor/graph',
        name: 'graph',
        component: GraphView
    },
    
    {
        path: '/log-out',
        name: 'log-out',
        redirect: '/log-sign?disconnected=true'
    },

    {
        path: '/visit-contractor/:id',
        name: 'visit-contractor',
        component: VisitContractorView
    },

    {
        path: '/add-time-slot',
        name: 'add-time-slot',
        component: AddTimeSlotView
    },

    {
        path: '/pending-contractors',
        name: 'pending-contractors',
        component: PendingContractors
    },
    {
        path: '/contractors-graph',
        name: 'contractors-graph',
        component: ContractorsGraph
    },

    {
        path: '/chat',
        name: 'chat',
        component: ChatView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
