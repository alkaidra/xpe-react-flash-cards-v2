export function Header({ children, size }) {
    let fontSize;

    if (size === "large") {
        fontSize = "text-2xl";
    }   

    return (
        <header style={{fontFamily: "JetBrains Mono"}}>
          <div className="bg-pink-300 mx-auto p-4">
            <h1 className={"text-center font-semibold " + fontSize}>{ children }</h1>
          </div>
        </header>
    );
}