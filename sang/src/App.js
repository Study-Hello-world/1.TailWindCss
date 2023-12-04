import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <div className="bg-blue-500 basis-1/4"> Tailwind Css 적용 테스트 </div>
        <div className="flex flex-row">
          <div className="basis-1/4">01</div>
          <div className="basis-1/4">02</div>
          <div className="basis-1/2">03</div>
        </div>
        <div>
          <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img
              class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
              src="/sarah-dayan.jpg"
              alt=""
              width="384"
              height="512"
            />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <blockquote>
                <p className="text-lg font-medium">
                  “Tailwind CSS is the only framework that I've seen scale on
                  large teams. It’s easy to customize, adapts to any design, and
                  the build size is tiny.”
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400">
                  Sarah Dayan
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                  Staff Engineer, Algolia
                </div>
              </figcaption>
            </div>
          </figure>
        </div>
        <div className="p-10 font-medium border-2 ">ddd</div>
      </div>
    </>
  );
}

export default App;
