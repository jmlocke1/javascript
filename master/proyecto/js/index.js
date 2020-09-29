$(document).ready(function(){
    // Slider
    $(function(){
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: false,
            slideWidth: 0,
            responsive: true,
            auto: false,
            speed: 1000
        });
    });



    // Posts
    var posts = [
        {
            title: 'Prueba de título 1',
            date: 'Publicado el día '+ moment().format("dddd[,] D [de] MMMM [del] YYYY"),
            content: 'Artículo 1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero ea perferendis sed nihil natus suscipit, officiis in ullam numquam est iste, dicta eum reprehenderit tenetur deleniti rem corporis? Deserunt, harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum explicabo non sint quia quasi vitae, provident dolor consectetur doloremque eum voluptate magnam ducimus veniam at iusto accusantium, quod consequuntur molestias!'
        },
        {
            title: 'Prueba de título 2',
            date: 'Publicado el día '+ moment().format("dddd[,] D [de] MMMM [del] YYYY"),
            content: 'Artículo 2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero ea perferendis sed nihil natus suscipit, officiis in ullam numquam est iste, dicta eum reprehenderit tenetur deleniti rem corporis? Deserunt, harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum explicabo non sint quia quasi vitae, provident dolor consectetur doloremque eum voluptate magnam ducimus veniam at iusto accusantium, quod consequuntur molestias!'
        },
        {
            title: 'Prueba de título 3',
            date: 'Publicado el día '+ moment().format("dddd[,] D [de] MMMM [del] YYYY"),
            content: 'Artículo 3 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero ea perferendis sed nihil natus suscipit, officiis in ullam numquam est iste, dicta eum reprehenderit tenetur deleniti rem corporis? Deserunt, harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum explicabo non sint quia quasi vitae, provident dolor consectetur doloremque eum voluptate magnam ducimus veniam at iusto accusantium, quod consequuntur molestias!'
        },
        {
            title: 'Prueba de título 4',
            date: 'Publicado el día '+ moment().format("dddd[,] D [de] MMMM [del] YYYY"),
            content: 'Artículo 4 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero ea perferendis sed nihil natus suscipit, officiis in ullam numquam est iste, dicta eum reprehenderit tenetur deleniti rem corporis? Deserunt, harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum explicabo non sint quia quasi vitae, provident dolor consectetur doloremque eum voluptate magnam ducimus veniam at iusto accusantium, quod consequuntur molestias!'
        },
        {
            title: 'Prueba de título 5',
            date: 'Publicado el día '+ moment().format("dddd[,] D [de] MMMM [del] YYYY"),
            content: 'Artículo 5 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero ea perferendis sed nihil natus suscipit, officiis in ullam numquam est iste, dicta eum reprehenderit tenetur deleniti rem corporis? Deserunt, harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum explicabo non sint quia quasi vitae, provident dolor consectetur doloremque eum voluptate magnam ducimus veniam at iusto accusantium, quod consequuntur molestias!'
        },
        {
            title: 'Prueba de título 6',
            date: 'Publicado el día '+ moment().format("dddd[,] D [de] MMMM [del] YYYY"),
            content: 'Artículo 6 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero ea perferendis sed nihil natus suscipit, officiis in ullam numquam est iste, dicta eum reprehenderit tenetur deleniti rem corporis? Deserunt, harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum explicabo non sint quia quasi vitae, provident dolor consectetur doloremque eum voluptate magnam ducimus veniam at iusto accusantium, quod consequuntur molestias!'
        },    
    ];
    posts.forEach((item, index) => {
        var post = `
    <article class="post">
        <h2>${item.title}</h2>
        <div class="date">${item.date}</div>
        <p>${item.content}</p>
        <a href="#" class="button-more">Leer más</a>
    </article>
        `;
        $('#posts').append(post);
    });
    $('#posts').append('<div class="clearfix"></div>');
});