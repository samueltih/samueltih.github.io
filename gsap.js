const {
    gsap
} = require("gsap");
const { ScrollToPlugin } = require("gsap/dist/ScrollToPlugin");
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");

if(typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

module.exports = {
    gsap,
    ScrollTrigger
};