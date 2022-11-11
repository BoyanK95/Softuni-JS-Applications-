import { initialize } from "./src/router.js"
import { showCatalog } from "./src/views/catalog.js"
import { showCreate } from "./src/views/create.js"
import { showDetails } from "./src/views/details.js"
import { showHome } from "./src/views/home.js"
import { showLogin } from "./src/views/login.js"
import { showRegister } from "./src/views/register.js"




document.getElementById('defSection').remove()

const links = {
    '/': showHome,
    '/catalog': showCatalog,
    '/login': showLogin,
    '/register': showRegister,
    '/details': showDetails,
    '/create': showCreate,
}

const router = initialize(links)
router.updateNavigate()
router.goTo('/')









