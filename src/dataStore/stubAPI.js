// Use for loop to iterate and create ID's
import _ from "lodash";

class StubAPI {
    constructor() {
        this.posts = [
            {
                id: 1,
                title: "GitHub",
                link: "https://www.GitHub.com",
                username: "TheresAFewConors",
            },
            {
                id: 2,
                title: "Facebook",
                link: "https://www.facebook.com",
                username: "Connor Jackson",
                comments: [],
                rating: 6
            },
            {
                id: 3,
                title:
                    "Outlook Email",
                link: "",
                username: "ConnorJackson@Outlook.ie",
                comments: [],
                rating: 8
            },
            {
                id: 4,
                title:
                    "Border Firewalls",
                link: "http://10.10.10.10",
                username: "cjackson454",
                comments: [],
                rating: 2
            },

        ];
    }

    getAll() {
        return this.posts;
    }

    add(title, author, link) {
        let id = 1;
        let last = _.last(this.posts);
        if (last) {
            id = last.id + 1;
        }
        let len = this.posts.length;
        let newLen = this.posts.push({
            id,
            title,
            author,
            link,
            comments: [],
            upvotes: 0
        });
        return newLen > len;
    }

    upvote(id) {
        let index = _.findIndex(this.posts, post => post.id === id);
        if (index !== -1) {
            this.posts[index].upvotes += 1;
            return true;
        }
        return false;
    }

    getPost(id) {
        let index = _.findIndex(this.posts, post => post.id === id);
        let result = index !== -1 ? this.posts[index] : null;
        return result;
    }

    addComment(postId, c, n) {
        let post = this.getPost(postId);
        let id = 1;
        let last = _.last(post.comments);
        if (last) {
            id = last.id + 1;
        }
        post.comments.push({ id: id, comment: c, author: n, upvotes: 0 });
    }

    upvoteComment(postId, commentId) {
        let post = this.getPost(postId);
        let index = _.findIndex(post.comments, c => c.id === commentId);
        if (index !== -1) {
            post.comments[index].upvotes += 1;
        }
    }
}

export default new StubAPI();