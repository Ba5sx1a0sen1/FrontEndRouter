class Routers{
    constructor(){
        this.routes = {}
        this.currentUrl = ''
        this.refresh = this.refresh.bind(this)
        window.addEventListener('load',this.refresh,false)
        window.addEventListener('hashchange',this.refresh,false)
    }

    route(path,callback){
        this.routes[path] = callback || function(){}
    }

    refresh(){
        this.currentUrl = location.hash.slice(1) || '/'
        this.routes[`${this.currentUrl}`]()
    }
}

window.Router = new Routers();
let content = document.querySelector('body')
function changeBgColor(color){
    content.style.backgroundColor = color
}
//注册路由
Router.route('/',function(){
    changeBgColor('red')
})
Router.route('/green',function(){
    changeBgColor('green')
})
Router.route('/blue',function(){
    changeBgColor('blue')
})