const fakeMessage = 
    [
        {"id": 1, "message": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, repellendus? Cum quisquam fugit vero laborum dolor veniam consectetur nemo est ab, debitis at. Neque doloremque ullam quasi aut eligendi provident, laborum consectetur itaque! Eius similique eos blanditiis provident explicabo pariatur reiciendis porro, animi numquam laboriosam? Illo obcaecati esse accusamus blanditiis."},
        {"id": 2, "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ratione, optio quae debitis repudiandae doloremque quod quam, ut quidem dolore nobis sint illo hic numquam quas, vero nemo amet cum explicabo impedit ex architecto dignissimos veritatis! Eligendi minima omnis quia eius quidem, itaque perspiciatis illo, exercitationem quam enim totam? Eligendi." },
        {"id": 3, "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatum in quas incidunt, officiis blanditiis sequi modi similique amet sit rem, eaque dolores quasi odio perferendis atque nulla unde. Excepturi perferendis quae laborum quas ipsa ipsam voluptatem dolores officia magni unde, earum tempore ducimus. Harum laudantium enim excepturi numquam nam."}, 
        {"id": 4, "message": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, natus. Dicta natus cumque sit vero autem quam aliquam perspiciatis ducimus odit repudiandae, commodi eveniet voluptas repellendus suscipit sint aut animi temporibus neque illum, quos beatae? Quisquam aut sequi unde commodi magnam ea dolor optio, doloribus laudantium quae consequuntur sunt omnis?"  },
        {"id": 5, "message": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, natus. Dicta natus cumque sit vero autem quam aliquam perspiciatis ducimus odit repudiandae, commodi eveniet voluptas repellendus suscipit sint aut animi temporibus neque illum, quos beatae? Quisquam aut sequi unde commodi magnam ea dolor optio, doloribus laudantium quae consequuntur sunt omnis?"  }, 
        {"id": 6, "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur facere quibusdam sunt, tenetur, reprehenderit natus nam asperiores repellat fugiat doloremque similique doloribus neque saepe. Ratione recusandae aliquid et ipsa nesciunt provident eligendi consequuntur eveniet aspernatur beatae quae mollitia voluptate non itaque a quia doloremque, illum, ad at voluptas vero."     }, 
        {"id": 7, "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. A cupiditate consectetur, officia doloremque ut, ipsam placeat quo modi quos sit et quod fuga magnam excepturi corporis iusto vel sint amet perferendis accusantium reprehenderit enim dicta! Ullam dolorum quos nulla natus! Modi reprehenderit error ducimus in magni incidunt culpa quo odit?" }, 
        {"id": 8, "message": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus maxime dolorem non at maiores reiciendis debitis. Corrupti doloremque dolorum itaque quae possimus quod, ducimus molestiae tempore. Recusandae nobis ipsum, laboriosam maxime repellendus blanditiis vitae quam veniam odio inventore, quisquam est magnam suscipit ipsa, nemo eos non earum dolorum eligendi dolore!" }, 
        {"id": 9, "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quas fuga tempore at non doloremque, esse porro exercitationem, molestias, aperiam beatae veritatis magni commodi cum rerum. Tenetur quo sit laboriosam recusandae repellat, magnam labore blanditiis doloribus accusamus, dicta eaque? Iure labore unde facere eveniet quibusdam rerum ex nam consectetur ab?" }, 
        {"id": 10, "message": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore dicta ut molestias officia. Harum maxime quibusdam iusto necessitatibus similique rerum, nulla esse quam officia inventore quae placeat dolor, totam veniam molestias corrupti hic minima cupiditate? Blanditiis, asperiores. Quia, reiciendis molestiae, deleniti aspernatur ex vel impedit fugiat, nemo natus mollitia veritatis." }
    ];

    const shufflePost = (fakeMessage) => {
        for (let i = 0; i < fakeMessage.length; i++){
            const random = Math.floor(Math.random() * fakeMessage.length);
            const temp = fakeMessage[random];
            fakeMessage[random] = fakeMessage[i];
            fakeMessage[i] = temp;
        }
    }

    shufflePost(fakeMessage)

export default fakeMessage;