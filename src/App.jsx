import CrossIcon from "./components/CrossIcon";
import MoonIcon from "./components/MoonIcon";

const App = () => {
  return (
    <>
      <div className="bg-[url('./assets/images/bg-desktop-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen">
        <header className="container mx-auto px-4">
          <div className="flex justify-between pt-8">
            <h1 className="uppercase text-2xl text-white font-bold tracking-[0.3em]">
              Todo App
            </h1>
            <button>
              <MoonIcon fill={"#fff"} />
            </button>
          </div>
          <form className="flex items-center gap-4 bg-white rounded-md overflow-hidden py-4 px-4 mt-8">
            <span className="inline-block h-5 w-5 rounded-full border-2"></span>
            <input
              className="w-full text-gray-400 outline-none"
              type="text"
              placeholder="Create a new todo..."
            />
          </form>
        </header>
        {/* Aqui iba */}

        <main className="container mx-auto px-4 mt-8">
          <div className="bg-white rounded-md [&>article]:p-4">
            <article className="flex gap-4 border-b-gray-400 border-b">
              <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
              <p className="text-gray-400 grow text-xs">
                Complete online JavaScript course
              </p>
              <button className="flex-none">
                <CrossIcon />
              </button>
            </article>
            <article className="flex gap-4 border-b-gray-400 border-b">
              <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
              <p className="text-gray-600 grow text-xs">
                Jog around the park 3x
              </p>
              <button className="flex-none">
                <CrossIcon />
              </button>
            </article>
            <article className="flex gap-4 border-b-gray-400 border-b">
              <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
              <p className="text-gray-600 grow text-xs">
                10 minutes meditation
              </p>
              <button className="flex-none">
                <CrossIcon />
              </button>
            </article>
            <article className="flex gap-4 border-b-gray-400 border-b">
              <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
              <p className="text-gray-600 grow text-xs">Read for 1 hour</p>
              <button className="flex-none">
                <CrossIcon />
              </button>
            </article>
            <article className="flex gap-4 border-b-gray-400 border-b">
              <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
              <p className="text-gray-600 grow text-xs">Pick uo groceries</p>
              <button className="flex-none">
                <CrossIcon />
              </button>
            </article>
            <article className="flex gap-4 border-b-gray-400 border-b">
              <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
              <p className="text-gray-600 grow text-xs">
                Complete Todo App on Frontend Mentor
              </p>
              <button className="flex-none">
                <CrossIcon />
              </button>
            </article>
            <section className="py-4 px-4 text-gray-600 flex justify-between">
              <span>5 items left</span>
              <button>Clear Completed</button>
            </section>
          </div>

          <div className="bg-white rounded-md container mx-auto p-4 mt-8">
            <section className="flex justify-center gap-4">
              <button className="text-blue-500">All</button>
              <button>Active</button>
              <button>Completed</button>
            </section>
          </div>
          <p className="text-center p-8 text-gray-500">
            Drag and drop to reorder list
          </p>
        </main>
      </div>
    </>
  );
};
export default App;
