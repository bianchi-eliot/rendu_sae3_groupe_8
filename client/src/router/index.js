import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import ShopView from '../views/shop/Shop.vue'
import MapView from '../views/Map.vue'
import PlanningView from '../views/Planning.vue'
import LogSignView from '../views/LogSign.vue'
import AccountView from '../views/Account.vue'
import PieceDetails from "@/views/shop/pieces/PieceDetails.vue"

import GuestBookView from '../views/Account/GuestBook.vue'
import GraphView from '../views/Account/Graph.vue'

import VisitContractorView from '../views/VisitContractor.vue'
import AddTimeSlotView from '../views/AddTimeSlot.vue'

import PendingContractors from '../views/PendingContractors.vue'

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
        path: '/shop/piece/:id',
        name: 'details_piece',
        component: PieceDetails
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
        path: '/contractor/:id/guest-book',
        name: 'guest-book',
        component: GuestBookView
    },
    {
        path: '/contractor/:id/graph',
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
        path: '/add-time-slot/:id',
        name: 'add-time-slot',
        component: AddTimeSlotView
    },

    {
        path: '/pending-contractors',
        name: 'pending-contractors',
        component: PendingContractors
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
