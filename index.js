const post1 = {
    title: 'Первые шаги',
    shortDescription: 'Начал изучение git и github, взялся за верстку блога и составления структуры сайта...',
    tags: [
        'учеба',
        'CSS',
        'html'
    ],
    date: '04/05/2018'
}

const post2 = {
    title: 'Новые лайфхаки',
    shortDescription: 'Увидел на практике как составлять пост в виде данных и отображать его на странице с помощью js...',
    tags: [
        'учеба',
        'CSS',
        'html',
        'lifehack'
    ],
    date: '21/06/2018'
}

window.addEventListener("load", () => {
    const postsFeed = document.getElementById('posts');
    const firstPost = createPost(post1);
    postsFeed.appendChild(firstPost);
    const secondPost = createPost(post2);
    postsFeed.appendChild(secondPost);
})

function createPost(post1) {
    const container = document.createElement('div');
    container.classList.add('post');

    const titleElement = document.createElement('div');
    titleElement.appendChild(document.createTextNode(post1.title));
    titleElement.classList.add('post__title');
    container.appendChild(titleElement);

    const shortDescriptionElement = document.createElement('div');
    shortDescriptionElement.classList.add('post__text');
    shortDescriptionElement.appendChild(document.createTextNode(post1.shortDescription));
    container.appendChild(shortDescriptionElement);

    const dateElement = document.createElement('div');
    dateElement.classList.add('post__date');
    dateElement.appendChild(document.createTextNode(post1.date));
    container.appendChild(dateElement);

    const tagsElement = document.createElement('div');
    tagsElement.classList.add('post__tags');
    tagsElement.appendChild(document.createTextNode(post1.tags));
    container.appendChild(tagsElement);

    return container;
}
