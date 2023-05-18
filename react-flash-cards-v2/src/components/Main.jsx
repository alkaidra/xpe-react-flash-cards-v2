import React from "react"

export function Main({ children }) {
    return (
        <main style={{fontFamily: "JetBrains Mono"}} className="container mx-auto p-4 flex flex-col gap-4">
            { children }
        </main>
    )
}