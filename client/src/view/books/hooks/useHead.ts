import useBooksStore from "../store/useBooksStore";
const useHead = () => {
    const store = useBooksStore()
    const addBooks = () => {
        store.$patch({
            visible:true
        })
    }

    return {
        addBooks
    }
}

export default useHead
