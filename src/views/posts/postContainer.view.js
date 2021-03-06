import { PostView } from "./post.view.js";

export class PostContainerView {
    constructor(post) {
        this.postView = new PostView(post);
    }
    /**
     * Builds the view element.
     * @returns {HTMLElement} HTML element.
    */
    getElement() {
        const postContainer = document.createElement('div');
        postContainer.className = "post-container";
        postContainer.appendChild(this.postView.getElement())
        return postContainer;
    }

}
