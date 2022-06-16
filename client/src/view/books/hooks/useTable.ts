import {BooksList} from "../../../api/server/books";
import useBooksStore from "../store/useBooksStore";
import {onMounted, reactive,ref} from "vue";
import {TableColumnData,TableData} from "@arco-design/web-vue";
const useTable = () => {
    const data = ref<TableData[]>([])

    const columns = reactive<TableColumnData[]>([
        {
            title:'名字',
            dataIndex:'books_name'
        },
        {
            title:"关键字",
            dataIndex:'books_keyword'
        },
        {
            title:'标题',
            dataIndex:'books_title'
        },
        {
            title:'所属种类',
            dataIndex:'class'
        },
        {
            title:'数量',
            dataIndex:"amount"
        },
        {
            title:'所属区域',
            dataIndex:'area'
        }
    ])

    function list () {
        BooksList().then(res=>{
            data.value = res.data.data
        })
    }
    list()
    return {
        data,
        columns
    }
}

export default useTable
