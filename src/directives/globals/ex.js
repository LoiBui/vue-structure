import Vue from 'vue'

//see more detail https://vuejs.org/v2/guide/custom-directive.html
Vue.directive('test', {
    //called only once, when the directive is first bound to the element. This is where you can do one-time setup work.
    bind(el, binding, vnode){
    },
    //called when the bound element has been inserted into its parent node (this only guarantees parent node presence, not necessarily in-document).
    inserted(){

    },
    // called after the containing component’s VNode has updated, but possibly before its children have updated. 
    // The directive’s value may or may not have changed, but you can skip unnecessary updates by comparing the binding’s current and old values
    update(){

    },
    //called after the containing component’s VNode and the VNodes of its children have updated.
    componentUpdated(){

    },
    //called only once, when the directive is unbound from the element
    unbind(){

    }
})