
app = new Vue({
            el: '#comments1',
            data: {
                    name: "",
                    message: "",
                    comments: [
                    
                    ]
            },
            methods: {
                    addComment() { 
                            this.comments.push(
                            {
                                   
                                    name: this.name,
                                    text: this.message,
                                    date: (new Date()).toDateString()
                            }
                            )
                    }
            }
});

app = new Vue({
    el: '#comments2',
    data: {
            name: "",
            message: "",
            comments: [
            
            ]
    },
    methods: {
            addComment() { 
                    this.comments.push(
                    {
                           
                            name: this.name,
                            text: this.message,
                            date: (new Date()).toDateString()
                    }
                    )
            }
    }
});

app = new Vue({
    el: '#comments3',
    data: {
            name: "",
            message: "",
            comments: [
            
            ]
    },
    methods: {
            addComment() { 
                    this.comments.push(
                    {
                           
                            name: this.name,
                            text: this.message,
                            date: (new Date()).toDateString()
                    }
                    )
            }
    }
});

app = new Vue({
    el: '#comments4',
    data: {
            name: "",
            message: "",
            comments: [
            
            ]
    },
    methods: {
            addComment() { 
                    this.comments.push(
                    {
                           
                            name: this.name,
                            text: this.message,
                            date: (new Date()).toDateString()
                    }
                    )
            }
    }
});
