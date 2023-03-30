export default function (navigate, route, options={}){
    scrollTo({top: 0});
    navigate(route, options)
}