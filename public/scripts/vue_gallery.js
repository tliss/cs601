Vue.component('Gallery', {
    data: function() {
        return {
            selectedImage: 0,
            variants: [
                { id: 1, image: 'public/images/gallery/1.png', caption: "Sitting on the city wall of Xi'an, China in 2011" },
                { id: 2, image: 'public/images/gallery/2.png', caption: "Kayaking in the Charles river" },
                { id: 3, image: 'public/images/gallery/3.png', caption: "Working hard during the 2017 BostonHacks hackathon" },
                { id: 4, image: 'public/images/gallery/4.png', caption: "Practicing Capoeira in at Sinha Capoeira in 2019" }
            ]
        }
    },
    template:`
        <div>
            <figure id="vue-figure">
                <img id="main-image" :src="image">
                <figcaption id="vue-caption">{{ caption }}</figcaption>
            </figure>

            <div class="thumb-wrapper">
                <img v-for="(variant, index) in variants" 
                    :src="variants[index].image" 
                    class="thumbnail"
                    @mouseover="updateImage(index)"/>
            </div>
        </div>
    `,
    computed: {
        image() {
            return this.variants[this.selectedImage].image;
        },
        caption() {
            return this.variants[this.selectedImage].caption;
        }
    },
    methods: {
        updateImage (index) {
            this.selectedImage = index;
        }
    }
})



var app = new Vue({
    el: '#app'
});