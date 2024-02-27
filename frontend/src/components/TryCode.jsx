import { useState } from "react"


export default function TryCode(){
const [run, setRun ]=useState(false)

    return(
        <>
            <main className="p-3 pb-12">
            <h4 className="text-4xl mt-2 mb-3 ">Try it</h4>
            <p className="mb-4">Run this code here, in a console or from any site:</p>
                <div className="w-full bg-[#2D2D2D] p-4 rounded-md text-slate-100">
                <pre className="whitespace-pre-wrap"><code>
<span className="text-orange-400">fetch</span>(<span className="text-[#7EC68F]">&apos;https://jsonplaceholder.typicode.com/todos/1&apos;</span>)
<br />
      &nbsp; &nbsp; &nbsp;.<span className="text-orange-400">then</span>(response =&gt; response.<span className="text-orange-400">json</span>())
  <br />
  &nbsp; &nbsp; &nbsp;.<span className="text-orange-400">then</span>(json =&gt; console.<span className="text-orange-400">log</span>(json))</code></pre>
                </div>

                <button
                onClick={()=>setRun(true)}
                 className="bg-[#10B981] p-2 text-white font-bold mt-6 mb-3 rounded-md pl-3 pr-3">
                    Run Script
                </button>



                <div className="w-full bg-[#2D2D2D] p-6 rounded-md text-slate-50">
                    <pre>
                        <code>
{/* adding the data which is fetched from our site */}
                    
{!run ? '{}':`{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}`}
                        </code>
                    </pre>
                </div>

                <p className="pt-6">
                Congrats you&apos;ve made your first call to JSONPlaceholder! 😃 🎉
                </p>
            </main>
        </>
    )
}