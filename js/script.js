const { createApp } = Vue;

createApp({
    data() {
        return {
            todoItem: '',
            todoList: null,
            apiUrl: 'server.php'
        }
    },
    mounted() {
        axios.get(this.apiUrl).then ((response)=> {
            console.log(response.data)
            this.todoList = response.data;
        });
    },
    methods: {
        updateList(){
            let obj = {
                text: this.todoItem,
                done:false
            }
            const data = {
                todoItem: obj
            }
            axios.post(this.apiUrl, data ,{
                headers:{'Content-Type': 'multipart/form-data'}
            }).then((response)=>{
                this.todoItem = '';
                this.todoList = response.data;
            });
        },
    }
}).mount('#app');