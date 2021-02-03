export const getItem = ()=>{
    const value = localStorage.getItem('scoreBoard')
    return value ? JSON.parse(value) : null
}