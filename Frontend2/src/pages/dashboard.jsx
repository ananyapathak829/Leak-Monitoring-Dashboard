import navbar from "./components/navbar";
import sidebar from "./components/sidebar";
import statcards from "./components/statcards";
import cards from "./components/cards";
import sensortable from "./components/sensortable";

function dashboard(){
    return(
        <div>
            <sidebar/>
            <div>
                <navbar/>
                <statcards/>
                <sensortable/>
            </div>
        </div>
    )
}