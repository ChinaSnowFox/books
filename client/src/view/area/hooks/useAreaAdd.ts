import useAreaStore from "../store";

export const useAreaAdd = () => {
    const store = useAreaStore()
    const add = () =>{
        store.$patch({
            visible:true,
            id:''
        })
    }
    return add
}
