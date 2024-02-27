export default function Resources() {
  return (
    <>
      <main className="pl-16 pb-12">
        <h3 className="text-4xl pb-6">Resources</h3>
        <p>JSONPlaceholder comes with a set of 6 common resources:</p>

        <div className="leading-loose pt-8">

          <div className="flex gap-28">
            <a className="underline block" href="http://localhost:3000/post">
              posts
            </a>{" "}
            <div>100 posts</div>
          </div>

          <div className="flex gap-20">
            <a
              className="underline block"
              href="http://localhost:3000/commants"
            >
              commants
            </a>{" "}
            <span>100 commants</span>
          </div>
          <div className="flex gap-24">
            <a className="underline block" href="http://localhost:3000/albums">
              albums
            </a>{" "}
            <span>100 albums</span>
          </div>
          <div className="flex gap-24">
            <a className="underline block" href="http://localhost:3000/photos">
              photos
            </a>{" "}
            <span>100 photos</span>
          </div>

          <p className="pt-6 pb-12"><b>Note:</b>resources have relations. For example: posts have many comments, albums have many photos, ... see guide for the full list.</p>
        </div>





        <div className="leading-loose pt-8">
        <h3 className="text-4xl pb-6">Routes</h3>
        <p>All HTTP methods are supported. You can use http or https for your requests.</p>
          <div className="flex gap-16 pt-6">
            <div>GET</div>
            <a className="underline block" href="http://localhost:3000/post">
              /posts
            </a>{" "}
          </div>

          <div className="flex gap-16">
            <span>GET</span>
            <a
              className="underline block"
              href="http://localhost:3000/post/1"
            >
             /posts/1
            </a>{" "}
          </div>

          <div className="flex gap-16">
            <span>GET</span>
            <a className="underline block" href="http://localhost:3000/albums">
            /posts/1/comments
            </a>{" "}
          </div>
         
          <div className="flex gap-16">
            <span>GET</span>
            <p className="underline block">
            /comments?postId=1
            </p>{" "}
          </div>

          <div className="flex gap-16">
            <span>POST</span>
            <p className="underline">
            /posts/1
            </p>{" "}
          </div>
          <div className="flex gap-14">
            <span>PATCH</span>
            <p>
            /posts/1
            </p>{" "}
          </div>
          <div className="flex gap-12">
            <span>DELETE</span>
            <p>
            /posts/1
            </p>{" "}
          </div>

         <p className="pt-8 pb-12"><b>Note: </b> see guide for usage examples.</p>
        </div>

        <div>
            <h3 className="text-4xl pb-4">Use your own data</h3>
          <p className="pb-20">With our sponsor <a className="underline" href="https://mockend.com/">Mockend </a> and a simple GitHub repo, you can have your own fake online REST server in seconds.</p>
        </div>

        <div>
            <p className="font-bold underline pb-6">You can sponsor this project (and others) on GitHub</p>

            <p>Coded and maintained with ❤️ by <a className="underline" href="https://github.com/DipakKhade">Dipak Khade</a> © 2022</p>
        </div>

      </main>
    </>
  );
}
