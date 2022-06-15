import useClassesStore from "../store";
const useHead = () => {
    const store = useClassesStore()
    const area_add = () => {
        store.$patch({
            visible:true
        })
    }


    return {
        area_add
    }
}


export default useHead
