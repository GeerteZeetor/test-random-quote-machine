import {Button} from "./components/Button/Button";
import {Quote} from "./components/Quote/Quote";
import {useEffect, useState} from "react";

function App() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    async function updateQuote() {
        try {
            const response = await fetch("https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=ru");
            const {statusCode, statusMessage, ...data} = await response.json();
            if (!response.ok) {
                throw new Error(`${statusCode} ${statusMessage}`);
            }
            setData(data);
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            console.error(error);
            setData({quoteText: "Упс... Что-то пошло не так"});
        }
    }

    useEffect(() => {
        updateQuote();
    }, []);


    return (
        <div className="App">
            <section className="container-fluid">
                <h1 className='text-primary'>Random Quotes!</h1>
                {isLoading ? <div>Loading...</div> : <Quote text={data?.quoteText} author={data?.quoteAuthor}/>}
                <Button onClick={updateQuote} type="button" className="btn btn-primary" id="quote">New Quote</Button>
            </section>
        </div>
    );
}

export default App;
