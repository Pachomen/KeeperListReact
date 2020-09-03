import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Note from "./components/Note"
import notes from "./notes";


function App() {
    return(
        <div>
            <Header />
            {notes.map(notesFile => 
                <Note 
                    key = {notesFile.key} 
                    title = {notesFile.title} 
                    content = {notesFile.content}
                />
            )}
            <Footer />
        </div>
    );
}

export default App;