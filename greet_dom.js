
document.addEventListener('alpine:init', function () {
    Alpine.data('greet', function () {
        return {
            username: '',
            langType: '',

            greetMe() {
                const greetMsg = greetFunc(this.username, this.langType)
                console.log(greetMsg);
                alert(greetMsg)
            },
        }
    });
});