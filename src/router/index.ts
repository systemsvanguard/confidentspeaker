// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import SiteHome from '../views/SiteHome.vue'
import Contact from '../views/Contact.vue'
import Resources from '../views/Resources.vue'
import About from '../views/About.vue' 
import ArticleDetail from '../views/ArticleDetail.vue'
// Blog Articles 
import BetterSpeaking from '../posts/BetterSpeaking.vue'
import CompetenceLevel from '../posts/CompetenceLevel.vue' 
import JackAllTrades from '../posts/JackAllTrades.vue'
import UnknownUnknowns from '../posts/UnknownUnknowns.vue' 

import Improve12Tips from '../posts/Improve12Tips.vue' 
import StPatricksDay from '../posts/StPatricksDay.vue'
import Glossophobia from '../posts/Glossophobia.vue' 
import ImprovePS from '../posts/ImprovePS.vue'

import GlossophobiaExorcized from '../posts/GlossophobiaExorcized.vue'
import HanseiKaizen from '../posts/HanseiKaizen.vue'
import MuchToDo from '../posts/MuchToDo.vue'
import PSFear from '../posts/PSFear.vue'

import Procrastination from '../posts/Procrastination.vue'
import SmallBusiness from '../posts/SmallBusiness.vue'
import QuotesReSpeeches from '../posts/QuotesReSpeeches.vue'



const routes = [
  { path: '/', name: 'SiteHome', component: SiteHome },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/about', name: 'About', component: About },
  { path: '/resources', name: 'Resources', component: Resources },   

  { path: '/betterspeaking', name: 'BetterSpeaking', component: BetterSpeaking },
  { path: '/competencelevel', name: 'CompetenceLevel', component: CompetenceLevel }, 
  { path: '/jackalltrades', name: 'JackAllTrades', component: JackAllTrades },
  { path: '/unknownunknowns', name: 'UnknownUnknowns', component: UnknownUnknowns }, 
  
  { path: '/improve12tips', name: 'Improve12Tips', component: Improve12Tips },
  { path: '/stpatricksday', name: 'StPatricksDay', component: StPatricksDay },  
  { path: '/glossophobia', name: 'Glossophobia', component: Glossophobia }, 
  { path: '/improveps', name: 'ImprovePS', component: ImprovePS },
  
  { path: '/glossophobiaexorcized', name: 'GlossophobiaExorcized', component: GlossophobiaExorcized },  
  { path: '/hanseikaizen', name: 'HanseiKaizen', component: HanseiKaizen },  
  { path: '/muchtodo', name: 'MuchToDo', component: MuchToDo },  
  { path: '/psfear', name: 'PSFear', component: PSFear },
  
  { path: '/procrastination', name: 'Procrastination', component: Procrastination },
  { path: '/smallbusiness', name: 'SmallBusiness', component: SmallBusiness },
  
  { path: '/quotesrespeeches', name: 'QuotesReSpeeches', component: QuotesReSpeeches }, 
  { path: '/article/:id', name: 'ArticleDetail', component: ArticleDetail }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
