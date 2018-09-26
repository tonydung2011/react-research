import master from './master'
import styleGuide from './styleGuide'
import home from './pages/home'
import navbar from './ui/navbar'
import drawer from './ui/drawer'
import hoverButton from './ui/hoverButton';

export default {
    master,
    styleGuide,
    pages: {
        home,
    },
    ui: {
        navbar,
        drawer,
        hoverButton,
    }
}
