Vue.component('Gallery', {
    data: function() {
        return {
            selectedImage: 0,
            variants: [
                { id: 1, image: 'public/images/gallery/1.png' },
                { id: 2, image: 'public/images/gallery/2.png' },
                { id: 3, image: 'public/images/gallery/3.png' },
                { id: 4, image: 'public/images/gallery/4.png' }
            ]
        }
    },
    template:`
        <div>
            <img id="main-image" :src="image">
            <div class="thumb-wrapper">
                <img v-for="(variant, index) in variants" 
                    :src="variants[index].image" 
                    class="thumbnail"/>
            </div>
        </div>
    `,
    computed: {
        image() {
            return this.variants[this.selectedImage].image;
        }
    }
})



var app = new Vue({
    el: '#app'
});