
document.addEventListener('alpine:init', function () {
    Alpine.data('greet', function () {
        return {
            username: '',
            langType: '',
            greetMsg:'',
            
            greetMe() {
                this.greetMsg = greetFunc(this.username, this.langType)
                console.log(this.greetMsg);
            },
        }
    });
});